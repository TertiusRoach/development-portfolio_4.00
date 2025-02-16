// users.js
//--|🠊 Open folder Location in Integrated Terminal to run: nodemon users 🠈|--//
const cors = require('cors');
const axios = require('axios');
const bcrypt = require('bcrypt');
const express = require('express');
const { ObjectId } = require('mongodb');
const nodemailer = require('nodemailer');
const { connectDatabase, getDatabase } = require('./data'); // Fixed import to match the function names in data.js

let database;
const port = 3000;
const root = 'users';
const server = express();
server.use(express.json());
// server.use(cors({ origin: 'http://localhost:3000', credentials: true }));
server.use(cors({ origin: 'http://localhost:8080', credentials: true }));
//--|🠋 Start the Server 🠋|--//
connectDatabase((err) => {
  if (!err) {
    server.listen(port, () => {
      console.log(`//--|🠊 Listening on Port: ${port} 🠈|--//`);
      console.log(`//--|🠊 Go to http://localhost:${port}/${root} 🠈|--//`);
    });
    database = getDatabase(); // Assign the connected database to the `database` variable
  } else {
    console.error('//--|🠊 Failed to connect to MongoDB 🠈|--//', err);
  }
});
module.exports = server; //--|🠈 Ensure module export for testing or further use 🠈|--//

//--|🠊 GET: Fetch Users 🠈|--//
server.get(`/${root}`, async (req, res) => {
  try {
    //--|🠊 Fetch data from both collections 🠈|--//
    const usersEnabled = await database.collection('enabled').find().sort({ email: 1 }).toArray();
    const usersPending = await database.collection('pending').find().sort({ email: 1 }).toArray();
    const usersBlocked = await database.collection('blocked').find().sort({ email: 1 }).toArray();
    //--|🠊 Combine the data into a single response 🠈|--//
    const allUsers = {
      enabled: usersEnabled,
      pending: usersPending,
      blocked: usersBlocked,
    };

    res.status(200).json(allUsers); //--|🠊 Send the combined data as JSON 🠈|--//
  } catch (error) {
    console.error('Error fetching documents:', error);
    res.status(500).json({ error: 'Could not fetch the user documents' });
  }
});

//--|🠋 POST: Form.registration.tsx 🠋|--//
server.post(`/${root}/register`, async (req, res) => {
  //--|🠋 Step 1: Request Inputs 🠋|--//
  const { firstName, lastName, email, passwordHash } = req.body;

  //--|🠋 Step 2: Find User 🠋|--//
  const user =
    (await database.collection('enabled').findOne({ email })) ||
    (await database.collection('pending').findOne({ email })) ||
    (await database.collection('blocked').findOne({ email }));

  //--|🠋 Step 3: Action Functions 🠋|--//
  async function created(firstName, lastName, email, passwordHash) {
    //--|🠊 Create a new entry in the 'pending' collection 🠈|--//
    await database.collection('pending').insertOne({
      email: email,
      passwordHash: await encryptValue(passwordHash),
      verifiedEmail: false,

      role: 'user',
      status: 'pending',
      firstName: firstName,
      lastName: lastName,

      activationCode: await createCode(4), // Generate 4-digit activation code
      activationAttempts: 0, // Maximum of 6 attempts before the user is blocked for 24 hours
      activationCodeExpiresAt: await createDate('tomorrow'),

      userIP: await trackPlace(req),
      createdAt: await createDate('today'),
      updatedAt: null,
      lastLogin: null,

      passwordCode: null,
      passwordCodeExpiresAt: null,
      passwordChangeRequests: 0, // Maximum of 6 before the user is blocked for 7 days
    });
  }

  //--|🠋 Step 4: Error Handling 🠋|--//
  try {
    //--|🠋 Step 5: Modularize Responses 🠋|--//
    if (user === null) {
      await created(firstName, lastName, email, passwordHash);
      return res.status(201).json({
        page: 'verify',
        status: 'pending',
        action: 'created',
        message: '//--|🠊 status(201): Accepted 🠈|--//',
      });
    }
  } catch (error) {
    axiosError(error); //--|🠈 Handle Register Errors 🠈|--//
  } finally {
  }
});

