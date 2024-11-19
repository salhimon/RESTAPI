
const express= require("express")
const exp=express();

exp.use(express.json());

require('dotenv').config();
PORT=process.env.PORT;

//connection à la Base de Donné
const connectDB=require("./config/connectDB");
connectDB();

//connect to file User
exp.use('/api/User', require('./routes/User'))


//connection de PORT
exp.listen(PORT, err =>{
    err ? console.log("Port n'est pas connecté") : 
    console.log(`serveur connecté à ${PORT}`);
})
