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
  return User;
};
