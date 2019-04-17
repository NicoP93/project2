module.exports = function(sequelize, DataTypes) {
  var Cryptid = sequelize.define("Cryptid", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING,
    item_num: DataTypes.STRING,
    obj_class: DataTypes.STRING,
    description: DataTypes.TEXT,
    procedures: DataTypes.TEXT,
    page_url: DataTypes.STRING,
    img_url: DataTypes.STRING
  });

  // Cryptid.associate = function(models) {
  //   // Associating Author with Posts
  //   // When an Author is deleted, also delete any associated Posts
  //   Cryptid.hasMany(models.Post, {
  //     onDelete: "cascade"
  //   });
  // };

  return Cryptid;
};
// INSERT INTO cryptids (name, item_num, obj_class, procedures, description, page_url, img_url)
// VALUES ("SCP-173", 173, "Euclid",
// "Item SCP-173 is to be kept in a locked container at all times. When personnel must enter SCP-173's container, no fewer than 3 may enter at any time and the door is to be relocked behind them. At all times, two persons must maintain direct eye contact with SCP-173 until all personnel have vacated and relocked the container.",
// "Moved to Site-19 1993. Origin is as of yet unknown. It is constructed from concrete and rebar with traces of Krylon brand spray paint. SCP-173 is animate and extremely hostile. The object cannot move while within a direct line of sight. Line of sight must not be broken at any time with SCP-173. Personnel assigned to enter container are instructed to alert one another before blinking. Object is reported to attack by snapping the neck at the base of the skull, or by strangulation. In the event of an attack, personnel are to observe Class 4 hazardous object containment procedures.\n\nPersonnel report sounds of scraping stone originating from within the container when no one is present inside. This is considered normal, and any change in this behaviour should be reported to the acting HMCL supervisor on duty.\n\nThe reddish brown substance on the floor is a combination of feces and blood. Origin of these materials is unknown. The enclosure must be cleaned on a bi-weekly basis.",
// "http://www.scp-wiki.net/scp-173",
// "http://scp-wiki.wdfiles.com/local--files/scp-173/SCP-173.jpg");



