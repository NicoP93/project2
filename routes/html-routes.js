var db = require("../models");
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

      });
    });

    // Load example page and pass in an example by id
    app.get("/cryptid-view/:id", function(req, res) {
      db.Cryptid.findOne({
        where : { id: req.params.id },
        //include dbpost currently making cryptid view page not work
        include : [db.Post]
      }).then(function(results) {
        console.log(results);
        results.Posts.forEach(function(result){
          result.dataValues.createdAt = moment(result.dataValues.createdAt).format('LLL');
        })
        res.render("cryptid", {results, prev: +req.params.id -1, next: +req.params.id + 1});
      });
    });

    app.get("/signup", (req, res) => {
      res.render("signup", {});
    });

    app.get("/login", (req, res) => {
      res.render("login", {});
    })

    app.get("/directory", function(req, res) {
      db.Cryptid.findAll({}).then(function(results) {
        res.render("directory", {results});
      })
    })

  // Render 404 page for any unmatched routes

};
