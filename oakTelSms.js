const axios = require("axios");

const OAKTEL_CONFIG = {
  baseURL: "http://8.219.42.83:20003",
  account: "0171C140",
  password: "DG278kkf",
};

/**
 * Send SMS using OAK-TEL HTTP API v3.4
 * @param {string[]} numbers - Array of phone numbers
 * @param {string} message - SMS text
 */
async function sendSMS(numbers, message) {
  if (!numbers.length) throw new Error("Numbers list is empty");
  if (!message) throw new Error("Message content is empty");

  const payload = {
    account: OAKTEL_CONFIG.account,
    password: OAKTEL_CONFIG.password,
    smstype: 0, // 0 = SMS
    numbers: numbers.join(","), // comma separated
    content: message,
  };

  try {
    const response = await axios.post(
      `${OAKTEL_CONFIG.baseURL}/sendsms`,
      payload,
      {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        timeout: 15000,
      }
    );

    return response.data;
  } catch (err) {
    throw new Error(
      err.response?.data
        ? JSON.stringify(err.response.data)
        : err.message
    );
  }
}

module.exports = { sendSMS };
