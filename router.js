var Profile = require('./profile');

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
    // get JSON from Treehouse

    var studentProfile = new Profile(username);
    studentProfile.on('end', function(profileJSON){
      // show profile
      // store the values which we need
      var values = {
        avatarUrl: profileJSON.gravatarUrl,
        username: profileJSON.profile_name,
        badges: profileJSON.badges.length,
        javascriptPoints: profileJSON.points.JavaScript
      };
      res.write(values.username + ' has ' + values.badges + ' badges.\n');
      res.end('Footer');
    });
    // on 'error'
    studentProfile.on('error', function(error){
      // show error
      res.end('Footer');
    });

  }
}

module.exports.home = home;
module.exports.user = user;
