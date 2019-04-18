const bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: {
        type: DataTypes.STRING,
        unique: true,
        validate:{
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
  });

  User.prototype.validPassword = function(password){
      return bcrypt.compareSync(password, this.password);
  };

  User.addHook("beforeCreate", function(user){
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
};