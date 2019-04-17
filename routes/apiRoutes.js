var db = require("../models");

module.exports = function(app) {
  // Get all examples
  
  app.get("/api/cryptid", function(req, res) {
    db.Cryptid.findAll({}).then(function(cryptidX) {
      res.json(cryptidXdb);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
  
  // Pull a single cryptid by id
  app.get("/api/cryptid/:id", function(req, res) {
    db.Cryptid.findOne({
       where: { id : req.params.id } 
    }).then(function(results) {
     
        res.render("example", {
          example: results
        });
    });  
  });   
  
  
};