//--|🠋 POST: Form.login.tsx 🠋|--//
server.post(`/${root}/login`, async (req, res) => {
  //--|🠋 Step 1: Request Inputs 🠋|--//
  const { email, passwordHash } = req.body;

  //--|🠋 Step 2: Find User 🠋|--//
  const user =
    (await database.collection('enabled').findOne({ email })) ||
    (await database.collection('pending').findOne({ email })) ||
    (await database.collection('blocked').findOne({ email }));

  //--|🠋 Step 3: Action Functions 🠋|--//
  async function login(email, passwordHash) {}

  //--|🠋 Step 4: Error Handling 🠋|--//
  try {
    //--|🠋 Step 5: Modularize Responses 🠋|--//
    if (user === null) {
      //--|🠊 status(404): Not Found 🠈|--//
      return res.status(404).json({
        status: 'missing',
        action: 'register',
        message: '//--|🠊 res.status(404): Not Found 🠈|--//',
      });
    }
  } catch (error) {
    axiosError(error); //--|🠈 Handle Login Errors 🠈|--//
  } finally {
  }
});

const axiosError = (error) => {
  //--|🠉 🛑 STOP! Something bad happened when we tried to fetch data. 🠉|--//
  //--|🠋 😲 First, we check: Was this a problem with Axios (our fetch tool)? 🠋|--//
  if (axios.isAxiosError(error)) {
    //--|🠋🚦 Let's see what kind of error we got from the server.🠋|--//
    const status = error.response?.status || 500; //--|🠈 If no status, assume 500 (big problem) 🠈|--//
    const message = error.response?.data?.message || 'Axios Request Failed'; //--|🠈 If no message, give a generic one 🠈|--//

    //--|🠋 📝 Write down (log) what went wrong so we can fix it later. 🠋|--//
    console.error('Axios Error:', {
      status, //--|🠈 The error number (like 404, 500) 🠈|--//
      message, //--|🠈 The server’s message (if it sent one) 🠈|--//
      url: error.config?.url, //--|🠈 The website/page we tried to fetch from 🠈|--//
    });

    //--|🠋 🚀 Send a message back to whoever called this API. 🠋|--//
    return res.status(status).json({ error: message });
  }

  //--|🠋 😵 Uh-oh! This error wasn’t Axios... Something unexpected broke! 🠋|--//
  console.error('Unexpected Server Error:', error);

  //--|🠋 🚨 Send back a 500 error to say "something went wrong on our end" 🠋|--//
  res.status(500).json({ error: 'Internal Server Error' });
};

//--|🠋 Generate Data Fields 🠋|--//
let encryptValue = async (value) => {
  //--|🠊 Encrypt String 🠈|--//
  const salt = await bcrypt.genSalt();
  return await bcrypt.hash(value, salt);
};
let createCode = async (length) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';

  let code = '';

  // Add 5 random letters
  for (let i = 0; i < length / 2; i++) {
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    code += randomLetter;
  }

  // Add 5 random numbers
  for (let i = 0; i < length / 2; i++) {
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    code += randomNumber;
  }

  // Shuffle the characters randomly
  code = code
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
  return code;
};
let createDate = async (schedule) => {
  // let today = present.toISOString().split('.')[0] + 'Z'; // ISO format
  // let tomorrow = setDate(today.getDate() + 1);
  let present = new Date(); // Current date
  switch (schedule) {
    case 'yesterday':
      return '';
    case 'today':
      return present.toISOString().split('.')[0] + 'Z'; // ISO format
    case 'tomorrow':
      let tomorrow = new Date(present);
      tomorrow.setDate(tomorrow.getDate() + 1); // Increment 1 day;
      return tomorrow.toISOString().split('.')[0] + 'Z'; // ISO format
  }
};
let trackPlace = async (request) => {
  return request.headers['x-forwarded-for'] || request.socket.remoteAddress;
};

