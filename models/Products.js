const { DataTypes } = require("sequelize");

module.exports = (sequelize) => (
  "products",
  {
    productID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "Product_ID",
    },
    categoryName: {
      type: DataTypes.STRING,
      references: {
        model: "categories",
        key: "categoryID",
      },
      onDelete: "CASCADE",
    },
    unitsStock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantityPerUnit: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
);
