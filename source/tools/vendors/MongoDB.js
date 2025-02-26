// MongoDB.js
/*
Run this in the terminal if the 'nodemon users' is giving issues.
// Set-ExecutionPolicy Bypass -Scope CurrentUser -Force
// npx nodemon users
*/
// Importing dotenv to load environment variables from a .env file.
const dotenv = require('dotenv');
// Importing MongoClient from 'mongodb' package which is the class to interact with MongoDB.
const { MongoClient } = require('mongodb');

// dotenv.config() loads environment variables from the .env file into process.env.
// This is useful for keeping sensitive information (like your MongoDB URI) outside of the codebase.
dotenv.config();

// Declare a variable to hold the MongoDB connection once it's established.
let connection;

// Exporting an object with functions that can be used to interact with the database.
module.exports = {
  /**
   * This function is used to establish a connection to MongoDB.
   * It takes a callback function that will be called after the connection is made.
   */
  connectDatabase: (callback) => {
    // The URI for MongoDB connection is typically stored in an environment variable for security purposes.
    const uri = process.env.USERS_URI;

    // Check if the URI is not provided (i.e., missing or not set in the .env file).
    if (!uri) {
      // If the URI is missing, log an error and return an error to the callback.
      console.error('MongoDB connection URI not found in .env file.');
      return callback(new Error('Missing MongoDB URI'));
    }

    // MongoClient.connect(uri, options) is used to connect to MongoDB using the provided URI.
    // The options provided here ensure the client uses the latest features and helps handle connection issues better.
    MongoClient.connect(uri, {
      useUnifiedTopology: true, // Uses the new connection management engine for handling connections.
      useNewUrlParser: true, // Allows parsing the MongoDB connection string using the new parser.
    })
      .then((client) => {
        // Once connected, log the success message and set the `connection` variable to the database instance.
        console.log('Connected to MongoDB successfully!');
        // The `client.db()` method returns a reference to the database. It doesn't yet execute any operations on it.
        connection = client.db();
        // After the connection is established, execute the callback function.
        callback();
      })
      .catch((err) => {
        // If there's an error during the connection, log it and return the error via the callback.
        console.error('Error connecting to MongoDB:', err);
        callback(err);
      });
  },

  /**
   * This function is used to get the reference to the MongoDB database connection.
   * It ensures that the database connection is established before it can be used.
   */
  getDatabase: () => {
    // Check if the connection variable is undefined (i.e., no connection has been established).
    if (!connection) {
      // If no connection has been established, throw an error to inform the user.
      throw new Error('Database connection is not established yet.');
    }
    // Return the established connection to the database.
    return connection;
  },
};
