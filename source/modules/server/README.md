# Install for Database Testing

You will need to download and install certain applications by manually downloading software via a browser link and installing it accordingly. THis will allow you to test your code locally to make sure it works as intended before implementing it onto a server. Download and Install a local testing environment called [MongoDB Community Server](https://www.mongodb.com/try/download/community) and [MongoDB Shell](https://www.mongodb.com/try/download/shell). Run [Powershell](https://en.wikipedia.org/wiki/PowerShell). You will need to install the [the following driver](https://www.mongodb.com/docs/drivers/) of your choosing in order to [deploy your local database](https://www.youtube.com/watch?v=a3H9rIj07sk) to MongoDB Atlas as well as [Postman](https://www.postman.com/) which I'm still learning.

---

> Terminal Command Installation

    npm install -g nodemon
    npm install --save-dev cors
    npm install --save-dev axios
    npm install --save-dev bcrypt
    npm install --save-dev dotenv
    npm install --save-dev express
    npm install --save-dev mongodb

    npm install nodemailer
    npm install mongoose

---

# Powershell Commands for MongoDB

> Run MongoDB as Local Database

    mongosh

> Commands in to use for [MongoDB](https://www.youtube.com/watch?v=jR49YGYXdxc)

    help
    show dbs
    use admin
    show collections

> Commands for [Adding New Documents](https://www.youtube.com/watch?v=g3Z0Av9yRSs)

    db.books.insertOne({ title: "Testing Book", author: "Name Surname", pages: 1233, rating: 6, genres: ["romance", "drama"]})
    db.books.insertMany([ { title: "Book One"}, {title: "Book Two"} ])

> Commands for [Finding Documents](https://www.youtube.com/watch?v=FLl9m4XwbqQ)

    db.books.find()
    db.books.find({}, {title: 1, author: 1})
    db.books.find({ author: "Terry Pratchett, rating: 9 })
    db.books.findOne({_id: ObjectId('673b325ce96c392133fc9470')})
    db.books.find({ author: "Jane Austen"}, {title: 1, author: 1})

> [Sorting & Limiting](https://www.youtube.com/watch?v=vI4GdN5wBTQ) Data

    db.books.find().count()
    db.books.find().limit(3)
    db.books.find().limit(3).count()
    db.books.find().sort({ title: 1 })
    db.books.find().sort({ title: -1 })
    db.books.find().sort({ title: 1 }).limit(3)
    db.books.find({ author: "Douglas Adams"}).count()

> [Operators & Complex Queries](https://www.youtube.com/watch?v=NRKGZdJTf48)

    db.books.find({ rating: {$gt: 5}})
    db.books.find({ rating: {$lt: 5}})
    db.books.find({ rating: {$gte: 5}})
    db.books.find({ rating: {$lte: 5}})
    db.books.find({ rating: {$in: [7,8,9]}})
    db.books.find({$or: [{rating: 8.5}, {rating: 10}]})
    db.books.find({genres: {$all: ["fantasy", "sci-fi"]}})

> [Updating Documents](https://www.youtube.com/watch?v=s8YG0GvQInY)

    db.books.updateMany({author: "Terry Pratchett"}, {$set: {author: Unknown Author"}})
    db.users.updateOne({_id: ObjectId('67598cabaf2a0d1d6d6f47b7')}, {$set: {status: "enabled"}})
    db.books.updateOne({_id: ObjectId('673b3032e96c392133fc9465')}, {$pull: {genres: "fantasy"}})
    db.books.updateOne({_id: ObjectId('673b3032e96c392133fc9465')}, {$push: {genres: "fantasy"}})
    db.users.updateOne({_id: ObjectId('67598cabaf2a0d1d6d6f47b7')}, {$set: {verifiedEmail: true}})
    db.books.updateOne({_id: ObjectId('673b3032e96c392133fc9465')}, {$set: {rating: 7, pages: 361}})

> [Deleting Documents](https://www.youtube.com/watch?v=hq7gGo-1CgM)

    db.users.deleteOne({_id: ObjectId("674d8a53e29f96ec8c9d6852")})

> Extra Commands for Referencing

    db
    cls

---

[Build Node.js User Authentication - Password Login](https://www.youtube.com/watch?v=Ud5xKCYQTjM)

---

    npm install --save-dev mongoose

    npm install -g heroku
    npm install --save-dev heroku-cli
    npm install --save-dev jsonwebtoken

---
