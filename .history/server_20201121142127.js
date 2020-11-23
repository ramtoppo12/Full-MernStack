import express from "express";
import dotenv from "dotenv";
import colors from "colors"
import morgan from "morgan";


dotenv.config({path:'./congif/config.env'});


//initialise

const app = express();

//routing

app.get('/',(req,res)=> res.send('Hello world'));

//Port config

const PORT = process.env.PORT || 5000


//port listening
app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))