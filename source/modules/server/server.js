//--|🠊 Open folder Location in Integrated Terminal to run: nodemon server 🠈|--//
const express = require('express');
const { connectToDb, getDb } = require('./data');

// init app & middleware
const port = 3000;
const route = '/books';
const server = express();

// Database Connection
let db;
connectToDb((err) => {
  if (!err) {
    server.listen(port, () => {
      console.log(`//--|🠊 Listening on Port: ${port} 🠈|--//`);
    });
    db = getDb();
  }
});

// Routes

server.get(route, (request, response) => {
  response.json({ msg: 'Welcome to the API' });
  console.log(`//--|🠊 Go to http://localhost:${port}/${route} 🠈|--//`);
});
