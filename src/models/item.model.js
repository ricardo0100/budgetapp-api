module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Item', {
    name: DataTypes.STRING,
    value: DataTypes.FLOAT
  });
};