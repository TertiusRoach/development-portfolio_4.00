// users.js
//--|🠊 Open folder Location in Integrated Terminal to run: nodemon users 🠈|--//
const cors = require('cors');
const bcrypt = require('bcrypt');
const express = require('express');
const { ObjectId } = require('mongodb');
const { connectToDatabase, getDatabase } = require('./data'); // Custom modules to connect to the database

let database;
const port = 3000;
const root = 'users';
const name = 'pending';
const server = express();
server.use(express.json());
server.use(cors({ origin: 'http://localhost:8080', credentials: true }));

//--|🠊 Start the Server 🠈|--//
connectToDatabase((err) => {
  if (!err) {
    // If no error during connection
    server.listen(port, () => {
      console.log(`//--|🠊 Listening on Port: ${port} 🠈|--//`);
      console.log(`//--|🠊 Go to http://localhost:${port}/${root} 🠈|--//`);
    });
    database = getDatabase(); // Assign the connected database to the `database` variable
  }
});

//--|🠊 POST: Registration Page 🠈|--//
/*
server.post(`/${root}`, async (req, res) => {
  //--|🠋 Add a New User 🠋|--//
  const today = new Date(); // Get current date
  const todayISO = today.toISOString().split('.')[0] + 'Z'; // Convert to ISO format (e.g., YYYY-MM-DDTHH:mm:ssZ)

  const tomorrow = new Date(today); // Clone today's date
  tomorrow.setDate(tomorrow.getDate() + 1); // Increment by 1 day
  const tomorrowISO = tomorrow.toISOString().split('.')[0] + 'Z'; // ISO format for tomorrow

  const userIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress; // Get user's IP address
  const randomCode = generateRandomCode(5);

  try {
    // Hash the user's password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.passwordHash, salt);

    // Insert the user data into the database
    const result = await database.collection(root).insertOne({
      firstName: req.body.firstName,
      lastName: req.body.lastName,

      email: req.body.email,
      passwordHash: hashedPassword,

      verifiedEmail: false, // Initial email verification state
      activationCode: randomCode,
      activationCodeExpiresAt: tomorrowISO, // Activation code expiry

      userIP: userIP, // Store user's IP address
      lastLogin: null, // No login yet
      createdAt: todayISO, // Timestamp of user creation
      updatedAt: null, // To be updated on edits

      role: 'user', // Default role for new users
      status: 'pending', // pending | verified

      passwordResetToken: null, // For password recovery feature
      passwordResetExpiresAt: null, // Expiry for reset token
    });

    // Respond with a 201 (Created) and return the inserted result
    res.status(201).json(result);
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ err: 'Could not create a new user.' }); // User feedback for server issues
  }
});
*/

//--|🠊 POST: Login Page 🠈|--//
/*
server.post(`/${root}/login`, async (req, res) => {
  //--|🠋 Check User Password 🠋|--//
  console.log('Login Request Body:', req.body);

  try {
    const { email, passwordHash } = req.body; // Extract email and passwordHash from the request body
    const user = await database.collection(root).findOne({ email }); // Attempt to find a user with the provided email in the database
    const isPasswordValid = await bcrypt.compare(passwordHash, user.passwordHash); // Compare the provided passwordHash with the stored passwordHash
    //--|🠊 Respond based on password validity 🠈|--//
    if (isPasswordValid) {
      return res.status(200).send(user.status); // Send success message
    } else {
      return res.status(401).send('Invalid password.'); // Unauthorized for invalid password
    }
  } catch (error) {
    console.error('Error in Login:', error); // Log the error for debugging purposes
    return res.status(500).json({ error: error.message || 'Internal Server Error' }); // Return a generic error response to the client
  }
});
*/

//--|🠊 GET: Fetch List of Users 🠈|--//
/*
server.get(`/${root}`, async (req, res) => {
  try {
    const users = await database.collection(route).find().sort({ email: 1 }).toArray();
    res.status(200).json(users);
  } catch {
    res.status(500).json({ error: 'Could not fetch the user documents' });
  }
});
*/

const generateRandomCode = (length) => {
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
