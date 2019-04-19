var db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

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
      res.render("add", {

      });
    });

    app.get("/post/add/:id", function(req, res) {
      res.render("post", { 

      });
    });

    // Load example page and pass in an example by id
    app.get("/cryptid-view/:id", function(req, res) {
      db.Cryptid.findOne({
        where : { id: req.params.id },
        //include dbpost currently making cryptid view page not work
        //include : [db.Post]
      }).then(function(results) {
        res.render("cryptid", {results, prev: +req.params.id -1, next: +req.params.id + 1});
      });
    });

    app.get("/signup", (req, res) => {
      res.render("signup", {});
    });

    app.get("/login", (req, res) => {
      if(req.user) {
        res.redirect("/");
      }
      res.render("login", {});
    });

    app.get("/directory", function(req, res) {
      db.Cryptid.findAll({}).then(function(results) {
        res.render("directory", {results});
      })
    });

  // Render 404 page for any unmatched routes

};
