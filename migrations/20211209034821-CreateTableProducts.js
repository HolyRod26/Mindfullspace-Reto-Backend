'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.dropTable('products');
     
  }
};
