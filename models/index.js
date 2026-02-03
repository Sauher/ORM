const { Sequelize} = require("sequelize");

const dbConfig = require("../config/database.js");

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  logging: 
  dbConfig.logging
});
const User = 'models/user.model.js';
const Worktime = 'models/worktime.model.js';

module.exports = sequelize;