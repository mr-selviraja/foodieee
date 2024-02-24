/**
 * @fileoverview Entry point for the server
 * @author Selviraja Pasagadugula
 * @description Configures and starts the Express server for the Foodie web app
 */

// Load environment variables from a .env file
require('dotenv').config();

// Require packages(or)libraries
const express = require('express');
const { CLIENT_PATH } = require('./config/constants');

// Create an instance of express application
const app = express();

// Middleware to serve static files
app.use(express.static(CLIENT_PATH));

// Render index.html template for GET at route '/'
app.get('/', (req, res) => {
  res.sendFile(`${CLIENT_PATH}/public/index.html`);
});

// Specify a port number for the server to serve on
const port = process.env.PORT || 3005;

// Listen for client requests on the specified port
app.listen(port, (err) => {
  // In case error in connecting to the server
  if (err) {
    console.log('Error connecting to the server');
    return;
  }

  console.log(`Server running on port ${port}`);
});
