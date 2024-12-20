// users.js
//--|🠊 Open folder Location in Integrated Terminal to run: nodemon users 🠈|--//a
const cors = require('cors');
const bcrypt = require('bcrypt');
const express = require('express');
const { ObjectId } = require('mongodb');
const nodemailer = require('nodemailer'); // Import nodemailer for sending emails
// const { sendActivationEmail } = require('./send'); // Import the sendActivationEmail function
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

//--|🠋 GET: Fetch Users 🠋|--//
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

//--|🠋 POST: Login Page 🠋|--//
server.post(`/${root}/login`, async (req, res) => {
  console.log('Login Request Body:', req.body); //--|🠈 Debugging log for incoming requests 🠈|--//

  try {
    const { email, passwordHash } = req.body; //--|🠈 Extract email and passwordHash from the request body 🠈|--//

    //--|🠊 Check for user in 'enabled', 'pending', or 'blocked' collections 🠈|--//
    const collections = ['enabled', 'pending', 'blocked'];
    let user = null;

    for (const collection of collections) {
      user = await database.collection(collection).findOne({ email });
      if (user) break; //--|🠈 Stop searching once a user is found 🠈|--//
    }

    if (!user) {
      return res.status(404).send('Email not found.'); //--|🠈 User does not exist in any collection 🠈|--//
    }

    //--|🠊 Verify password 🠈|--//
    const isPasswordValid = await bcrypt.compare(passwordHash, user.passwordHash);
    if (!isPasswordValid) {
      return res.status(401).send('Invalid password.'); //--|🠈 Respond with unauthorized for invalid password 🠈|--//
    }

    //--|🠊 If the login is successful, respond with the user status 🠈|--//
    return res.status(200).json({ status: user.status, role: user.role }); //--|🠈 Extend response for scalability (e.g., role) 🠈|--//
  } catch (error) {
    console.error('Error in Login:', error); //--|🠈 Log the error for debugging 🠈|--//
    return res.status(500).json({ error: 'Internal Server Error' }); //--|🠈 Generic error response 🠈|--//
  }
});

//--|🠊 POST: Registration Page 🠈|--//
server.post(`/${root}/register`, async (req, res) => {
  const today = new Date(); // Current date
  const todayISO = today.toISOString().split('.')[0] + 'Z'; // ISO format
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1); // Increment 1 day
  const tomorrowISO = tomorrow.toISOString().split('.')[0] + 'Z';

  const userIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress; // User's IP
  const randomCode = generateRandomCode(5); // Generate 5-digit activation code
  const { email, passwordHash, firstName, lastName } = req.body;

  // Check if email exists in 'enabled', 'pending', or 'blocked'
  const user =
    (await database.collection('enabled').findOne({ email })) ||
    (await database.collection('pending').findOne({ email })) ||
    (await database.collection('blocked').findOne({ email }));

  if (user) {
    const isPasswordValid = await bcrypt.compare(passwordHash, user.passwordHash); // Validate password

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
      passwordCode: null,
      passwordCodeExpiresAt: null,
    });

    // Send activation email
    try {
      await sendActivationEmail(email, randomCode);
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
});

//--|🠊 POST: Password Page 🠈|--//
server.post(`/${root}/password`, async (req, res) => {
  console.log('//--|🠊 Password Reset Request Body 🠈|--//', req.body);

  try {
    //--|🠋 Extract email from request body 🠋|--//
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required.' }); //--|🠈 Validate input 🠈|--//
    }

    //--|🠋 Initialize variables for collections and user search 🠋|--//
    const collections = ['enabled', 'pending', 'blocked']; //--|🠈 List of user collections 🠈|--//
    let user = null;
    let userCollection = null;

    //--|🠋 Search for user in collections 🠋|--//
    for (const collection of collections) {
      user = await database.collection(collection).findOne({ email });
      if (user) {
        userCollection = collection; //--|🠈 Track the collection where the user is found 🠈|--//
        break;
      }
    }

    if (user) {
      //--|🠋 If email is found, update passwordCode and passwordCodeExpiresAt 🠋|--//
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1); //--|🠈 Set expiration to 1 day from now 🠈|--//
      const tomorrowISO = tomorrow.toISOString().split('.')[0] + 'Z'; //--|🠈 Format to ISO 🠈|--//

      const randomCode = generateRandomCode(5); //--|🠈 Generate a 5-digit activation code 🠈|--//

      //--|🠋 Update user's document in the appropriate collection 🠋|--//
      const updateResult = await database.collection(userCollection).updateOne(
        { email }, //--|🠈 Match user by email 🠈|--//
        {
          $set: {
            passwordCode: randomCode, //--|🠈 Set new password reset code 🠈|--//
            passwordCodeExpiresAt: tomorrowISO, //--|🠈 Set expiration time 🠈|--//
          },
        }
      );

      //--|🠋 Respond to the client with success 🠋|--//
      if (updateResult.modifiedCount > 0) {
        console.log(`//--|🠊 Password reset fields updated for ${email} 🠈|--//`);
        return res.status(200).json({ exists: true, updated: true });
      } else {
        console.warn(`//--|🠊 Password reset update failed for ${email} 🠈|--//`);
        return res.status(500).json({ error: 'Failed to update password reset fields.' });
      }
    } else {
      //--|🠋 Respond with 'exists: false' if the email is not found 🠋|--//
      return res.status(200).json({ exists: false });
    }
  } catch (error) {
    //--|🠋 Handle errors during the process 🠋|--//
    console.error('Error in Password Reset:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

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

function generateRandomCode(length) {
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
