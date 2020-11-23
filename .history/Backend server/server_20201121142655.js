// importing files

import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import colors from "colors";


//pot confic

dotenv.config({path:'./congif/config.env'})

//initialise

const app = express();

//Routing 

app.get('/',(req,res) => res.send('Hello this is from backend server'))
