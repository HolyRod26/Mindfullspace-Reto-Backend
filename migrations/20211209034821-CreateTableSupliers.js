"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("supliers", {
      suplierID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "Suplier_ID",
      },
      productID: {
        type: DataTypes.INTEGER,
        references: { model: "products", key: "productID" },
        onDelete: "CASCADE",
      },
      companyName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        isEmail: true,
      },
      phoneNumber: {
        type: DataTypes.INTEGER,
        max: 11,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('supliers')
  },
};
