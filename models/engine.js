module.exports = function(sequelize, DataTypes){
    var Engine = sequelize.define("Engine", {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        image_url: DataTypes.STRING,
        rating: DataTypes.INTEGER
    });
    return Engine;
}