'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', {
      orderID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "Order_ID",
        unique: 'compIndex',
      },
      userID: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "userID",
        },
        onDelete: "CASCADE",
      },
      productID: {
        type: DataTypes.INTEGER,
        references: {
          model: "products",
          key: "productID",
        },
        onDelete: "CASCADE",
        unique: 'compIndex',
      },
      UnitProducts: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
      ShipName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ShipAddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ShipCity: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ShipState: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ShipCountry: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ShipPostalCode: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('orders')
  }
};
