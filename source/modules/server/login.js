//--|🠊 Open folder Location in Integrated Terminal to run: nodemon login 🠈|--//
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
      res.status(500).json({ error: 'Could not fetch the documents' });
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
}
*/
