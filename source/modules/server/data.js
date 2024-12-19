// data.js
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');
dotenv.config(); // Load variables from .env

let connection;
module.exports = {
  connectDatabase: (callback) => {
    // Unified function to connect to MongoDB
    const uri = process.env.USERS_URI; // Defaulting to USERS_URI as per the usage

    if (!uri) {
      console.error('MongoDB connection URI not found in .env file.');
      return callback(new Error('Missing MongoDB URI'));
    }
    MongoClient.connect(uri)
      .then((client) => {
        connection = client.db();
        return callback();
      })
      .catch((err) => {
        console.log(err);
        return callback(err);
      });
  },
  getDatabase: () => {
    if (!connection) {
      throw new Error('Database connection is not established yet.');
    }
    return connection;
  },
};

/*
Code is broken
module.exports = {
  connectDatabase: (callback, databaseName) => {
    let uri;
    switch (databaseName) {
      case 'bookstore':
        uri = process.env.BOOKSTORE_URI;
        break;
      case 'users':
        uri = process.env.USERS_URI;
        break;
    }

    MongoClient.connect(uri)
      .then((client) => {
        connection = client.db();
        return callback();
      })
      .catch((err) => {
        console.log(err);
        return callback(err);
      });
  },
  getDatabase: () => connection,
};
*/
/*
// Code is deprecated
MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }) // Added options for compatibility
  .then((client) => {
    connection = client.db();
    console.log('//--|🠊 Connected to MongoDB 🠈|--//');
    callback();
  })
  .catch((err) => {
    console.error('//--|🠊 MongoDB connection error 🠈|--//', err);
    callback(err);
  });
*/
