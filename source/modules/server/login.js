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
server.get(`/${route}`, (req, res) => {
  let users = [];
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
  const now = new Date(); // Current date
  const todayISO = now.toISOString().split('.')[0] + 'Z'; // Today's date in ISO

  // Create a new Date object for tomorrow
  const tomorrow = new Date(now); // Clone the 'now' date to avoid modifying it
  tomorrow.setDate(tomorrow.getDate() + 1); // Add 1 day
  const tomorrowISO = tomorrow.toISOString().split('.')[0] + 'Z'; // Tomorrow's date in ISO

  // You have to test this online, locally it will return ::1
  const userIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  const randomCode = generateRandomCode(10);

  // hash(salt + 'password')
  const user = {
    email: req.body.email,
    verifiedEmail: false,
    activationCode: randomCode,
    activationCodeExpiresAt: tomorrowISO,

    passwordHash: req.body.password,
    passwordResetToken: null,
    passwordResetExpiresAt: null,

    userIP: userIP,
    lastLogin: null,
    createdAt: todayISO,
    updatedAt: null,

    role: 'user',
    status: 'pending',
  };

  database
    .collection(route)
    .insertOne(user)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(500).json({ err: 'Could not create a new user.' });
    });
});
/*
{
  "email": "fullname@email.com",
  "verifiedEmail": false,
  "activationCode": "1A2B3C4D5E",
  "activationCodeExpiresAt": "2024-12-03T09:28:16Z",
  
  "passwordHash": "hashed_password_here",
  "passwordResetToken": null,
  "passwordResetExpiresAt": null,

  "lastLogin": null,
  "createdAt": "2024-12-02T09:28:16Z",
  "updatedAt": "2024-12-02T09:28:16Z",

  "role": "user",
  "status": "pending"
  "ip": "102.33.16.58"
}
*/

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

/*
      server.get(`/${route}`, (req, res) => {
        const userIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        console.log('User IP:', userIP); // Logs IP when a request is made to /login

        res.send(`Logged IP: ${userIP}`);
      });
      */
/*
      const now = new Date(); // Current date
      const todayISO = now.toISOString().split('.')[0] + 'Z'; // Today's date in ISO

      // Create a new Date object for tomorrow
      const tomorrow = new Date(now); // Clone the 'now' date to avoid modifying it
      tomorrow.setDate(tomorrow.getDate() + 1); // Add 1 day
      const tomorrowISO = tomorrow.toISOString().split('.')[0] + 'Z'; // Tomorrow's date in ISO

      console.log('Today:', todayISO);
      console.log('Tomorrow:', tomorrowISO);
      */

// console.log('Random Code:', randomCode);
