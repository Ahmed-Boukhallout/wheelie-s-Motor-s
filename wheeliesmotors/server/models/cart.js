const sequelize= require ('../database-sequalize/index');
const {DataTypes } = require('sequelize');
const Product = require('../models/product')
const Cart = sequelize.define('cart', {
    CartID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    NameCart: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    CartImage: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    Price: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_ProductID:{
      type : DataTypes.INTEGER ,
      allowNull: true
    }
  },{
    tableName:'cart',
});
Cart.belongsTo(Product, {
  foreignKey: 'product_ProductID', 
  as: 'products',
  onDelete: 'CASCADE',
  onUpdate: 'NO ACTION',
});
  module.exports= Cart