//--|🠊 Open folder Location in Integrated Terminal to run: nodemon server 🠈|--//
const express = require('express'); // Import express to create the server and handle routes
const { ObjectId } = require('mongodb'); // Import ObjectId to validate MongoDB document IDs
const { connectToDatabase, getDatabase } = require('./data'); // Custom modules to connect to the database

// Initialize app, middleware, and configuration variables
let database; // Will hold the reference to the connected database
const port = 3000; // Port number for the server to listen on
const route = 'books'; // Base route for book-related operations
const server = express(); // Create an instance of an Express application
server.use(express.json()); // Middleware to parse incoming JSON requests

// Connect to the database and start the server
connectToDatabase((err) => {
  if (!err) {
    // If no error during connection
    server.listen(port, () => {
      console.log(`//--|🠊 Listening on Port: ${port} 🠈|--//`);
      console.log(`//--|🠊 Go to http://localhost:${port}/${route} 🠈|--//`);
    });
    database = getDatabase(); // Assign the connected database to the `database` variable
  }
});

// GET endpoint: Fetch paginated list of books
server.get(`/${route}`, (request, response) => {
  const page = parseInt(request.query.p) || 0; // Get current page from query string or default to 0
  const booksPerPage = 3; // Number of books to return per page

  let books = [];
  database
    .collection('books') // Access the 'books' collection in the database
    .find() // Retrieve all documents
    .sort({ author: 1 }) // Sort books by author in ascending order
    .skip(page * booksPerPage) // Skip documents based on the current page
    .limit(booksPerPage) // Limit results to `booksPerPage`
    .forEach((book) => books.push(book)) // Add each book to the `books` array
    .then(() => {
      response.status(200).json(books); // Return the books in the response
    })
    .catch(() => {
      response.status(500).json({ error: 'Could not fetch the documents' }); // Handle database errors
    });
});

// GET endpoint: Fetch a single book by ID
server.get(`/${route}/:id`, (req, res) => {
  const { id } = req.params; // Extract ID from the request parameters
  if (!ObjectId.isValid(id)) {
    // Validate the ID format
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  database
    .collection('books')
    .findOne({ _id: new ObjectId(id) }) // Find a book by its _id
    .then((doc) => {
      if (!doc) {
        return res.status(404).json({ error: 'Document not found' }); // Return 404 if not found
      }
      res.status(200).json(doc); // Return the found document
    })
    .catch((err) => {
      console.error('Error fetching document:', err); // Log the error for debugging
      res.status(500).json({ error: 'Could not fetch document' }); // Return generic server error
    });
});

// POST endpoint: Add a new book
server.post(`/${route}`, (req, res) => {
  const book = req.body; // Extract the book data from the request body
  if (!book || Object.keys(book).length === 0) {
    // Validate non-empty input
    return res.status(400).json({ error: 'Book data is required' });
  }

  database
    .collection('books')
    .insertOne(book) // Insert the new book into the collection
    .then((result) => {
      res.status(201).json({ message: 'Book created successfully', id: result.insertedId });
    })
    .catch((err) => {
      console.error('Error creating document:', err);
      res.status(500).json({ error: 'Could not create a new document.' });
    });
});

// DELETE endpoint: Delete a book by ID
server.delete(`/${route}/:id`, (req, res) => {
  const { id } = req.params; // Extract ID from request parameters
  if (!ObjectId.isValid(id)) {
    // Validate the ID format
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  database
    .collection('books')
    .deleteOne({ _id: new ObjectId(id) }) // Delete the document with the given ID
    .then((result) => {
      if (result.deletedCount === 0) {
        return res.status(404).json({ error: 'Document not found' }); // Document not found
      }
      res.status(200).json({ message: 'Document deleted successfully' });
    })
    .catch((err) => {
      console.error('Error deleting document:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

// PATCH endpoint: Update a book by ID
server.patch(`/${route}/:id`, (req, res) => {
  const updates = req.body; // Extract update data from request body
  const { id } = req.params; // Extract ID from request parameters

  if (!ObjectId.isValid(id)) {
    // Validate the ID format
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  if (!updates || Object.keys(updates).length === 0) {
    // Ensure update data is not empty
    return res.status(400).json({ error: 'Update data is required' });
  }

  database
    .collection('books')
    .updateOne({ _id: new ObjectId(id) }, { $set: updates }) // Update the document with the provided data
    .then((result) => {
      if (result.matchedCount === 0) {
        return res.status(404).json({ error: 'Document not found' }); // No document found with that ID
      }
      if (result.modifiedCount === 0) {
        return res.status(200).json({ message: 'No changes were made to the document' }); // No updates applied
      }
      res.status(200).json({ message: 'Document updated successfully' });
    })
    .catch((err) => {
      console.error('Error updating document:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});
