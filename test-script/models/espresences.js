"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class espresences extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      espresences.belongsTo(models.users, {
        as: "users",
        foreignKey: {
          name: "id_users",
        },
      });
    }
  }
  espresences.init(
    {
      id_users: DataTypes.INTEGER,
      type: DataTypes.STRING,
      is_approve: DataTypes.STRING,
      waktu: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "espresences",
    }
  );
  return espresences;
};
