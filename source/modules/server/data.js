const { MongoClient } = require('mongodb');
let databaseConnection;

module.exports = {
  connectToDatabase: (callback) => {
    MongoClient.connect('mongodb://localhost:27017/bookstore')
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
