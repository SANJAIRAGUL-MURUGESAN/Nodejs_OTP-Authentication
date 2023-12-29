const { authenticator } = require('otplib');

// Generate a new secret key for the user
const secret = authenticator.generateSecret();

// Generate a TOTP using the secret key and current time with required minute time window
const totpCode = authenticator.generate(secret, { step: 120 });

console.log('Generated TOTP:', totpCode);
console.log('Secret Key:', secret);