// importing files

import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import colors from "colors";


// config file

dotenv.config({path:'./congif/config.env'})

//initialise

const app = express();

//Routing 

app.get('/',(req,res) => res.send('Hello this is from backend server'));


//port config

const PORT = process.env.PORT || 5000;

const NODE_ENV = process.env.NODE_ENV;

app.listen(PORT,console.log(`this server is runing ${NODE_ENV} and listening to ${PORT}`));