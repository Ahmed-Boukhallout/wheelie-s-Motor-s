const sequelize=require('../database-squelize/index')
const {DataTypes}=require('sequelize')
const Product = require('../Models/product')
const User = require('../Models/user')
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
    userUserID:{
      type:DataTypes.INTEGER,
      allowNull:true
    },
    product_ProductID:{
      type : DataTypes.INTEGER ,
      allowNull: true
    }
  },{tableName:'cart',
  
  indexes:[
    {
        name: 'fk_cart_user1_idx',
        fields: ['user_UserID'],
      },

]});
Cart.belongsTo(User, {
    foreignKey: 'user_UserID',
    as: 'user',
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  });
Cart.belongsTo(Product, {
  foreignKey: 'product_ProductID', 
  as: 'products',
  onDelete: 'CASCADE',
  onUpdate: 'NO ACTION',
});
module.exports= Cart
