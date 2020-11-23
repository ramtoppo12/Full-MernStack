import express from "express";
import dotenv from "dotenv";
import colors from "colors"
import morgan from "morgan";


dotenv.config({path:'./congif/config.env'});


//initialise

const app = express();