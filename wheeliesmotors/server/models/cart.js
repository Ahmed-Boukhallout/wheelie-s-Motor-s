const {DataTypes}=require('sequelize')
const sequelize=require('../database-squelize/index')
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
  },{tableName:'carts',
  
  indexes:[
    {
        name: 'fk_cart_user1_idx',
        fields: ['user_UserID'],
      },

]});
Cart.belongsTo(User, {
    foreignKey: 'user_UserID',
    as: 'users',
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  });
Cart.belongsTo(Product, {
  foreignKey: 'product_ProductID', 
  as: 'cartProducts',
  onDelete: 'CASCADE',
  onUpdate: 'NO ACTION',
});


  module.exports= Cart





// Category.hasMany(Product);
// Product.belongsTo(Category);

// User.hasMany(Product);
// Product.belongsTo(User);