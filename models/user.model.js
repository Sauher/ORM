
const { DataTypes } = require("sequelize");
const sequelize = require(".");

module.exports = (sequelize) => {
  const User = sequelize.define("Users", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    role: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    secret: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false  
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    reg: {
      type: DataTypes.DATE,
      allowNull: false
    },
    last: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    }

  });

  return User;
};