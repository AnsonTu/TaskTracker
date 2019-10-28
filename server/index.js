// Main starting point of the application
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
// Add new routes
const router = require("./router");
const cors = require("cors");

// Set up the connection between mongoose and mongoDB
const mongoose = require("mongoose");
// DB setup. This creates a new database inside of mongoDB called auth
mongoose.connect("mongodb://localhost:27017/auth");

// App Setup
// app.use() is used to register middleware
// Using cors stops default browser CORS behaviour, allowing
//  API calls from any domain, subdomain, and port
// morgan is a logging middleware
// bodyParser is a middleware used to parse incoming requests into JSON
// nodemon automatically restarts the server whenver a change is made
app.use(morgan("combined"));
app.use(cors());
app.use(bodyParser.json({ type: "*/*" }));
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on: ", port);
