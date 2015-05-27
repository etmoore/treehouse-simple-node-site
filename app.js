// Problem: We need a simple way to view a user's badges and points in a browser
// Solution: Use Node.js to perform a profile lookup and serve the template via http

var router = require('./router');
// Create a web server
var http = require('http');
http.createServer(function (req, res) {
  router.home(req, res);
  router.user(req, res);
}).listen(3000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:3000/');

// Function that handles the reading of files and merges in values
  // read from file and get a string
    // merge values into string
