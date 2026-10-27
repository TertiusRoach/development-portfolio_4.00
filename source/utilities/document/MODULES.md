# Modules

How to set up the back end on your own machine: the database, the secrets file, test emails and the server itself, on Windows, macOS and Linux. You only need this to work on the server side. The front end runs without it (see the [README](../../../README.md#quick-start)).

Git and Node.js come first; they're set up in [GITHUB.md](GITHUB.md#2-machine-setup). How the data itself is structured is in [TABLE.md](TABLE.md).

---

## Contents

1. [What You Need](#1-what-you-need)
2. [Install MongoDB](#2-install-mongodb)
3. [The Secrets File](#3-the-secrets-file)
4. [Test Emails with Mailtrap](#4-test-emails-with-mailtrap)
5. [Run the Server](#5-run-the-server)
6. [If `npm install` Fails](#6-if-npm-install-fails)
7. [mongosh Cheat Sheet](#7-mongosh-cheat-sheet)
8. [Hosted Database (Atlas)](#8-hosted-database-atlas)
9. [References](#9-references)

---

## 1. What You Need

| Tool                                                                       | What it's for                                                     | Required? |
| -------------------------------------------------------------------------- | ----------------------------------------------------------------- | --------- |
| [MongoDB Community Server](https://www.mongodb.com/try/download/community) | The database, running locally so you can test without a server   | Yes       |
| [mongosh](https://www.mongodb.com/try/download/shell)                      | The MongoDB terminal, for looking at and changing data by hand    | Yes       |
| [Mailtrap](https://mailtrap.io)                                            | A fake inbox that catches the app's emails (activation codes…)    | Yes       |
| [MongoDB Compass](https://www.mongodb.com/try/download/compass)            | A visual window into the database, if you prefer clicking         | Optional  |
| [Postman](https://www.postman.com/)                                        | Sends requests to the server by hand, to test routes              | Optional  |

---

## 2. Install MongoDB

### Windows

In PowerShell:

```powershell
winget install MongoDB.Server
winget install MongoDB.Shell
winget install MongoDB.Compass.Community
```

The installer sets MongoDB up as a Windows service, so it starts by itself with the computer. If `winget` isn't available, download the installers from the links in [What You Need](#1-what-you-need) instead.

### macOS

With [Homebrew](https://brew.sh):

```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

`mongodb-community` installs `mongosh` with it. For Compass: `brew install --cask mongodb-compass`.

### Linux (Ubuntu, Ubuntu Studio)

MongoDB isn't in Ubuntu's own package list, so you add MongoDB's first. These commands are for **Ubuntu 24.04** (`noble`); on 22.04 replace `noble` with `jammy`. For anything else, follow [MongoDB's Linux guide](https://www.mongodb.com/docs/manual/administration/install-on-linux/).

```bash
sudo apt-get install -y gnupg curl
curl -fsSL https://www.mongodb.org/static/pgp/server-8.0.asc | sudo gpg -o /usr/share/keyrings/mongodb-server-8.0.gpg --dearmor
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu noble/mongodb-org/8.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
```

Start it, and make it start with the computer from now on:

```bash
sudo systemctl start mongod
sudo systemctl enable mongod
```

### Check That It Works

Same on every system:

```bash
mongosh
```

You should land in a prompt that says `test>`, connected to `mongodb://localhost:27017`. Type `exit` to leave.

---

## 3. The Secrets File

Passwords and addresses never go into the code. They live in `build/.env`, which Git ignores, so they never reach GitHub. Both Webpack and the server read it.

**Create it** in the project's root folder:

| System          | Command                                    |
| --------------- | ------------------------------------------ |
| Windows         | `mkdir build; New-Item build\.env`         |
| macOS and Linux | `mkdir -p build && touch build/.env`       |

**Fill it in** (open it in VS Code). Replace everything in `<…>`:

```bash
#--|🠊 Database 🠈|--#
USERS_URI=mongodb://localhost:27017/tralogfin

#--|🠊 Mailtrap (Section 4) 🠈|--#
MAIL_HOST=sandbox.smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USER=<your Mailtrap username>
MAIL_PASS=<your Mailtrap password>
MAIL_FROM=<the sender address shown on test emails>

#--|🠊 Server 🠈|--#
REACT_APP_BASE_URL=http://localhost:3000
```

| Variable             | What it is                                                                 |
| -------------------- | -------------------------------------------------------------------------- |
| `USERS_URI`          | Where the database lives. The last part (`tralogfin`) is the database name |
| `MAIL_*`             | Mailtrap's SMTP details, so test emails land in Mailtrap instead of real inboxes |
| `REACT_APP_BASE_URL` | The server's address, used by the front end to reach it                    |

> **Never commit `.env`,** and never paste its contents into a ticket, a commit message or a chat. If a secret leaks, change it at the source (Mailtrap, Atlas) straight away.

---

## 4. Test Emails with Mailtrap

The login system emails activation and password codes. During development, those emails go to Mailtrap: a fake inbox that catches everything, so no real person is ever emailed by accident.

1. Create a free account at [mailtrap.io](https://mailtrap.io).
2. Go to **Email Testing** → **Inboxes** → open your inbox.
3. Under **SMTP Settings**, copy the host, port, username and password into `build/.env`.

Every email the app sends now shows up in that inbox.

---

## 5. Run the Server

The front end and the back end run separately, each in its own terminal.

**Terminal 1, the front end** (VS Code starts this by itself when the folder opens):

```bash
npm run app
```

**Terminal 2, the back end**, from the project's root folder:

```bash
cd source/modules/server/MongoDB/REVIEW
npx nodemon landing
```

The server runs on `http://localhost:3000` and restarts by itself whenever you save a server file. Stop it with `Ctrl + C`.

`npx` runs the copy of `nodemon` that `npm install` already put in the project. If you prefer typing just `nodemon landing`, install it once for the whole computer with `npm install -g nodemon`.

> **Known issue:** `landing.js` loads its secrets with `dotenv.config({ path: '../../../build/.env' })`. That path is counted from the terminal's current folder, and from `REVIEW/` three levels up is `source/modules/`, not the project root. So the server looks for `source/modules/build/.env` and doesn't find the real file. The fix is a one-line change to build the path from the file's own location (`path.resolve(__dirname, '../../../../../build/.env')`). It's on the list for when the server code is reworked.

---

## 6. If `npm install` Fails

`bcrypt` (password hashing) contains compiled code. Normally npm downloads a ready-made version for your system. If none exists, npm builds it on the spot, and that needs Python and a C++ compiler. That's why Python shows up in old setup notes.

If `npm install` fails with an error mentioning `bcrypt`, `node-gyp` or `python`:

| System  | Install the build tools                                                                                                                           |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Windows | [Python](https://www.python.org/downloads/), plus [Visual Studio Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/) with **Desktop development with C++** |
| macOS   | `xcode-select --install`                                                                                                                           |
| Linux   | `sudo apt-get install -y build-essential python3`                                                                                                  |

Then run `npm install` again.

---

## 7. mongosh Cheat Sheet

Open the shell with `mongosh`, then switch to the project's database:

```js
use tralogfin
```

The examples use the `PickPage` collection (the characters). Swap in any collection name.

### Look Around

```js
help                 // Every command
show dbs             // Every database
show collections     // Every collection in the current database
db                   // Which database you're in
cls                  // Clear the screen
```

### Load the Test Characters

Run `mongosh` from the project's root folder, so the file path is right:

```js
const data = JSON.parse(require('fs').readFileSync('source/modules/server/MongoDB/testing/TraLogFin.json', 'utf8'))
db.PickPage.insertMany(data.PickPage)
```

### Add ([video](https://www.youtube.com/watch?v=g3Z0Av9yRSs))

```js
db.PickPage.insertOne({ _id: "test-person", name: "Test Person", vocation: "Freelancing", position: "Employee", organizations: [] })
db.PickPage.insertMany([{ _id: "one", name: "One" }, { _id: "two", name: "Two" }])
```

### Find ([video](https://www.youtube.com/watch?v=FLl9m4XwbqQ))

```js
db.PickPage.find()                                            // Everything
db.PickPage.find({}, { name: 1, bureau: 1 })                  // Only the name and bureau
db.PickPage.find({ vocation: "Freelancing", status: "Enabled" })
db.PickPage.findOne({ _id: "jane-lester" })
```

### Sort, Limit and Count ([video](https://www.youtube.com/watch?v=vI4GdN5wBTQ))

```js
db.PickPage.countDocuments()                                  // How many
db.PickPage.countDocuments({ position: "Manager" })
db.PickPage.find().limit(3)                                   // The first three
db.PickPage.find().sort({ name: 1 })                          // A to Z
db.PickPage.find().sort({ name: -1 })                         // Z to A
db.PickPage.find().sort({ name: 1 }).limit(3)
```

### Operators ([video](https://www.youtube.com/watch?v=NRKGZdJTf48))

```js
db.PickPage.find({ status: { $in: ["Pending", "Blocked"] } })                       // Any of these values
db.PickPage.find({ $or: [{ headOfDepartment: true }, { paid: true }] })              // Either condition
db.PickPage.find({ organizations: { $all: ["Voidspire Systems", "Silverveil Logistics"] } })  // In both companies
```

`$gt`, `$gte`, `$lt` and `$lte` (greater than, at least, less than, at most) work the same way on numbers and dates.

### Update ([video](https://www.youtube.com/watch?v=s8YG0GvQInY))

```js
db.PickPage.updateOne({ _id: "dale-sutton" }, { $set: { bureau: "Network Operations" } })
db.PickPage.updateMany({ status: "Pending" }, { $set: { status: "Enabled" } })
db.PickPage.updateOne({ _id: "dimitri-lewis" }, { $pull: { organizations: "Silverveil Logistics" } })  // Remove from a list
db.PickPage.updateOne({ _id: "dimitri-lewis" }, { $push: { organizations: "Silverveil Logistics" } })  // Add to a list
```

### Delete ([video](https://www.youtube.com/watch?v=hq7gGo-1CgM))

```js
db.PickPage.deleteOne({ _id: "test-person" })
```

> These commands are for poking around by hand. The application's own code sticks to the simple, MySQL-friendly queries listed in [TABLE.md](TABLE.md#6-mongodb-today-mysql-tomorrow).

---

## 8. Hosted Database (Atlas)

When the app needs a database that isn't on your own machine, MongoDB Atlas hosts one, with a free tier for small projects ([video](https://www.youtube.com/watch?v=a3H9rIj07sk)).

1. Create an account at [mongodb.com/atlas](https://www.mongodb.com/atlas) and a free cluster.
2. Under **Database Access**, add a database user with a strong password.
3. Under **Network Access**, allow your IP address.
4. Click **Connect** → **Drivers** and copy the connection string. It starts with `mongodb+srv://`.
5. Put it in `build/.env` as `USERS_URI`, with your user's password filled in.

Nothing else changes. The code reads whichever address is in `USERS_URI`.

---

## 9. References

| Topic                    | Link                                                                                              |
| ------------------------ | ------------------------------------------------------------------------------------------------- |
| MongoDB installation     | [MongoDB Docs: Install MongoDB Community](https://www.mongodb.com/docs/manual/installation/)     |
| mongosh                  | [MongoDB Docs: mongosh](https://www.mongodb.com/docs/mongodb-shell/)                              |
| Node.js drivers          | [MongoDB Docs: Drivers](https://www.mongodb.com/docs/drivers/)                                    |
| MongoDB tutorial series  | [YouTube playlist](https://www.youtube.com/playlist?list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA)      |
| Login with Node.js       | [Build Node.js User Authentication](https://www.youtube.com/watch?v=Ud5xKCYQTjM)                  |
| Mailtrap SMTP            | [Mailtrap Docs: Email Testing](https://help.mailtrap.io/article/109-getting-started-with-mailtrap-email-testing) |
| bcrypt build problems    | [bcrypt: Dependencies](https://github.com/kelektiv/node.bcrypt.js#dependencies)                   |
