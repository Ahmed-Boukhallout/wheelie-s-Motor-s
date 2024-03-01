const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize('wheeliesmotors', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
  });

  
  sequelize.authenticate().then(r=>console.log('connected')).catch(err => console.log(err))
  
  sequelize.sync({ force: false })
  .then(() => {
    console.log('Chat table created (if not exist)');
  })
  .catch((err) => {
    console.error('Error creating Total table:', err);
  });
  module.exports = sequelize;
// Define User model


// Define relationships between models


// Sync the models with the database
// // execute one time and then comment this code (after Database and tables created!)
//  sequelize.sync({ force: true }).then(() => {
//    console.log('Database and tables created!');
//  }).catch(err => {
//    console.error('Error syncing database:', err);
//  });