//--------------------------------------------------------------------------------//

//--|🠋 POST: Form.password.tsx 🠋|--//
server.post(`/${root}/password`, async (req, res) => {
  /*
  //--|🠋 Step 1: Declare User Inputs 🠋|--//
  const { email } = req.body;

  //--|🠋 Step 2: Find Email Inside Database 🠋|--//
  const user =
    (await database.collection('enabled').findOne({ email })) ||
    (await database.collection('pending').findOne({ email })) ||
    (await database.collection('blocked').findOne({ email }));
  */
  /*
  if (user === null) {
    //--|🠊 12. register: Form.login + Form.password 🠈|--//
    //--|🠊 status(404): Not Found 🠈|--//
    return res.status(404).json({
      status: 'missing',
      action: 'register',
    });
  }
  */
  /*
  const { email } = req.body;
  let today = new Date();
  let tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  let randomCode = randomizeCodeActivation(4);
  */
  /*
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ status: 'invalid', message: 'Invalid email format.' });
  }
  */
  /*
  try {
    // Check collections in priority order
    const pendingUser = await database.collection('pending').findOne({ email });
    if (pendingUser) {
      return res.status(200).json({ status: 'pending', message: "Your account hasn't been verified yet." });
    }

    const enabledUser = await database.collection('enabled').findOne({ email });

    // if (!enabledUser) {
    //   return res.status(404).json({ status: 'missing', message: 'Account not found. Please register.' });
    // }


    // If passwordCode has never been set or has expired
    if (!enabledUser.passwordCodeExpiresAt || Date.now() > new Date(enabledUser.passwordCodeExpiresAt).getTime()) {
      await database.collection('enabled').updateOne(
        { _id: enabledUser._id },
        {
          $set: {
            passwordCode: randomCode,
            passwordCodeExpiresAt: tomorrow.toISOString(),
          },
        }
      );

      try {
        // await sendActivationEmail(email, randomCode, 'password');
        return res.status(200).json({ status: 'created', message: 'Password reset code sent to your email.' });
      } catch (emailError) {
        console.error(`Failed to send password reset email:`, emailError);
        return res.status(500).json({ status: 'email_error', message: 'Error sending email. Contact support.' });
      }
    }

    return res.status(200).json({ status: 'waiting', message: 'Password reset already requested. Check your email.' });
  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({ status: 'error', message: 'Internal server error.' });
  }
  */
});

//--|🠋 POST: Form.verify.tsx 🠋|--//
server.post(`/${root}/verify`, async (req, res) => {
  /*
  let today = new Date();
  let todayISO = today.toISOString().split('.')[0] + 'Z'; // ISO format

  try {
    const { email, verificationCode, passwordHash } = req.body;

    if (!email || !verificationCode || !passwordHash) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const user = await database.collection('pending').findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Validate password using bcrypt
    const isPasswordValid = await bcrypt.compare(passwordHash, user.passwordHash);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    // Validate verification code
    if (verificationCode !== user.activationCode) {
      return res.status(400).json({ message: 'Invalid verification code' });
    }

    // Check if the verification code has expired
    if (new Date() > new Date(user.activationCodeExpiresAt)) {
      const newActivationCode = randomizeCodeActivation(10);
      const newExpirationTime = new Date();
      newExpirationTime.setHours(newExpirationTime.getHours() + 24);

      await database
        .collection('pending')
        .updateOne(
          { _id: user._id },
          { $set: { activationCode: newActivationCode, activationCodeExpiresAt: newExpirationTime.toISOString() } }
        );

      // await sendActivationEmail(user.email, newActivationCode, 'register'); //
      return res
        .status(400)
        .json({ message: 'Verification code expired. A new activation code has been sent to your email.' });
    }

    // Move user to 'enabled' collection
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(passwordHash, salt);
    const { _id, passwordHash: _, activationCode, activationCodeExpiresAt, ...rest } = user;

    await database.collection('enabled').insertOne({
      ...rest,
      verifiedEmail: true,
      passwordHash: hashedPassword,
      status: 'enabled',
      updatedAt: todayISO,
      passwordCode: null,
      passwordCodeExpiresAt: null,
    });

    // Remove user from 'pending' collection
    await database.collection('pending').deleteOne({ _id });

    res.status(200).json({ status: 'authorized', message: 'Account Verified Successfully' });
  } catch (error) {
    console.error('Verification Error:', error);
    res.status(500).json({ status: 'unverified', message: 'An error occurred during verification', error: error.message });
  }
  */
});

