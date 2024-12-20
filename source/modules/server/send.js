const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config(); // Load variables from .env

// Function to send an activation email
async function sendActivationEmail(email, activationCode) {
  const transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io', // Mailtrap's SMTP server
    port: 2525, // Mailtrap's default port
    auth: {
      user: process.env.MAILTRAP_USER, // Mailtrap username (from .env file)
      pass: process.env.MAILTRAP_PASS, // Mailtrap password (from .env file)
    },
  });

  const mailOptions = {
    from: '"Log a Ticket" <tertius.roach@outlook.com>', // Replace with a desired sender name and email
    to: email, // Recipient's email
    subject: 'Activate Your Account',
    text: `Your activation code is: ${activationCode}. It will expire in 24 hours.`,
    html: `<p>Your activation code is: <strong>${activationCode}</strong>.</p><p>It will expire in 24 hours.</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Activation email sent to ${email}`);
  } catch (error) {
    console.error('Error sending activation email:', error);
    throw error;
  }
}
export default sendActivationEmail;
