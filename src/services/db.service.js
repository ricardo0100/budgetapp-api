const { Sequelize } = require("sequelize");
const db = require("../config/db.config");

const connection = `mysql://${db.user}:${db.password}@${db.host}:${db.port}/${db.database}`;
const sequelize = new Sequelize(connection);

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = sequelize
