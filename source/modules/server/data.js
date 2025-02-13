// data.js
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');
dotenv.config(); // Load variables from .env

let connection;
module.exports = {
  connectDatabase: (callback) => {
    const uri = process.env.USERS_URI;

    if (!uri) {
      console.error('MongoDB connection URI not found in .env file.');
      return callback(new Error('Missing MongoDB URI'));
    }

    MongoClient.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
      .then((client) => {
        console.log('Connected to MongoDB successfully!');
        connection = client.db();
        callback();
      })
      .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
        callback(err);
      });
  },
  getDatabase: () => {
    if (!connection) {
      throw new Error('Database connection is not established yet.');
    }
    return connection;
  },
};
