var db = require("../models");

module.exports = function(app) {
  // Get all examples

  app.get("/api/cryptid", function(req, res) {
    db.Cryptid.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // // Create a new cryptid
  // app.post("/api/cryptid", function(req, res) {
  //   db.Cryptid.create(req.body).then(function(results) {
  //     res.json(results);
  //   });
  // });

  // Pull a single cryptid by id
  app.get("/api/cryptid/:id", function(req, res) {
    db.Cryptid.findOne({
      where: { id: req.params.id }
    }).then(function(results) {
      res.render("example", {
        example: results
      });
    });
  });
};
