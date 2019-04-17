"database working correctly, file cleanup, changes to server.js, seeders.js in the correct file"

edit password in config.json to whatever you use, if anything
in mysql workbench on localhost port 3306,
	run code: DROP DATABASE IF EXISTS cryptidX;
		  CREATE DATABASE cryptidX;

in terminal - 
	run npm install --save-dev sequelize-cli to install sequelize locally
	run node server.js
	if no errors, run npx sequelize db:seed:all to migrate the seeds
	should be good to go if no errors
to see it populate in sql workbench,
	run code: USE cryptidx;
		  SELECT * FROM cryptids;
		  DO NOT RUN THE OTHER CODE, ONLY THOSE TWO LINES