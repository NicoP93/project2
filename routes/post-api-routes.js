var db = require("../models");

module.exports = function(app) {

  // Get all examples
  // Get route for retrieving a single post
  app.post("/api/posts/add/:id", function(req, res) {
    db.Post.create(req.body).then(function(results) {
      res.json(results);
    });
  });
  app.get("/api/posts/:id", function(req, res) {

    db.Post.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  // POST route for saving a new post


  // // DELETE route for deleting posts
  // app.delete("/api/posts/:id", function(req, res) {
  //   db.Post.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(results) {
  //     res.json(results);
  //   });
  // });

  // // PUT route for updating posts
  // app.put("/api/posts", function(req, res) {
  //   db.Post.update(req.body, {
  //     where: {
  //       id: req.body.id
  //     }
  //   }).then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });

  //POSTs the login information into the Users database
  app.post("/api/signup", function(req, res) {
    db.User.create(req.body).then(function(data){
        res.json(data);
        // res.redirect("/login");
      }).catch(function(err) {
        console.log(err);
        res.json(err);
      });
  });

  //
  app.post("/api/login", function(req, res){
    db.User.findOne({where:{
      email: req.body.email
    }}).then(function(dbUser){
      if(dbUser.validPassword(req.body.password)){
        res.send("Validated");
      } else {
        res.send("Wrong Password!");
      }
    });
  });
};
