import express from "express";
app.use(app.router);
routes.initialize(app);

const router = express.Router();


router.get('/',(req,res)=>res.status(200).send('Hello work this from router'));

module.exports = router;