const { Sequelize } = require("sequelize");
const db = require("../config/db.config");

const sequelize = new Sequelize(db.host_url);

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;
