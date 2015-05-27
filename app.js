// Problem: We need a simple way to view a user's badges and points in a browser
// Solution: Use Node.js to perform a profile lookup and serve the template via http

// Create a web server
var http = require('http');
http.createServer(function (req, res) {
  homeRoute(req, res);
  userRoute(req, res);
}).listen(3000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:3000/');

// Handle HTTP route GET / and POST /
function homeRoute(req, res){
  // if url === GET and "/"
  if (req.url === '/'){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Header\n');
    res.write('Search\n');
    res.end('Footer');
  }
    // show search
  // if url === POST and "/"
    // redirect to /:username
}

// Handle HTTP route for GET /:username
function userRoute(req, res){
  // if url == GET /....anything
  var username = req.url.replace('/', '');
  if (username.length > 0){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Header\n');
    res.write(username + '\n');
    res.end('Footer');
    // get JSON from Treehouse
      // on "end"
        // show profile
      // on 'error'
        // show error
  }
}

// Function that handles the reading of files and merges in values
  // read from file and get a string
    // merge values into string
