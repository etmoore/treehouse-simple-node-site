// Handle HTTP route GET / and POST /
function home(req, res){
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
function user(req, res){
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

module.exports.home = home;
module.exports.user = user;
