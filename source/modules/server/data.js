const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');
dotenv.config(); // Load variables from .env

let connection;
module.exports = {
  connectDatabase: (callback, databaseName) => {
    let uri;
    switch (databaseName) {
      case 'bookstore':
        uri = process.env.BOOKSTORE_URI;
        break;
      case 'login':
        uri = process.env.LOGIN_URI;
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
