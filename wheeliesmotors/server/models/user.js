const sequelize=require('../database-squelize/index.js')
const {DataTypes} =require('sequelize')
const User = sequelize.define('user', {
    UserID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Password: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    Email: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    Role: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    FirstName: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    LastName: {
      type: DataTypes.STRING(255),
      allowNull: true,
    }, 
  },{tableName:'user',
  engine: 'InnoDB',});

  module.exports= User;