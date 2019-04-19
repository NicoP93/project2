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
      res.render("add", {

      });
    });

  
  // app.get("/test", function(req, res){
  //   db.Cryptid.findOne({
  //     where: { itemNum: 173}
  //   }).then(function (results) {
  //    console.log(JSON.stringify(results, null, 2));
  //    res.render("example", {cryptid: results})
  //   });
  // });

    // Load example page and pass in an example by id
    app.get("/cryptid-view/:id", function(req, res) {
      db.Cryptid.findOne({ where: { id: req.params.id } }).then(function(results) {
        res.render("cryptid", { results, prev: +req.params.id -1, next: +req.params.id + 1});
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
