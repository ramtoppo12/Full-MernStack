const express = require("express");

const router = express.Router();
const {getTransections} = require('../controller/transections');

router.route('/').get(getTransections);

module.exports = router;