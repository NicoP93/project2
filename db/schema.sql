### Schema

DROP DATABASE IF EXISTS cryptids_db;
CREATE DATABASE cryptids_db;
USE cryptids_db;

CREATE TABLE cryptids
(
	id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(75) NOT NULL, ##such as "SCP-173"
    item_num INTEGER(11) NOT NULL,
    obj_class VARCHAR(40) NOT NULL,
    procedures TEXT NOT NULL,
    description TEXT NOT NULL,
    page_url VARCHAR(150) NOT NULL,
    img_url VARCHAR(150),
    PRIMARY KEY (id)
    );