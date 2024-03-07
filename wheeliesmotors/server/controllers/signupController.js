const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../Models/user');
const {addUser} = require('../controllers/UserController');


  
  const Register = async (req, res) => {
    const { FirstName,LastName, Email, Password ,Role } = req.body;
  
    try {
      const hashedPassword = await bcrypt.hash(Password, 10);
  
      const newUser = {
        FirstName,
        LastName,
        Email,
        Role:"user",
        Password: hashedPassword}
       
       addUser({ body: newUser }, res);
    } catch (error) {
      res.status(500).json({ error: 'Error' });
    }
  };
  
  
  module.exports = {
    Register
  };

