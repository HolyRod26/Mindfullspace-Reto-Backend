const { DataTypes } = require("sequelize");

module.exports = (sequelize) => (
  "categories",
  {
    categoryID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "Category_ID",
    },
    imagePath: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT("tiny"),
      allowNull: false,
    },
  }
);
