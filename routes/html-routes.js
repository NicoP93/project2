var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Cryptid.findAll  ({}).then(function(results) {
      res.render("index", {
         results
      });
    });
  });


    // Load example page and pass in an example by id
    app.get("/cryptid-view/:id", function(req, res) {
      db.Cryptid.findOne({ where: { id: req.params.id } }).then(function(results) {
        res.render("cryptid", {
         results
        });
      });
    });

  // Render 404 page for any unmatched routes

};