//--|🠋 POST: Form.reset.tsx 🠋|--//
server.post(`/${root}/reset`, async (req, res) => {
  /*
  let today = new Date();
  let todayISO = today.toISOString().split('.')[0] + 'Z'; // ISO format

  try {
    const { email, passwordCode, newHash } = req.body;

    if (!email || !passwordCode || !newHash) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const user = await database.collection('enabled').findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Validate the reset code
    if (passwordCode !== user.passwordCode) {
      return res.status(400).json({ message: 'Invalid reset code' });
    }

    // Check if the reset code has expired
    if (new Date() > new Date(user.passwordCodeExpiresAt)) {
      const newResetCode = randomizeCodeActivation(10);
      const newExpirationTime = new Date();
      newExpirationTime.setHours(newExpirationTime.getHours() + 1); // Reset code valid for 1 hour

      await database.collection('enabled').updateOne(
        { _id: user._id },
        {
          $set: {
            passwordCode: newResetCode,
            passwordCodeExpiresAt: newExpirationTime.toISOString(),
          },
        }
      );

      // await sendActivationEmail(user.email, newResetCode, 'reset'); //
      return res.status(400).json({ message: 'Reset code expired. A new code has been sent to your email.' });
    }

    // Check if the new password is the same as the old one
    const isPasswordSame = await bcrypt.compare(newHash, user.passwordHash);
    if (isPasswordSame) {
      await database
        .collection('enabled')
        .updateOne({ _id: user._id }, { $set: { passwordCode: null, passwordCodeExpiresAt: null } });
      return res.status(200).json({ status: 'remembered', message: 'You remembered your password!' });
    }

    // Hash the new password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(newHash, salt);

    // Update user with new password and remove reset code
    await database.collection('enabled').updateOne(
      { _id: user._id },
      {
        $set: {
          passwordHash: hashedPassword,
          passwordCode: null,
          passwordCodeExpiresAt: null,
          updatedAt: todayISO,
        },
      }
    );

    res.status(200).json({ status: 'authorized', message: 'Password reset successful' });
  } catch (error) {
    console.error('Password Reset Error:', error);
    res.status(500).json({ status: 'error', message: 'An error occurred during password reset', error: error.message });
  }
  */
});

function randomizeCodeActivation(length) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';

  let code = '';

  // Add 5 random letters
  for (let i = 0; i < length / 2; i++) {
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    code += randomLetter;
  }

  // Add 5 random numbers
  for (let i = 0; i < length / 2; i++) {
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    code += randomNumber;
  }

  // Shuffle the characters randomly
  code = code
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
  return code;
}

