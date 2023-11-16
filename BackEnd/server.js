var express= require("express");
var http = require("http");
var mongoose=require("mongoose");
const cors = require('cors');

var app=express();
var bodyParser = require('body-parser');
var Users = require('./model/users.model');
const success = "User created successfully";

const failure = "User creation failure due to ";
app.use(express.json());
app.use(bodyParser.json());
//import routes
const usersRoute = require('./routers/router.js'); 
app.use('/',usersRoute);
app.use(cors());
 

var server=http.createServer(app);
mongoose.connect("mongodb://localhost:27017/Assignment8DB")
mongoose.connection.on('connected',()=>{
    console.log("connected to Mongoose");
});
mongoose.connection.on('error',()=>{
    console.log("error in connecting to Mongoose");
});

//accept node express
app.get('/', (req,res) =>{
    res.send('hello from Homepage');

});



app.post('/user/authenticate', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // Check if the password is correct
    const isMatch = await user.isValidPassword(password);

    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    // If password matches, proceed with login (e.g., generate token)
    res.status(200).json({ message: "User authenticated successfully" });

    // You would typically generate a token here and send it back for auth purposes

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
server.listen(5000, ()=>{
    console.log("hello server init");
});

