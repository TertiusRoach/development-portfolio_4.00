//--|🠊 Open folder Location in Integrated Terminal to run: nodemon server 🠈|--//
const express = require('express');
const { ObjectId } = require('mongodb');
const { connectToDatabase, getDatabase } = require('./data');

// init app & middleware
const port = 3000;
const route = '/books';
const server = express();

// Database Connection
let database;
connectToDatabase((err) => {
  if (!err) {
    server.listen(port, () => {
      console.log(`//--|🠊 Listening on Port: ${port} 🠈|--//`);
    });
    database = getDatabase();
  }
});

// Routes

server.get(route, (request, response) => {
  let books = [];
  database
    .collection('books')
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

server.get(`${route}/:id`, (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  database
    .collection('books')
    .findOne({ _id: new ObjectId(req.params.id) })
    .then((doc) => {
      if (!doc) {
        return res.status(404).json({ error: 'Document not found' });
      }
      res.status(200).json(doc);
    })
    .catch((err) => {
      console.error('Error fetching document:', err);
      res.status(500).json({ error: 'Could not fetch document' });
    });
});
