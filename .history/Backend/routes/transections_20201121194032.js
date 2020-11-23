const express = require("express");
const {getTransections} = require('../controller/transections');

const router = express.Router();


router.routes('/').get(getTransections);

module.exports = router;