const express = require('express');
const cors=require('cors');
const app = express();
const db=require('./database-squelize/index');
const CartRouter=require('./Routes/RoutesCart');
const loginRoute=require('./Routes/LoginRoute.js')
const signupRoute=require('./Routes/SignupRoute.js')
const wish=require('./Routes/WishRoute.js')
const chat = require('./Models/chat')
const userRouter = require('./Routes/UserRoute.js')
const chatRouter=require('./Routes/ChatRoute.js')
const prodRouter = require('./Routes/RoutsProducts.js')
const PORT = 3000;
app.use(cors())
app.use(express.json())

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/auth', loginRoute);
app.use('/api/auth', signupRoute);
app.use('/api/cart',CartRouter)
 app.use('/api/products',prodRouter)
 app.use('/api/users',userRouter)
app.use('/api/wish',wish)
app.use('/api',chatRouter)




app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
  

  