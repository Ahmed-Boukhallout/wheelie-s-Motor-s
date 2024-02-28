const express = require('express')
console.log("test");
const users = require('./models/users')
const chat = require('./models/chat')
const Cart =require ('./models/cart.js')
const product = require ('./models/product.js')
const userRoutes=require('./routes/usersRoute.js')
const chatRouter=require('./routes/chatRoute.js')
const loginRouterUser=require('./routes/LoginRouteUser.js')
const signupRouterUser=require('./routes/SignupRouteUser.js')
const CartRouter=require('./routes/RoutesCart');
const prodRouter = require('./routes/RoutsProduct.js')
const PORT = 3000
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/../client/dist'))


//user routes
app.use('/api',loginRouterUser)
app.use('/api',signupRouterUser)
app.use('/api/cart',CartRouter)
app.use('/api/products',prodRouter)


app.use('/api',userRoutes)
app.use('/api',chatRouter)


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})