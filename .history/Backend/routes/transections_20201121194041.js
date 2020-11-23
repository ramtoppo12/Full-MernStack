const express = require("express");
const {getTransections} = require('../controller/transections');

const router = express.Router();


router.route('/').get(getTransections);

module.exports = router;