const { authenticator } = require('otplib');

// User's secret key and TOTP entered by the user
const userSecret = 'ENXAWPS5FR2SMXQT'; // Replace with user's secret key
const userEnteredTOTP = '223993'; // Replace with user's entered TOTP

// Verify the entered TOTP within required time window
const isValidTOTP = authenticator.check(userEnteredTOTP, userSecret, { step: 120 });

if (isValidTOTP) {
  console.log('TOTP is valid.');
} else {
  console.log('TOTP is invalid.');
}
