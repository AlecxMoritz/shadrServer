var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var Shade = sequelize.import('../models/shade')
var jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.get('/', function(req, res) {
    res.send("something good handshake success")
})

router.post('/new', function(req, res) {
    let text = req.body.somethinggood.text
    let ownerid = req.user.id;
    res.send("test success")

})



module.exports = router;