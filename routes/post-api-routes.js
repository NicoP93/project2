var db = require("../models");

module.exports = function(app) {

  // Get all examples
  // Get route for retrieving a single post
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
  app.post("/api/posts/add", function(req, res) {
    db.Post.create(req.body).then(function(results) {
      res.json(results);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    db.Post.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
};
