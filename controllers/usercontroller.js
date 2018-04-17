require('dotenv').config();

var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var User = sequelize.import('../models/user')
var jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// keep this commented out unless you need to drop your table
// User.sync({Force: true})


// handshake
////////////
//

router.get('/', function(req, res) {
    res.send("User handshake successful")
})

// sign up
//////////
//

router.post('/signup', function(req, res) {
    // needs to recieve user info and create a new user
    var name = req.body.user.name
    var email = req.body.user.email
    var screenName = req.body.user.screenname
    var password = req.body.user.password
    // needs to create new user
    User.create({
            name: name,
            screenname: screenName,
            email: email,            
            passwordhash: bcrypt.hashSync(password, 10) 
        })
        .then( 
            function signupSuccess(user){
            var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24})  /// left off here
                res.json({
                    user: user,
                    message: "User created",
                    sessionToken: token
                })
            },
            function(req, res) {
                res.status(500, err.message)
            }
        )
},
function(err){
    res.send("An error has occured. No account made")
})

// log in
/////////
//

router.post('/login', function(req, res) {
    User.findOne( {where: { screenname: req.body.user.screenname } } ).then(
        function(user) {
            if(user) {
                bcrypt.compare(req.body.user.password, user.passwordhash, function(err, matches) {
                    if(matches) {
                        console.log(`Password matched at login for user: ${user.screenname}`)
                        var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
                        res.json({
                            user:user,
                            message: "Successfuly logged in",
                            sessionToken: token
                        });
                    } else {
                        res.status(400).send({ error: "Passwords did not match"});
                    }
                })
            } else {
                res.status(400).send({ error: "User does not exist"});
            }
        },
        function(err) {
            res.status(500).send({ error: "Fetch Failed"})
        }
    )
})

// update
//////////
//

router.put('/update', function(res, req) {
    // needs to be able to update any user content
    res.send("Update user point test successful")
})

// update picture
//////////////////
//

router.put('/updatepic', function(req, res) {
    // needs to receive a picture and update the image url for the user
    res.send("Update profile picture point test sucessful")
})

// delete
//////////
//

router.delete('/delete', function(res, req) {
    // deletes a user row completely
    res.send('Delete user point test successful')
})

// get user info
////////////////
// 

router.get('/me', function(res, req) {
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

module.exports = router;