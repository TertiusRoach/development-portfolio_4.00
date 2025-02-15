// users.js
//--|🠊 Open folder Location in Integrated Terminal to run: nodemon users 🠈|--//
const cors = require('cors');
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
module.exports = server; // Ensure module export for testing or further use

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

//--|🠋 POST: Registration Page 🠋|--//
server.post(`/${root}/register`, async (req, res) => {
  //--|🠋 Step 1: Declare User Inputs 🠋|--//
  const { firstName, lastName, email, passwordHash } = req.body;

  //--|🠋 Step 2: Find Email Inside Database 🠋|--//
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

  //--|🠋 Step 4: Modularize Responses 🠋|--//
  switch (user) {
    case null:
      //--|🠊 01. created: Form.register 🠈|--//
      //--|🠊 status(201): Accepted 🠈|--//
      await created(firstName, lastName, email, passwordHash);
      return res.status(201).json({
        status: 'pending',
        action: 'created',
      });
    default:
    /*
      if (user.verifiedEmail === false) {
        //--|🠊 03. unverified: Form.register + Form.login + Form.password 🠈|--//
        //--|🠊 status(403): Forbidden 🠈|--//
        return res.status(403).json({
          status: 'pending',
          action: 'unverified',
        });
      }
      */
  }
});

//--|🠋 Generate Database Fields 🠋|--//
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

//--|🠋 POST: Login Page 🠋|--//
server.post(`/${root}/login`, async (req, res) => {
  const { email, passwordHash } = req.body; //--| Extract email and passwordHash from the request body |--//

  try {
    //--| Check for user in 'enabled', 'pending', or 'blocked' collections |--//
    const collections = ['enabled', 'pending', 'blocked'];
    let user = null;

    for (const collection of collections) {
      user = await database.collection(collection).findOne({ email });
      if (user) break; //--| Stop searching once a user is found |--//
    }

    //--| User does not exist in any collection |--//
    if (!user) {
      return res.status(404).send('Email not found.');
    }

    //--| Verify password |--//
    const isPasswordValid = await bcrypt.compare(passwordHash, user.passwordHash);
    if (!isPasswordValid) {
      return res.status(401).send('Invalid password.');
    }

    //--| If user exists in the 'enabled' collection, update the lastLogin field |--//
    if (user.status === 'enabled') {
      let today = new Date();
      let todayISO = today.toISOString().split('.')[0] + 'Z';
      await database.collection('enabled').updateOne({ _id: user._id }, { $set: { lastLogin: todayISO } });
    }

    //--| Respond with the user status and role |--//
    return res.status(200).json({ status: user.status, role: user.role });
  } catch (error) {
    //--| Handle errors gracefully |--//
    console.error('Error during login process:', error);
    return res.status(500).send('An internal server error occurred.');
  }
});

