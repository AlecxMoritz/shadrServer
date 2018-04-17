require('dotenv').config();

var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var User = sequelize.import('../models/user')
var jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// get user info
/////////////////
//

router.get('/me', function(req, res) {
    let userid = req.user.id

    User.findOne({
        where: {
            id: userid
        }
    })
    .then(
        function meSuccess(user){
            console.log("Found user")
            res.json({
                user
            })
        },
        function meError(err) {
            console.log("An error occured")
            res.send(500, err.message)
        }
    )
})

// update user info
////////////////////
//

module.exports = router;