async function sendActivationEmail(email, activationCode, page) {
  const transporter = nodemailer.createTransport({
    host: 'live.smtp.mailtrap.io', // Mailtrap's SMTP server
    port: 587, // Mailtrap's default port
    auth: {
      user: process.env.MAILTRAP_USER, // Mailtrap username (from .env file)
      pass: process.env.MAILTRAP_PASS, // Mailtrap password (from .env file)
    },
  });
  let mailOptions;
  switch (page) {
    case 'register':
      mailOptions = {
        // Error sending activation email: Error: Mail command failed: 501 5.1.7 Bad sender address syntax
        from: `'"Log a Ticket - Registration" <${process.env.DOMAIN_PASS}>'`, // Replace with a desired sender name and email
        to: email, // Recipient's email
        subject: 'Activate Your Account',
        text: `Your activation code is: ${activationCode}. It will expire in 24 hours.`,
        // Write a nice HTML email outline with inline CSS styling with a similar layout for the email as shown in die example screenshot.
        html: `<!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f4f4f9;
              }
              .container {
                max-width: 600px;
                margin: 20px auto;
                background: #ffffff;
                border: 1px solid #ddd;
                border-radius: 8px;
                overflow: hidden;
              }
              .header {
                background: #2c3e50;
                color: white;
                text-align: center;
                padding: 20px 10px;
                font-size: 24px;
              }
              .content {
                padding: 20px;
                text-align: center;
              }
              .activation-code {
                display: inline-block;
                background: #2c3e50;
                color: white;
                font-size: 24px;
                padding: 10px 20px;
                margin-top: 10px;
                border-radius: 8px;
              }
              .footer {
                text-align: center;
                padding: 10px;
                font-size: 12px;
                color: #777;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">Activate Your Account</div>
              <div class="content">
                <p>Your activation code is:</p>
                <div class="activation-code">${activationCode}</div>
                <p>This code will expire in 24 hours.</p>
              </div>
              <div class="footer">
                &copy; ${new Date().getFullYear()} Geitjie Techno. All rights reserved.
              </div>
            </div>
          </body>
        </html>
        `,
      };
      break;
    case 'password':
      mailOptions = {
        // Error sending activation email: Error: Mail command failed: 501 5.1.7 Bad sender address syntax
        from: `'"Log a Ticket - Password" <${process.env.DOMAIN_PASS}>'`, // Replace with a desired sender name and email
        to: email, // Recipient's email
        subject: 'Activate Your Account',
        text: `Reset your Password with: ${activationCode}. It will expire in 24 hours.`,
        // Write a nice HTML email outline with inline CSS styling with a similar layout for the email as shown in die example screenshot.
        html: `<!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f4f4f9;
              }
              .container {
                max-width: 600px;
                margin: 20px auto;
                background: #ffffff;
                border: 1px solid #ddd;
                border-radius: 8px;
                overflow: hidden;
              }
              .header {
                background: #2c3e50;
                color: white;
                text-align: center;
                padding: 20px 10px;
                font-size: 24px;
              }
              .content {
                padding: 20px;
                text-align: center;
              }
              .activation-code {
                display: inline-block;
                background: #2c3e50;
                color: white;
                font-size: 24px;
                padding: 10px 20px;
                margin-top: 10px;
                border-radius: 8px;
              }
              .footer {
                text-align: center;
                padding: 10px;
                font-size: 12px;
                color: #777;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">Recover your Password</div>
              <div class="content">
                <p>Your Reset Code is:</p>
                <div class="activation-code">${activationCode}</div>
                <p>This code will expire in 24 hours.</p>
              </div>
              <div class="footer">
                &copy; ${new Date().getFullYear()} Your Company. All rights reserved.
              </div>
            </div>
          </body>
        </html>
        `,
      };
      break;
  }

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Activation email sent to ${email}`);
  } catch (error) {
    console.error('Error sending activation email:', error);
    throw error;
  }
}

function manipulateDocumentFields(method) {
  // MongoDB: database => collection => document => field
  const document = {
    email: '',
    passwordHash: '',
    verifiedEmail: '',

    role: '',
    status: '',
    firstName: '',
    lastName: '',

    activationCode: '',
    activationAttempts: '', // Maximum of 6 attempts before the user is blocked for 24 hours
    activationCodeExpiresAt: '',

    userIP: '',
    createdAt: '',
    updatedAt: '',
    lastLogin: '',

    passwordCode: '',
    passwordCodeExpiresAt: '',
    passwordChangeRequests: '', // Maximum of 6 before the user is blocked for 7 days
  };
  // CRUD Method
  switch (method) {
    case 'create':
      break;
    case 'read':
      break;
    case 'update':
      break;
    case 'delete':
      break;
  }
}
