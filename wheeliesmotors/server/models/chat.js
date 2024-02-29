const sequelize= require ('../database-sequalize/index');
const {DataTypes } = require('sequelize');
const User = require('./users'); 


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
  company_idcompany: {
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
      name: 'fk_chat_company1_idx',
      fields: ['company_idcompany'],
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
  foreignKey: 'client_id',
  as: 'admin',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
});

module.exports = Chat;