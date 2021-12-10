const { Sequelize } = require('sequelize');

// Importando Modelos
const Product = require('./models/Product');
const Category = require('./models/Category');
const Order = require('./models/Order');
const Post = require('./models/Post');
const Suplier = require('./models/Suplier');
const User = require('./models/User');

// Enter username and password to access DB
const sequelize = new Sequelize('Mindfullspace', 'username', 'password',{
    host: localhost,
    dialect: 'mariadb',
    logging: false,
});
const models = [
    Product,
    Category,
    Order,
    Post,
    Suplier,
    User,
]

for (let model of models) {
    model(sequelize);
}

const {products, categories, users, orders, posts, supliers } = sequelize.models;

users.hasMany(posts);
// posts.hasOne(users);
users.hasMany(orders);
// orders.hasMany(users);
products.belongsToMany(orders, {through: 'productoOrder'});
// supliers.hasMany(products);
products.hasOne(supliers)
// categories.hasMany(products)
products.hasOne(categories)

// Missing Relationship Cardinality


