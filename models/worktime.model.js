const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Worktime = sequelize.define("worktimes", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    start: {
        type: DataTypes.STRING,
        allowNull: false
    },
    end: {
        type: DataTypes.STRING,
        allowNull: false
    }
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

  return Worktime;
};