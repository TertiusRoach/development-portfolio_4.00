// users.js
//--|🠊 Open folder Location in Integrated Terminal to run: nodemon users 🠈|--//
const cors = require('cors');
const axios = require('axios');
const bcrypt = require('bcrypt');
const express = require('express');
const { ObjectId } = require('mongodb');
const nodemailer = require('nodemailer');
const { connectDatabase, getDatabase } = require('./data'); // Fixed import to match the function names in data.js
require('dotenv').config(); // Ensure you load environment variables

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

//--|🠋 Action Functions 🠋|--//
async function sendEmail(email, activationCode, page) {
  let mailOptions;
  switch (page) {
    case 'register':
      mailOptions = {
        // Error sending activation email: Error: Mail command failed: 501 5.1.7 Bad sender address syntax
        from: `"Verify Email - Trinity Apps" <${process.env.DOMAIN_PASS}>`, // Replace with a desired sender name and email
        to: email, // Recipient's email
        subject: 'Activate your Account',
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
        from: `"Reset Password - Trinity Apps" <${process.env.DOMAIN_PASS}>`, // Replace with a desired sender name and email
        to: email, // Recipient's email
        subject: '',
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

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASS,
    },
  });

  transporter.verify((error, success) => {
    if (error) {
      console.error('SMTP Connection Error:', error);
    } else {
      console.log('SMTP Server is ready to send emails.');
    }
  });

  try {
    transporter.sendMail(mailOptions);
    console.log(`Activation email sent to ${email}`);
  } catch (error) {
    console.error('Error sending activation email:', error);
    throw error;
  }
}