//--|🠋 POST: Password Page 🠋|--//
server.post(`/${root}/password`, async (req, res) => {
  const { email } = req.body;
  let today = new Date();
  let tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  let randomCode = randomizeCodeActivation(4);
  /*
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ status: 'invalid', message: 'Invalid email format.' });
  }
  */

  try {
    // Check collections in priority order
    const pendingUser = await database.collection('pending').findOne({ email });
    if (pendingUser) {
      return res.status(200).json({ status: 'pending', message: "Your account hasn't been verified yet." });
    }

    const enabledUser = await database.collection('enabled').findOne({ email });
    /*
    if (!enabledUser) {
      return res.status(404).json({ status: 'missing', message: 'Account not found. Please register.' });
    }
    */

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
        /* await sendActivationEmail(email, randomCode, 'password'); */
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
});

//--|🠋 POST: Verify Page 🠋|--//
server.post(`/${root}/verify`, async (req, res) => {
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

      /* await sendActivationEmail(user.email, newActivationCode, 'register'); */
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
});

//--|🠋 POST: Reset Page 🠋|--//
server.post(`/${root}/reset`, async (req, res) => {
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

      /* await sendActivationEmail(user.email, newResetCode, 'reset'); */
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

/*
  async function unverified(email) {
    //--|🠊 If the user requests a password, registers or logs in without having validated the account first. 🠈|--//
    await database.collection('pending').find({ verifiedEmail });
    // await database.collection('pending').insertOne({});
  }
  */
/*
  let today = new Date(); // Current date
  let todayISO = today.toISOString().split('.')[0] + 'Z'; // ISO format
  let tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1); // Increment 1 day
  let tomorrowISO = tomorrow.toISOString().split('.')[0] + 'Z';

  let userIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress; // User's IP
  let randomCode = generateRandomCode(4); // Generate 4-digit activation code

  // Check if email exists in 'enabled', 'pending', or 'blocked'
  let user =
    (await database.collection('enabled').findOne({ email })) ||
    (await database.collection('pending').findOne({ email })) ||
    (await database.collection('blocked').findOne({ email }));

  if (user) {
    let isPasswordValid = await bcrypt.compare(passwordHash, user.passwordHash); // Validate password

    if (user.status === 'pending' && isPasswordValid) {
      // Pending user with valid password
      return res.status(200).json({
        status: 'pending',
        message: 'Account already exists but is not verified. Please log in to verify your account.',
      });
    } else if (user.status === 'enabled' && isPasswordValid) {
      // Enabled user with valid password
      return res.status(200).json({
        status: 'enabled',
        message: 'Welcome back! Redirecting to login.',
      });
    } else if (!isPasswordValid) {
      // Incorrect password
      return res.status(200).json({
        status: 'password',
        message: 'Email exists but the password is incorrect. Redirecting to password reset.',
      });
    } else {
      // Fallback for unexpected cases
      return res.status(400).json({
        status: 'error',
        message: 'Unexpected condition encountered. Please contact support.',
      });
    }
  } else {
    // User doesn't exist; create a new entry in the 'pending' collection
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(passwordHash, salt);

    await database.collection('pending').insertOne({
      firstName,
      lastName,
      email,
      passwordHash: hashedPassword,
      verifiedEmail: false,
      activationCode: randomCode,
      activationCodeExpiresAt: tomorrowISO,
      userIP,
      createdAt: todayISO,
      updatedAt: null,
      lastLogin: null,
      role: 'user',
      status: 'pending',
      // passwordCode: null,
      // passwordCodeExpiresAt: null,
    });

    // Send activation email
    try {
      // await sendActivationEmail(email, randomCode, 'register'); //
      console.log(`Activation email sent to ${email}`);
    } catch (error) {
      console.error(`Failed to send activation email to ${email}:`, error);
      return res.status(500).json({
        status: 'email_error',
        message: 'Registration successful, but failed to send activation email. Please contact support.',
      });
    }
    return res.status(201).json({
      status: 'created',
      message: 'Registration successful! Please check your email for the activation code.',
    });
  }
  */
/*
  return res.status(201).json({
    status: 'pending',
    action: 'created',
  });
  */
/*
      firstName,
      lastName,
      email,
      passwordHash: hashedPassword,
      verifiedEmail: false,
      activationCode: randomCode,
      activationCodeExpiresAt: tomorrowISO,
      userIP,
      createdAt: todayISO,
      updatedAt: null,
      lastLogin: null,
      role: 'user',
      status: 'pending',
      // passwordCode: null,
      // passwordCodeExpiresAt: null,
      */
/*
    let today = new Date(); // Current date
    let todayISO = today.toISOString().split('.')[0] + 'Z'; // ISO format
    let tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1); // Increment 1 day
    let tomorrowISO = tomorrow.toISOString().split('.')[0] + 'Z'; // ISO format

    let userIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress; // User's IP
    let randomCode = createCode(4);
    */
/*
    console.log(`First Name: ${firstName}`);
    console.log(`Last Name: ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${passwordHash}`);
    */
