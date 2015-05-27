// Problem: We need a simple way to view a user's badges and points in a browser
// Solution: Use Node.js to perform a profile lookup and serve the template via http

// Create a web server

// Handle HTTP route GET / and POST /
  // if url === GET and "/"
    // show search
  // if url === POST and "/"
    // redirect to /:username

// Handle HTTP route for GET /:username
  // if url == GET /....anything
    // get JSON from Treehouse
      // on "end"
        // show profile
      // on 'error'
        // show error

// Function that handles the reading of files and merges in values
  // read from file and get a string
    // merge values into string
