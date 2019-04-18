var db = require("../models");

module.exports = function(app) {
  //post user login information
  app.post("/api/signup", function(req, res){
    db.User.create(req.body).then(function(){
        res.redirect(307, "/api/login")
      }).catch(function(err) {
        console.log(err);
        res.json(err);
      })
  })
};
