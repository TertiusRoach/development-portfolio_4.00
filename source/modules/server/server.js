//--|🠊 Open folder Location in Integrated Terminal to run: nodemon server 🠈|--//
const express = require('express');
const { connectToDatabase, getDatabase } = require('./data');

// init app & middleware
const port = 3000;
const route = '/books';
const server = express();

// Database Connection
let db;
connectToDatabase((err) => {
  if (!err) {
    server.listen(port, () => {
      console.log(`//--|🠊 Listening on Port: ${port} 🠈|--//`);
    });
    db = getDatabase();
  }
});

// Routes

server.get(route, (request, response) => {
  let books = [];
  db.collection('books')
    .find()
    .sort({ author: 1 })
    .forEach((book) => books.push(book))
    .then(() => {
      response.status(200).json(books);
    })
    .catch(() => {
      response.status(500).json({ error: 'Could not fetch the documents' });
    });
  // response.json({ msg: 'Welcome to the API' });
  console.log(`//--|🠊 Go to http://localhost:${port}/${route} 🠈|--//`);
});
