//--|🠊 Open folder Location in Integrated Terminal to run: nodemon login 🠈|--//
const bcrypt = require('bcrypt');
const express = require('express');
const { ObjectId } = require('mongodb');
const { connectDatabase, getDatabase } = require('./data');

let database;
const port = 3000;
const route = 'users';
const server = express();
server.use(express.json());

// Connect to the database and start the server
connectDatabase((err) => {
  if (!err) {
    server.listen(port, () => {
      console.log(`//--|🠊 Listening on http://localhost:${port}/${route} 🠈|--//`);
    });

    database = getDatabase();
  }
}, 'login');

//--|🠊 GET: Fetch List of Users 🠈|--//
let users = [];

server.get(`/${route}`, (req, res) => {
  database
    .collection(route)
    .find()
    .sort({ email: 1 })
    .forEach((user) => users.push(user))
    .then(() => {
      res.status(200).json(users);
    })
    .catch(() => {
      res.status(500).json({ error: 'Could not fetch the user documents' });
    });
});

//--|🠊 POST: Add a New User 🠈|--//
server.post(`/${route}`, async (req, res) => {
  const today = new Date(); // Current date
  const todayISO = today.toISOString().split('.')[0] + 'Z'; // Today's date in ISO

  const tomorrow = new Date(today); // Clone the 'now' date
  tomorrow.setDate(tomorrow.getDate() + 1); // Add 1 day
  const tomorrowISO = tomorrow.toISOString().split('.')[0] + 'Z'; // Tomorrow's date in ISO

  const userIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const randomCode = generateRandomCode(10);

  try {
    // Generate salt and hash the password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.passwordHash, salt);

    // Insert into database
    const result = await database.collection(route).insertOne({
      email: req.body.email,
      passwordHash: hashedPassword,

      verifiedEmail: false,
      activationCode: randomCode,
      activationCodeExpiresAt: tomorrowISO,

      userIP: userIP,
      lastLogin: null,
      createdAt: todayISO,
      updatedAt: null,

      role: 'user',
      status: 'pending',

      passwordResetToken: null,
      passwordResetExpiresAt: null,
    });

    res.status(201).json(result);
  } catch (error) {
    console.error(error); // Log the error
    res.status(500).json({ err: 'Could not create a new user.' });
  }
});

//--|🠊 POST: Check User Password 🠈|--//
server.post(`/${route}/login`, async (req, res) => {
  const user = users.find((user) => user.email === req.body.email);
  if (user == null) {
    return res.status(400).send('Cannot Find User');
  }
  try {
    if (await bcrypt.compare(req.body.passwordHash, user.passwordHash)) {
      res.send('Success!');
    } else {
      res.send('Failed!');
    }
  } catch {
    res.status(500).send();
  }
});

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
