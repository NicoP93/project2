var db = require("../models");
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");
var moment = require("moment");

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
        id: req.params.id
      });
    });

    // Load example page and pass in an example by id
    app.get("/cryptid-view/:id", function(req, res) {
           db.Cryptid.findOne({
        where : { id: req.params.id },
        //include dbpost currently making cryptid view page not work
        include : [db.Post]
      }).then(function(results) {
        results.Posts.forEach(function(result){
          result.dataValues.createdAt = moment(result.dataValues.createdAt).format('LLL');
        })
        res.render("cryptid", {results, prev: +req.params.id -1, next: +req.params.id + 1});
      });
    });

    app.get("/signup", (req, res) => {
      if(req.user) {
        //user has logged in
        res.redirect("/members");
      }
      res.render("signup", {});
    });

    // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    //change this to a res.render() members handlebars page
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

    app.get("/login", (req, res) => {
      if(req.user) {
        //user has logged in
        res.redirect("/members");
      }
      res.render("login", {});
    });

    // // Here we've add our isAuthenticated middleware to this route.
    // // If a user who is not logged in tries to access this route they will be redirected to the signup page
    // app.get("/authors", isAuthenticated, function(req, res) {
    //   res.redirect("/authors");
    // });

    app.get("/directory", function(req, res) {
      db.Cryptid.findAll({}).then(function(results) {
        res.render("directory", {results});
      })
    });

  // Render 404 page for any unmatched routes

};
