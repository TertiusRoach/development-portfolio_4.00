// send.js
require('dotenv').config();
const Queue = require('bull');
const Redis = require('ioredis');
const cron = require('node-cron');
const validator = require('validator');
const nodemailer = require('nodemailer');
const { getDatabase } = require('./data'); // Ensure database functions are imported

// Initialize Redis with custom options
const redisClient = new Redis({
  host: process.env.REDIS_HOST || '127.0.0.1',
  port: process.env.REDIS_PORT || 6379,
  maxRetriesPerRequest: null, // Disable the retries per request limit
  retryStrategy: (times) => {
    return Math.min(times * 50, 2000); // Exponential backoff (up to 2 seconds)
  },
});

// Initialize Bull Queue with Redis client
const emailQueue = new Queue('emailQueue', { redis: redisClient });

// Function to send an activation email
async function sendActivationEmail(email, activationCode) {
  if (!validator.isEmail(email)) {
    throw new Error('The email address provided is invalid.');
  }

  // Add a job to the email queue
  await emailQueue.add({ email, activationCode });
}

// Email queue processor
emailQueue.process(async (job) => {
  const { email, activationCode } = job.data;

  // Validate job data
  if (!email || !validator.isEmail(email)) {
    console.error('Invalid email address in job data:', email);
    return;
  }

  if (!activationCode) {
    console.error('Missing activation code in job data for:', email);
    return;
  }

  try {
    // Configure the transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'default.smtp.host',
      port: process.env.SMTP_PORT || 587,
      auth: {
        user: process.env.MAILTRAP_USER_TWO || 'default_user',
        pass: process.env.MAILTRAP_PASS_TWO || 'default_pass',
      },
    });

    // Email options
    const mailOptions = {
      from: '"Log a Ticket" <tertius.roach@outlook.com>', // Replace with your sender email
      to: email, // Recipient's email
      subject: 'Activate Your Account',
      text: `Your activation code is: ${activationCode}. It will expire in 24 hours.`,
      html: `<p>Your activation code is: <strong>${activationCode}</strong>.</p><p>It will expire in 24 hours.</p>`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log(`Activation email sent to ${email}`);
  } catch (error) {
    console.error(`Error sending activation email to ${email}:`, error);
    throw error; // Propagate error to retry or log it
  }
});

// Cron job to clean up expired activation codes
cron.schedule('0 0 * * *', async () => {
  try {
    const database = getDatabase(); // Call getDatabase to access the database
    if (!database) throw new Error('Database not initialized.');

    const now = new Date().toISOString();
    await database.collection('pending').deleteMany({
      activationCodeExpiresAt: { $lt: now },
    });
    console.log('Expired activation codes cleaned up.');
  } catch (error) {
    console.error('Error cleaning up expired activation codes:', error);
  }
});

module.exports = { sendActivationEmail };
