const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');

// require('dotenv').config();

dotenv.config(); // Load variables from .env
let databaseConnection;

module.exports = {
  connectDatabase: (callback, database) => {
    let uri;
    switch (database) {
      case 'bookstore':
        uri = process.env.BOOKSTORE_URI;
        break;
      case 'login':
        uri = process.env.LOGIN_URI;
        break;
    }

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
