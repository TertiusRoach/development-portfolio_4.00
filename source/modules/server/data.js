// data.js
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');
dotenv.config(); // Load variables from .env

let connection;

async function connectDatabase() {
  if (connection) return connection; // Prevent multiple connections
  const uri = process.env.USERS_URI;
  if (!uri) throw new Error('Missing MongoDB URI');

  const client = new MongoClient(uri);
  await client.connect();
  console.log('Connected to MongoDB successfully!');
  connection = client.db();
  return connection;
}

function getDatabase() {
  if (!connection) throw new Error('Database connection not established.');
  return connection;
}

module.exports = { connectDatabase, getDatabase };
