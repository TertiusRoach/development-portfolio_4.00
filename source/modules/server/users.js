// users.js
//--|🠊 Open folder Location in Integrated Terminal to run: nodemon users 🠈|--//a
const cors = require('cors');
const bcrypt = require('bcrypt');
const express = require('express');
const { ObjectId } = require('mongodb');
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
