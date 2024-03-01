/**
 * @fileoverview Entry point for the server
 * @author Selviraja Pasagadugula
 * @description Configures and starts the Express server for the Foodie web app
 */

// Load environment variables from a .env file
require('dotenv').config();

// Require packages(or)libraries
const express = require('express');
const path = require('path');
const { CLIENT_PATH } = require('./config/constants');

// Create an instance of express application
const app = express();

// Set the views folder manually
app.set('views', `${CLIENT_PATH}/src/views`);

// Set the EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to serve static files
app.use(express.static(CLIENT_PATH));

// Render index.ejs template for GET at route '/'
app.get('/', (req, res) => {
  const data = {
    title: 'Foodie - Made by Foodies for Foodies..!',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta sapiente dolores recusandae fugit maiores totam eveniet. Placeat possimus ipsam impedit corporis soluta earum neque beatae!',
  };

  res.render('index', data);
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
