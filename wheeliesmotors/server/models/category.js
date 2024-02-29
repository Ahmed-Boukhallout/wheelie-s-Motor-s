const {DataTypes}=require('sequelize')
const sequelize=require('../database-squelize/index')
const Product =require('../Models/product.js')
const Cart = require('../Models/cart.js')

const Category = sequelize.define('category', {
    CategoryID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    NameCategory: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    CategoryImage: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
      tableName:'carts',
   indexes:[
      {
          name: 'fk_cart_product1_idx',
          fields: ['product_ProductID'],
        },
  

  ]
  });
  Cart.belongsTo(Product, {
    foreignKey: 'product_ProductID', 
    as: 'products',
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  });


console.log('helo');
  module.exports= Category