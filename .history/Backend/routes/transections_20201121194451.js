const express = require("express");

const router = express.Router();
const {getTransections} = require('../controller/transections');

const router = express.Router();


router.route('/').get(getTransections);

module.exports = router;