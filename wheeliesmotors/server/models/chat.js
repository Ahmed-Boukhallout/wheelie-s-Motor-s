const sequelize= require ('../database-squelize/index');
const {DataTypes } = require('sequelize');
const User = require('../Models/user'); 


const Chat = sequelize.define('chat', {
  
  roomId:{
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true, 
  },
  content: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  client_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  user_UserID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'chat',
  indexes: [
    {
      name: 'fk_chat_client1_idx',
      fields: ['client_id'],
    },
    {
      name: 'fk_chat_admin1_idx',
      fields: ['user_UserID'],
    },
  ],
});

Chat.belongsTo(User, {
  foreignKey: 'client_id',
  as: 'client',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
});

Chat.belongsTo(User, {
  foreignKey: 'user_UserID',
  as: 'adminChat',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
});

module.exports = Chat;