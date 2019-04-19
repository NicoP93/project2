var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Cryptid.findAll  ({}).then(function(results) {
      res.render("index", {
         results
      });//"parsing error unexpected token" but no action available
    });
  })

  app.get("/cryptid-view/add", function(req, res) {
      res.render("add", { results

      });
    });

    app.get("/post/add", function(req, res) {
      res.render("post", { results

      });
    });

    // Load example page and pass in an example by id
    app.get("/cryptid-view/:id", function(req, res) {
<<<<<<< HEAD
      db.Cryptid.findOne({ 
        where : { id: req.params.id },
        include : [db.Post]
      }).then(function(results) {
        res.render("cryptid", {results});
=======
      db.Cryptid.findOne({ where: { id: req.params.id } }).then(function(results) {
        res.render("cryptid", { results});
>>>>>>> b2eb8422dc8d51f9ca11195e4f7e0b7239e916c3
      });
    });

    app.get("/signup", (req, res) => {
      res.render("signup", {});
    });

    app.get("/login", (req, res) => {
      res.render("login", {});
    })

  // Render 404 page for any unmatched routes

};
