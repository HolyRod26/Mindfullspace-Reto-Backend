// models name 'users'
const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize) => {
  const User = sequelize.define(
    "users",
    {
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
    },

    // La parte de hooks nos ayuda a que antes de crear el usuario en la base de datos al mismo tiempo se genere usando bcrypt
    // de manera asincrona al mismo tiempo
    {
      hooks: {
        beforeCreate: (user) => {
          const salt = bcrypt.genSaltSync();
          user.password = bcrypt.hashSync(User.password, salt);
        },
      },
    }
  );

  // Metodo para validar la contraseña ya encriptada con la contraseña que mandara el usuario por el front
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  return User;
};
