const User = require('../Models/user.js')
const bcrypt =require('bcrypt')
module.exports={
    getUsers:async(req, res) => {
    let us=await User.findAll()
    res.json(us)
  },
  addUser:async(req,res)=>{
    console.log(req.body)
    let ad=await User.create(req.body)
    res.json(ad)
  }
  ,
  getOneUser:async(req,res)=>{
    let go=await User.findOne({where:{UserID:req.params.UserID}})
    res.json(go)
  },
  deleteUser:async(req,res)=>{
    let de=await User.destroy({where:{UserID:req.params.UserID}})
    res.json(de)
  },
  getSellers:async(req,res)=>{
    let sel=await User.findAll({
      where: {Role: "seller"}
    })
    res.json(sel)
  },
  getOnlyClients:async(req,res)=>{
    let cl=await User.findAll({
        where: {Role: "user"}
    })
    res.json(cl)
  },

  updateUser: async (req, res) => {
      try {
          const { FirstName, LastName, image_user, Password, Email } = req.body;
          
          // Hash the password if it's provided
          let hashedPassword = Password;
          if (Password) {
              hashedPassword = await bcrypt.hash(Password, 10);
          }
  
          // Update user data in the database
          const [rowsUpdated] = await User.update({
              FirstName,
              LastName,
              image_user,
              Password: hashedPassword,
              Email
          }, {
              where: {
                  UserID: req.params.id
              }
          });
  
          // Check if any rows were updated
          if (rowsUpdated === 1) {
              // If successful, send success response
              res.json({ message: 'User updated successfully' });
          } else {
              // If no rows were updated, send not found response
              res.status(404).json({ error: 'User not found' });
          }
      } catch (error) {
          // Handle any errors that occurred during the update process
          console.error('Error updating user:', error);
          res.status(500).json({ error: 'Internal server error' });
      }
  },
  
 searchByName:async(req, res) =>{
      const fullName = req.params.FirstName
      const search= await User.findAll({
        where: { fullName: fullName},
      })
      res.json(search)
      res.json('err')
  }
}
  