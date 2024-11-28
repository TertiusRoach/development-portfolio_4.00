const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');

let databaseConnection;

module.exports = {
  connectToDatabase: (callback) => {
    const uri = process.env.MONGODB_URI; // Access the URI from environment variables
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
