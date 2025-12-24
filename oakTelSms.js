const http = require("http");

const OAKTEL_CONFIG = {
  host: "8.219.42.83",
  port: 20003,
  account: "0171C140",
  password: "uLUyl6n3rSkwGlVKdJ",
};

/**
 * Send SMS using OAK-TEL HTTP API v3.4 (POST)
 * @param {string[]} numbers - Array of phone numbers
 * @param {string} message - SMS text
 */
function sendSMS(numbers, message) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(numbers) || numbers.length === 0) {
      return reject(new Error("Numbers list is empty"));
    }

    if (!message) {
      return reject(new Error("Message content is empty"));
    }

    // Always ensure +39 prefix
    const formattedNumbers = numbers.map((n) => {
      n = n.toString().trim();
      if (!n.startsWith("+39")) {
        n = "+39" + n.replace(/^0+/, "");
      }
      return n;
    });

    const payload = JSON.stringify({
      account: OAKTEL_CONFIG.account,
      password: OAKTEL_CONFIG.password,
      smstype: 0,
      numbers: formattedNumbers.join(","),
      content: message,
    });

    const options = {
      host: OAKTEL_CONFIG.host,
      port: OAKTEL_CONFIG.port,
      path: "/sendsms",
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "Content-Length": Buffer.byteLength(payload),
      },
      timeout: 15000,
    };

    console.log("📨 Sending SMS to:", formattedNumbers);

    const req = http.request(options, (res) => {
      let data = "";

      res.on("data", (chunk) => (data += chunk));

      res.on("end", () => {
        try {
          const response = JSON.parse(data);

          // Handle auth failure explicitly
          if (response.status === -1) {
            return reject(
              new Error("Authentication failure: check account/password")
            );
          }

          console.log("✅ SMS API Response:", response);
          resolve(response);
        } catch (err) {
          reject(new Error("Invalid JSON response from SMS server"));
        }
      });
    });

    req.on("error", (err) => {
      reject(err);
    });

    req.on("timeout", () => {
      req.destroy();
      reject(new Error("SMS request timeout"));
    });

    req.write(payload);
    req.end();
  });
}

module.exports = { sendSMS };