//--|🠋 POST: Form.register.tsx 🠋|--//
server.post(`/${root}/register`, async (req, res) => {
  const { firstName, lastName, email, passwordHash } = req.body;
  const user =
    (await database.collection('enabled').findOne({ email })) ||
    (await database.collection('pending').findOne({ email })) ||
    (await database.collection('blocked').findOne({ email }));

  async function createEntry(firstName, lastName, email, passwordHash) {
    const activationCode = await createCode(4); // Ensure activationCode is defined
    await database.collection('pending').insertOne({
      email: email,
      passwordHash: await encryptValue(passwordHash),

      role: 'user',
      status: 'pending',
      firstName: firstName,
      lastName: lastName,

      activationCode: activationCode,
      activationAttempts: 0,
      activationCodeExpiresAt: await createDate('tomorrow'),

      userIP: await trackPlace(req),
      createdAt: await createDate('today'),
      updatedAt: null,
      lastLogin: null,

      /*
        passwordCode: null,
        passwordCodeExpiresAt: null,
        passwordChangeRequests: 0,
      */
    });

    /* await sendEmail(email, activationCode, 'register'); */
  }
  async function readEntry(email) {
    const document =
      (await database.collection('enabled').findOne({ email })) ||
      (await database.collection('pending').findOne({ email })) ||
      (await database.collection('blocked').findOne({ email }));
    return {
      email: document.email,

      role: document.role,
      status: document.status,
      firstName: document.firstName,
      lastName: document.lastName,

      activationCode: document.activationCode,
      activationAttempts: document.activationAttempts,
      activationCodeExpiresAt: document.activationCodeExpiresAt,

      userIP: document.userIP,
      createdAt: document.createdAt,
      updatedAt: document.updatedAt,
      lastLogin: document.lastLogin,

      passwordCode: document.passwordCode,
      passwordCodeExpiresAt: document.passwordCodeExpiresAt,
      passwordChangeRequests: document.passwordChangeRequests,
    };
  }
  async function updateActivation(email) {
    let activationCode = await createCode(4); // Ensure activationCode is defined
    await database.collection('pending').updateOne(
      { email: email }, // Find the document by email
      {
        $set: {
          updatedAt: await createDate('today'),

          activationCode: activationCode,
          activationCodeExpiresAt: await createDate('tomorrow'),
        },
      }
    );
    /* await sendEmail(email, activationCode, 'register'); */
  }
  async function blocked_pending(email) {
    //--|🠋 Move User from 'blocked' to 'pending' 🠋|--//
    const blocked = await database.collection('blocked').findOne({ email });
    if (!blocked) return; // Exit if the user doesn't exist in 'blocked'

    const pending = await database.collection('pending').findOne({ email }); // Check the correct collection
    if (!pending) {
      const activationCode = await createCode(4); // Generate activation code once

      //--|🠋 Insert the document into 'pending' collection 🠋|--//
      await database.collection('pending').insertOne({
        email: blocked.email,
        passwordHash: blocked.passwordHash,

        role: blocked.role,
        status: 'pending',
        firstName: blocked.firstName,
        lastName: blocked.lastName,

        activationCode,
        activationAttempts: 0,
        activationCodeExpiresAt: await createDate('tomorrow'),

        userIP: blocked.userIP,
        createdAt: blocked.createdAt,
        updatedAt: await createDate('today'),
        lastLogin: null,
      });

      //--|🠋 Delete the user from the 'blocked' collection 🠋|--//
      await database.collection('blocked').deleteOne({ email });

      /* await sendEmail(email, activationCode, 'register'); */
    }
  }

  try {
    if (!user) {
      await createEntry(firstName, lastName, email, passwordHash);
      return res.status(200).json({
        view: 'verify',
        data: await readEntry(email),
      });
    } else {
      switch (user.status) {
        case 'pending':
          let flagActivation = await verifyDate(user.activationCodeExpiresAt);
          if (flagActivation === 'expired') {
            await updateActivation(email);
          }
          return res.status(200).json({
            view: 'verify',
            data: user,
          });
        case 'enabled':
          let flagPassword = await decryptValue(passwordHash, user.passwordHash);
          if (flagPassword) {
            return res.status(200).json({
              view: 'login',
              data: user,
            });
          } else {
            return res.status(200).json({
              view: 'password',
              data: user,
            });
          }
        case 'blocked':
          let flagRestriction = await verifyDate(user.restrictionExpiresAt);
          if (flagRestriction === 'blocked') {
            return res.status(200).json({
              view: 'blocked',
              data: user,
            });
          } else {
            await blocked_pending(email);
            return res.status(200).json({
              view: 'verify',
              data: user,
            });
          }
      }
    }
  } catch (error) {
    axiosError(error); //--|🠈 Handle Register Errors 🠈|--//
  }
});
//--|🠋 POST: Form.login.tsx 🠋|--//
server.post(`/${root}/login`, async (req, res) => {
  const { email, passwordHash } = req.body;
  const user =
    (await database.collection('enabled').findOne({ email })) ||
    (await database.collection('pending').findOne({ email })) ||
    (await database.collection('blocked').findOne({ email }));
  async function updateActivation(email) {
    let activationCode = await createCode(4); // Ensure activationCode is defined
    await database.collection('pending').updateOne(
      { email: email }, // Find the document by email
      {
        $set: {
          updatedAt: await createDate('today'),

          activationCode: activationCode,
          activationCodeExpiresAt: await createDate('tomorrow'),
        },
      }
    );
    /* await sendEmail(email, activationCode, 'register'); */
  }
  async function blocked_pending(email) {
    //--|🠋 Move User from 'blocked' to 'pending' 🠋|--//
    const blocked = await database.collection('blocked').findOne({ email });
    if (!blocked) return; // Exit if the user doesn't exist in 'blocked'

    const pending = await database.collection('pending').findOne({ email }); // Check the correct collection
    if (!pending) {
      const activationCode = await createCode(4); // Generate activation code once

      //--|🠋 Insert the document into 'pending' collection 🠋|--//
      await database.collection('pending').insertOne({
        email: blocked.email,
        passwordHash: blocked.passwordHash,

        role: blocked.role,
        status: 'pending',
        firstName: blocked.firstName,
        lastName: blocked.lastName,

        activationCode,
        activationAttempts: 0,
        activationCodeExpiresAt: await createDate('tomorrow'),

        userIP: blocked.userIP,
        createdAt: blocked.createdAt,
        updatedAt: await createDate('today'),
        lastLogin: null,
      });

      //--|🠋 Delete the user from the 'blocked' collection 🠋|--//
      await database.collection('blocked').deleteOne({ email });

      /* await sendEmail(email, activationCode, 'register'); */
    }
  }

  try {
    if (!user) {
      return res.status(200).json({ view: 'register', data: null });
    } else {
      let flagPassword = await decryptValue(passwordHash, user.passwordHash);
      switch (user.status) {
        case 'pending':
          if (flagPassword === true) {
            let flagActivation = await verifyDate(user.activationCodeExpiresAt);
            switch (flagActivation) {
              case 'expired':
                await updateActivation(email);
                break;
            }
            return res.status(200).json({ view: 'verify', data: user });
          }
        case 'enabled':
          if (flagPassword) {
            await database
              .collection('enabled')
              .updateOne({ email: email }, { $set: { lastLogin: await createDate('today') } });
            return res.status(200).json({ view: 'login', data: user });
          } else {
            return res.status(200).json({ view: 'password', data: user });
          }
        case 'blocked':
          let flagDate = await verifyDate(user.restrictionExpiresAt);
          if (flagDate === 'blocked') {
            return res.status(200).json({
              view: 'blocked',
              data: user,
            });
          } else {
            await blocked_pending(email);
            switch (flagPassword) {
              case true:
                return res.status(200).json({
                  view: 'login',
                  data: user,
                });
              case false:
                return res.status(200).json({
                  view: 'password',
                  data: user,
                });
            }
          }
      }
    }
  } catch (error) {
    axiosError(error); //--|🠈 Handle Register Errors 🠈|--//
  }
});
//--|🠋 POST: Form.password.tsx 🠋|--//
server.post(`/${root}/password`, async (req, res) => {
  const { email, passwordHash } = req.body;
  const user =
    (await database.collection('enabled').findOne({ email })) ||
    (await database.collection('pending').findOne({ email })) ||
    (await database.collection('blocked').findOne({ email }));

  async function updateRenewal(email) {
    const passwordCode = await createCode(4);
    await database.collection('enabled').updateOne(
      { email: email },
      {
        $set: {
          userIP: await trackPlace(req),
          updatedAt: await createDate('today'),

          passwordCode: passwordCode,
          passwordCodeExpiresAt: await createDate('tomorrow'),
        },
        $inc: { passwordChangeRequests: 1 },
      }
    );
    /* await sendEmail(email, passwordCode, 'password'); */
  }
  async function updateActivation(email) {
    let activationCode = await createCode(4); // Ensure activationCode is defined
    await database.collection('pending').updateOne(
      { email: email }, // Find the document by email
      {
        $set: {
          updatedAt: await createDate('today'),

          activationCode: activationCode,
          activationCodeExpiresAt: await createDate('tomorrow'),
        },
      }
    );
    /* await sendEmail(email, activationCode, 'register'); */
  }

  async function blocked_pending(email) {
    //--|🠋 Move User from 'blocked' to 'pending' 🠋|--//
    const blocked = await database.collection('blocked').findOne({ email });
    if (!blocked) return; // Exit if the user doesn't exist in 'blocked'

    const pending = await database.collection('pending').findOne({ email }); // Check the correct collection
    if (!pending) {
      const activationCode = await createCode(4); // Generate activation code once

      //--|🠋 Insert the document into 'pending' collection 🠋|--//
      await database.collection('pending').insertOne({
        email: blocked.email,
        passwordHash: blocked.passwordHash,

        role: blocked.role,
        status: 'pending',
        firstName: blocked.firstName,
        lastName: blocked.lastName,

        activationCode,
        activationAttempts: 0,
        activationCodeExpiresAt: await createDate('tomorrow'),

        userIP: blocked.userIP,
        createdAt: blocked.createdAt,
        updatedAt: await createDate('today'),
        lastLogin: null,
      });
      //--|🠋 Delete the user from the 'blocked' collection 🠋|--//
      await database.collection('blocked').deleteOne({ email });

      /* await sendEmail(email, activationCode, 'register'); */
    }
  }
  async function enabled_blocked(email) {
    //--|🠋 Move User from 'enabled' to 'blocked' 🠋|--//
    const enabled = await database.collection('enabled').findOne({ email });
    if (!enabled) return; // Exit if the user doesn't exist in 'enabled'

    const blocked = await database.collection('blocked').findOne({ email }); // Check if the user already exists in 'blocked'
    if (!blocked) {
      // Insert the document into 'blocked' collection
      await database.collection('blocked').insertOne({
        email: enabled.email,
        passwordHash: enabled.passwordHash,

        role: enabled.role,
        status: 'blocked',
        firstName: enabled.firstName,
        lastName: enabled.lastName,

        userIP: enabled.userIP,
        createdAt: enabled.createdAt,
        updatedAt: await createDate('today'),
        lastLogin: null,

        restrictionExpiresAt: await createDate('tomorrow'),
      });

      //--|🠋 Delete the user from the 'enabled' collection 🠋|--//
      await database.collection('enabled').deleteOne({ email });
    }
  }

  try {
    if (!user) {
      return res.status(200).json({ view: 'register', data: null });
    } else {
      switch (user.status) {
        case 'pending':
          let flagActivation = await verifyDate(user.activationCodeExpiresAt);
          if (flagActivation === 'expired') {
            await updateActivation(email);
          }
          return res.status(200).json({
            view: 'verify',
            data: user,
          });
        case 'enabled':
          if (user.passwordChangeRequests < 3) {
            let flagRenewal = await verifyDate(user.passwordCodeExpiresAt);
            switch (flagRenewal) {
              case 'expired':
                await updateRenewal(email);
                break;
            }
            return res.status(200).json({ view: 'reset', data: user });
          } else {
            await enabled_blocked(email);
            return res.status(200).json({
              view: 'blocked',
              data: user,
            });
          }
        case 'blocked':
          let flagRestriction = await verifyDate(user.restrictionExpiresAt);
          if (flagRestriction === 'blocked') {
            return res.status(200).json({
              view: 'blocked',
              data: user,
            });
          } else {
            await blocked_pending(email);
            return res.status(200).json({
              view: 'login',
              data: user,
            });
          }
      }
    }
  } catch (error) {
    axiosError(error); //--|🠈 Handle Login Errors 🠈|--//
  }
});
//--|🠋 POST: Form.verify.tsx 🠋|--//
server.post(`/${root}/verify`, async (req, res) => {
  const { email, passwordHash, activation } = req.body;
  const user =
    (await database.collection('enabled').findOne({ email })) ||
    (await database.collection('pending').findOne({ email })) ||
    (await database.collection('blocked').findOne({ email }));

  async function pending_enabled(email) {
    //--|🠋 Move User from 'pending' to 'enabled' 🠋|--//
    const pending = await database.collection('pending').findOne({ email });
    if (!pending) return; // Exit if the user doesn't exist in 'pending'

    const enabled = await database.collection('enabled').findOne({ email }); // Check if the user already exists in 'enabled'
    if (!enabled) {
      //--|🠋 Insert the document into 'enabled' collection 🠋|--//
      await database.collection('enabled').insertOne({
        email: pending.email,
        passwordHash: pending.passwordHash,

        status: 'enabled',
        role: pending.role,
        firstName: pending.firstName,
        lastName: pending.lastName,

        userIP: pending.userIP,
        createdAt: pending.createdAt,
        updatedAt: await createDate('today'),
        lastLogin: null,

        passwordCode: null,
        passwordChangeRequests: 0,
        passwordCodeExpiresAt: null,
      });

      //--|🠋 Delete the user from the 'pending' collection 🠋|--//
      await database.collection('pending').deleteOne({ email });

      /* await sendEmail(email, 'Your account is now enabled!', 'account-activated'); */
    }
  }
  async function pending_blocked(email) {
    //--|🠋 Move User from 'pending' to 'blocked' 🠋|--//
    const pending = await database.collection('pending').findOne({ email });
    if (!pending) return; // Exit if the user doesn't exist in 'pending'

    const blocked = await database.collection('blocked').findOne({ email }); // Check if the user already exists in 'blocked'
    if (!blocked) {
      // Insert the document into 'blocked' collection
      await database.collection('blocked').insertOne({
        email: pending.email,
        passwordHash: pending.passwordHash,

        role: pending.role,
        status: 'blocked',
        firstName: pending.firstName,
        lastName: pending.lastName,

        userIP: pending.userIP,
        createdAt: pending.createdAt,
        updatedAt: await createDate('today'),
        lastLogin: null,

        restrictionExpiresAt: await createDate('tomorrow'),
      });

      //--|🠋 Delete the user from the 'pending' collection 🠋|--//
      await database.collection('pending').deleteOne({ email });
    }
  }

  try {
    let flagActivation = await matchValue(activation, user.activationCode);
    if (flagActivation) {
      await pending_enabled(email);
      return res.status(200).json({
        view: 'login',
        data: user,
      });
    } else if (user.activationAttempts < 3) {
      await database.collection('pending').updateOne(
        { email: email }, // Find the document by email
        { $inc: { activationAttempts: 1 } } // Increment activationAttempts by 1
      );
      return res.status(200).json({
        view: 'verify',
        data: user,
      });
    } else {
      await pending_blocked(email);
      return res.status(200).json({
        view: 'blocked',
        data: user,
      });
    }
  } catch (error) {
    axiosError(error); //--|🠈 Handle Login Errors 🠈|--//
  }
});
//--|🠋 POST: Form.reset.tsx 🠋|--//
server.post(`/${root}/reset`, async (req, res) => {
  const { email, passwordNew, renewal } = req.body;
  const user =
    (await database.collection('enabled').findOne({ email })) ||
    (await database.collection('pending').findOne({ email })) ||
    (await database.collection('blocked').findOne({ email }));

  async function updatePassword(email, password) {
    await database.collection('enabled').updateOne(
      { email: email },
      {
        $set: {
          passwordHash: await encryptValue(password),

          userIP: await trackPlace(req),
          updatedAt: await createDate('today'),

          passwordCode: null,
          passwordChangeRequests: 0,
          passwordCodeExpiresAt: null,
        },
      }
    );
  }

  try {
    let flagRenewal = await matchValue(renewal, user.passwordCode);
    let flagPassword = await decryptValue(passwordNew, user.passwordHash);
    if (flagRenewal === true && flagPassword === false) {
      await updatePassword(email, passwordNew);
    }
    return res.status(200).json({
      view: 'login',
      data: user,
    });
  } catch (error) {
    axiosError(error); //--|🠈 Handle Login Errors 🠈|--//
  }
});

let encryptValue = async (value) => {
  //--|🠊 Encrypt String 🠈|--//
  const salt = await bcrypt.genSalt();
  return await bcrypt.hash(value, salt);
};
let decryptValue = async (input, field) => {
  return await bcrypt.compare(input, field);
};
let matchValue = async (input, field) => {
  switch (input) {
    case field:
      return true;
    default:
      return false;
  }
};
let verifyDate = async (date) => {
  let present = new Date(); // Get the current date and time
  let inputDate = new Date(date); // Convert the input string to a Date object

  return present > inputDate ? 'expired' : 'blocked';
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
let axiosError = (error) => {
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

//--------------------------------------------------------------------------------//

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
//--------------------------------------------------------------------------------//
