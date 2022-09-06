const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "country",
    {
      alpha_code: {
        type: DataTypes.STRING(3),
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      flag: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      continent: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      capital: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      subregion: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      population: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      area: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { createdAt: false, updatedAt: false }
  );
};
