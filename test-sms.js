const smpp = require("smpp");

// OAK-TEL SMPP Configuration
const OAKTEL_CONFIG = {
  host: "8.219.42.83",
  port: 20002,
  systemId: "0171C140",
  password: "ytUOI1$",
};

function validatePhoneNumber(number) {
  // Remove any non-digit characters
  const cleaned = number.replace(/\D/g, '');
  
  // Check length
  if (cleaned.length < 10 || cleaned.length > 15) {
    return {
      valid: false,
      error: `Invalid length: ${cleaned.length} digits (should be 10-15)`
    };
  }
  
  // Check if it starts with a country code
  const countryCodes = {
    '39': 'Italy',
    '234': 'Nigeria',
    '1': 'USA/Canada',
    '44': 'UK',
    '33': 'France',
    '49': 'Germany',
  };
  
  let country = null;
  for (const [code, name] of Object.entries(countryCodes)) {
    if (cleaned.startsWith(code)) {
      country = name;
      break;
    }
  }
  
  return {
    valid: true,
    cleaned: cleaned,
    length: cleaned.length,
    country: country || 'Unknown',
    formatted: cleaned
  };
}

async function testSMS() {
  // Change this to test different numbers
  // Known working Italian number: "393316971359"
  const phoneNumber = "393316971359";
  const message = "Test SMS from Kraken Live Panel";

  console.log("=".repeat(50));
  console.log("Testing SMS Sending (SMPP Protocol)");
  console.log("=".repeat(50));
  
  // Validate phone number
  const validation = validatePhoneNumber(phoneNumber);
  console.log(`Phone Number: ${phoneNumber}`);
  if (validation.valid) {
    console.log(`✅ Validated: ${validation.cleaned} (${validation.length} digits, ${validation.country})`);
  } else {
    console.log(`❌ Validation Error: ${validation.error}`);
    console.log("⚠️  This may cause delivery failure!");
  }
  console.log(`Message: ${message}`);
  console.log("=".repeat(50));
  console.log("");

  // Use cleaned number if validation passed
  const numberToSend = validation.valid ? validation.cleaned : phoneNumber.replace(/\D/g, '');

  return new Promise((resolve, reject) => {
    console.log("Connecting to SMPP server...");
    console.log(`Server: ${OAKTEL_CONFIG.host}:${OAKTEL_CONFIG.port}`);
    console.log("");

    const session = smpp.connect(
      {
        url: `smpp://${OAKTEL_CONFIG.host}:${OAKTEL_CONFIG.port}`,
        auto_enquire_link_period: 10000,
        debug: false,
      },
      () => {
        console.log("✅ Connected to SMPP server");
        console.log("Authenticating...");

        session.bind_transceiver(
          {
            system_id: OAKTEL_CONFIG.systemId,
            password: OAKTEL_CONFIG.password,
          },
          (pdu) => {
            if (pdu.command_status === 0) {
              console.log("✅ Successfully bound to SMPP server");
              console.log("");
              console.log("Sending SMS...");
              console.log(`To: ${numberToSend}`);
              console.log(`Message: ${message}`);
              console.log("");

              session.submit_sm(
                {
                  destination_addr: numberToSend,
                  short_message: message,
                  source_addr: OAKTEL_CONFIG.systemId, // or your sender ID
                  data_coding: 0, // 0 = default alphabet
                },
                (pdu) => {
                  if (pdu.command_status === 0) {
                    console.log("=".repeat(50));
                    console.log("✅ SUCCESS!");
                    console.log("=".repeat(50));
                    console.log("Message ID:", pdu.message_id);
                    console.log("Status: Accepted by SMSC");
                    console.log("");
                    console.log("⚠️  NOTE: Message accepted, but delivery may:");
                    console.log("   - Take a few minutes to arrive");
                    console.log("   - Be blocked by carrier/network");
                    console.log("   - Fail if number format is incorrect");
                    console.log("   - Fail if international routing is not enabled");
                    console.log("");
                    console.log("💡 TROUBLESHOOTING:");
                    console.log("   1. Verify the number format is correct (country code + number)");
                    console.log("   2. Check if your account supports international SMS");
                    console.log("   3. Try with a different number");
                    console.log("   4. Contact OAK-TEL support to check delivery status");

                    // Unbind and close
                    setTimeout(() => {
                      session.unbind();
                      session.close();
                      resolve();
                    }, 1000);
                  } else {
                    console.log("=".repeat(50));
                    console.log("❌ FAILED!");
                    console.log("=".repeat(50));
                    console.error("Error Code:", pdu.command_status);
                    console.error("Error:", getSMPPError(pdu.command_status));
                    session.unbind();
                    session.close();
                    reject(new Error(`SMPP Error ${pdu.command_status}: ${getSMPPError(pdu.command_status)}`));
                  }
                }
              );
            } else {
              console.log("=".repeat(50));
              console.log("❌ AUTHENTICATION FAILED!");
              console.log("=".repeat(50));
              console.error("Error Code:", pdu.command_status);
              console.error("Error:", getSMPPError(pdu.command_status));
              session.close();
              reject(new Error(`Authentication failed: ${getSMPPError(pdu.command_status)}`));
            }
          }
        );
      }
    );

    session.on("error", (error) => {
      console.log("=".repeat(50));
      console.log("❌ CONNECTION ERROR!");
      console.log("=".repeat(50));
      console.error("Error:", error.message);
      reject(error);
    });

    session.on("close", () => {
      console.log("Connection closed");
    });
  });
}

