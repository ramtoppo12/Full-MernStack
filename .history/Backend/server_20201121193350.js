// importing files

// import express from "express";
// import dotenv from "dotenv";
// import morgan from "morgan";
// import colors from "colors";

const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");


const transections = require('./routes/transections');

// config file

dotenv.config({path:'./congif/config.env'});

//initialise

const app = express();

//Routing 

app.get('/',(req,res) => res.status(200).send('Hello this is from backend server'));


//middleware
// app.use(express.json());
app.use('/api/v1/transections',transections);


//port config

const PORT = process.env.PORT || 5000;

const NODE_ENV = process.env.NODE_ENV;

app.listen(PORT,console.log(`this server is runing ${NODE_ENV} and listening to ${PORT}`.blue.bold));