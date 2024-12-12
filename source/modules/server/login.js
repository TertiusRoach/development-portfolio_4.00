// login.js
//--|🠊 Open folder Location in Integrated Terminal to run: nodemon login 🠈|--//
const cors = require('cors');
const bcrypt = require('bcrypt');
const express = require('express');
const { ObjectId } = require('mongodb');
const { connectDatabase, getDatabase } = require('./data');

let database;
const port = 3000;
const name = 'login';
const route = 'users';
const server = express();
server.use(express.json());
server.use(cors({ origin: 'http://localhost:8080', credentials: true }));

//--|🠊 Start the Server 🠈|--//
connectDatabase((err) => {
  if (!err) {
    server.listen(port, () => {
      console.log(`//--|🠊 Listening on http://localhost:${port}/${route} 🠈|--//`);
    });
    database = getDatabase();
  }
}, name);

//--|🠊 POST: Check User Password 🠈|--//
server.post(`/${route}/login`, async (req, res) => {
  console.log('Login Request Body:', req.body);

  try {
    /*
    // Validate input: Check if both email and passwordHash are provided
    if (!email || !passwordHash) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }



    // If no user is found, return an error response
    if (!user) {
      return res.status(404).json({ error: 'User not found.' }); // Changed to 404 for better semantics
    }
    */
    /*
    // Log a list of all users in the database (for debugging purposes)
    const users = await database
      .collection(route)
      .find({}, { projection: { email: 1, verifiedEmail: 1, status: 1 } })
      .toArray();
    console.log('Database Users:', users);
    */

    const { email, passwordHash } = req.body; // Extract email and passwordHash from the request body
    const user = await database.collection(route).findOne({ email }); // Attempt to find a user with the provided email in the database
    const isPasswordValid = await bcrypt.compare(passwordHash, user.passwordHash); // Compare the provided passwordHash with the stored passwordHash

    // console.log(user);
    //--|🠊 Respond based on password validity 🠈|--//
    if (isPasswordValid) {
      return res.status(200).send(user.status); // Send success message
      // return res.status(200).send('Successful login.'); // Send success message
    } else {
      return res.status(401).send('Invalid password.'); // Unauthorized for invalid password
    }
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error in Login:', error);

    // Return a generic error response to the client
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
});

//--|🠊 GET: Fetch List of Users 🠈|--//
server.get(`/${route}`, async (req, res) => {
  try {
    const users = await database.collection(route).find().sort({ email: 1 }).toArray();
    res.status(200).json(users);
  } catch {
    res.status(500).json({ error: 'Could not fetch the user documents' });
  }
});

//--|🠊 POST: Add a New User 🠈|--//
server.post(`/${route}`, async (req, res) => {
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
    const result = await database.collection(route).insertOne({
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
