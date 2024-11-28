const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');

dotenv.config(); // Load variables from .env
let databaseConnection;

module.exports = {
  connectToDatabase: (callback) => {
    const uri = process.env.USERS_URI; // Access the URI from environment variables

    // const uri = process.env.BOOKSTORE_URI; // Access the URI from environment variables
    // const uri = 'mongodb://localhost:27017/bookstore';

    MongoClient.connect(uri)
      .then((client) => {
        databaseConnection = client.db();
        return callback();
      })
      .catch((err) => {
        console.log(err);
        return callback(err);
      });
  },
  getDatabase: () => databaseConnection,
};
