var path = require("path");

module.exports = function (app) {

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });


  app.get("/projects", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/projects.html"));
  });

  app.get("/aboutMe", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

}