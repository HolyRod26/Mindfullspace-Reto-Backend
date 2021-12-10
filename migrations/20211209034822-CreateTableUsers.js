'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      userID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "User_ID",
      },
      username: { type: DataTypes.STRING, unique: true, allowNull: false },
      names: { type: DataTypes.STRING, allowNull: false },
      PLastName: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, isEmail: true, allowNull: false },
      password: { type: DataTypes.STRING },
      type: {
        isIn: [["admin", "client"]],
        msg: "Needs to be admin or client",
      },
      createdAt: { type: DataTypes.DATE },
      updatedAt: { type: DataTypes.DATE },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users'); 
  }
};
