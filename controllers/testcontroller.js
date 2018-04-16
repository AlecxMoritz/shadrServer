var express = require('express');
var router = express.Router();
var sequelize = require('../db');

router.get('/', function(req, res) {
    res.send("Handshake Successful")
})

module.exports = router;