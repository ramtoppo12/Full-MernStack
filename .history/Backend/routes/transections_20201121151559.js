import express from "express";


const router = express.Router();


router.get('/',(req,res)=>res.status(200).send('Hello work this from router'));

module.exports = router;