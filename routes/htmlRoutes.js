var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Cryptid.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // app.get("/cryptid-view/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("cryptid-view", {
  //       example: dbExample
  //     });
  //   });
  // });


    // Load example page and pass in an example by id
    app.get("/cryptid-view/:id", function(req, res) {
      db.Cryptid.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
        res.render("example", {
          example: results
        });
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};