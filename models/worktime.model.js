const { DataTypes } = require("sequelize");
const sequelize = require(".");

module.exports = (sequelize) => {
  const Worktime = sequelize.define("Worktimes", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.STRING(100),
      allowNull: false
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ["userId"]
      }
    ]
  }
);

  return User;
};