// Helper function to get SMPP error descriptions
function getSMPPError(code) {
  const errors = {
    0x00000000: "ESME_ROK - No Error",
    0x00000001: "ESME_RINVMSGLEN - Message Length is invalid",
    0x00000002: "ESME_RINVCMDLEN - Command Length is invalid",
    0x00000003: "ESME_RINVCMDID - Invalid Command ID",
    0x00000004: "ESME_RINVBNDSTS - Incorrect BIND Status for given command",
    0x00000005: "ESME_RALYBND - ESME Already in Bound State",
    0x00000006: "ESME_RINVPRTFLG - Invalid Priority Flag",
    0x00000007: "ESME_RINVREGDLVFLG - Invalid Registered Delivery Flag",
    0x00000008: "ESME_RSYSERR - System Error",
    0x0000000A: "ESME_RINVSRCADR - Invalid Source Address",
    0x0000000B: "ESME_RINVDSTADR - Invalid Destination Address",
    0x0000000C: "ESME_RINVMSGID - Message ID is invalid",
    0x0000000D: "ESME_RBINDFAIL - Bind Failed",
    0x0000000E: "ESME_RINVPASWD - Invalid Password",
    0x0000000F: "ESME_RINVSYSID - Invalid System ID",
    0x00000033: "ESME_RCANCELFAIL - Cancel SM Failed",
    0x00000034: "ESME_RREPLACEFAIL - Replace SM Failed",
    0x00000044: "ESME_RMSGQFUL - Message Queue Full",
    0x00000045: "ESME_RINVSERTYP - Invalid Service Type",
    0x00000054: "ESME_RINVNUMDESTS - Invalid number of destinations",
    0x00000055: "ESME_RINVDLNAME - Invalid Distribution List name",
    0x00000058: "ESME_RINVDESTFLAG - Destination flag is invalid",
    0x00000061: "ESME_RINVSUBREP - Invalid 'submit with replace' request",
    0x00000062: "ESME_RINVESMCLASS - Invalid esm_class field data",
    0x00000063: "ESME_RCNTSUBDL - Cannot Submit to Distribution List",
    0x00000064: "ESME_RSUBMITFAIL - submit_sm or submit_multi failed",
    0x000000C0: "ESME_RX_T_APPN - ESME Receiver Temporary App Error Code",
    0x000000C1: "ESME_RX_P_APPN - ESME Receiver Permanent App Error Code",
    0x000000C2: "ESME_RX_R_APPN - ESME Receiver Reject Message Error Code",
    0x000000C3: "ESME_RQUERYFAIL - query_sm request failed",
  };
  return errors[code] || `Unknown error code: 0x${code.toString(16).toUpperCase()}`;
}

// Run the test
testSMS()
  .then(() => {
    console.log("\n✅ Test completed successfully");
    process.exit(0);
  })
  .catch((error) => {
    console.error("\n❌ Test failed:", error.message);
    process.exit(1);
  });

