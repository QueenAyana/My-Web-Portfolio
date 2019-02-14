var express = require("express");
var path = require("path")

var app = express();

var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))


// Import routes and give the server access to them.
var htmlRoutes = require("./routes/htmlroutes");
htmlRoutes(app)

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
 