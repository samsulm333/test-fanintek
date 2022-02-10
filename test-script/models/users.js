"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      users.hasMany(models.espresences, {
        as: "epresences",
        foreignKey: {
          name: "id_users",
        },
      });
    }
  }
  users.init(
    {
      nama: DataTypes.STRING,
      email: DataTypes.STRING,
      npp: DataTypes.INTEGER,
      npp_supervisor: DataTypes.INTEGER,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  return users;
};
