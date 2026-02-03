const { Sequelize} = require("sequelize");

const dbConfig = require("../config/database.js");

console.log(dbConfig);
const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  port:3306,
  logging: dbConfig.logging
});
const User = require('./user.model.js')(sequelize);
const Worktime = require('./worktime.model.js')(sequelize);

module.exports = {sequelize, User, Worktime};