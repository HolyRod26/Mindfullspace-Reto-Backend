'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts', {
      postID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "Post_ID",
      },
      userID: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "userID", // check if it actually is userID from models or the space fields User_ID
        },
        onDelete: "CASCADE",
      },
      header: { type: DataTypes.STRING, allowNull: false },
      content: { type: DataTypes.TEXT, allowNull: false },
      imagePath: { type: DataTypes.STRING },
      filePath: { type: DataTypes.STRING },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts')
  }
};
