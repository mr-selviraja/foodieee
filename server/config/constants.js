/**
 * @fileoverview Defines constants shared between frontend and backend
 * @author Selviraja Pasagadugula
 */

// Require packages(or)libraries
const path = require('path');

// Path to the client directory
const CLIENT_PATH = path.join(__dirname, '../', '../', 'client');

module.exports = {
  CLIENT_PATH,
};
