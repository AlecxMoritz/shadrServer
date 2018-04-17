var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var Shade = sequelize.import('../models/shade')
var jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// sequelize.import is not a a function??

// handshake
////////////
//

router.get('/', function(req, res) {
    res.send("Shade handshake successful")
})

// post a shade
////////////////
//

router.post('/new', function(req, res) {
    let shadeText = req.body.shade.text
    let shadeOwnSN = req.user.usersymbol + req.user.screenname
    let shadeOwner = req.user.id;
    console.log("shade owner: " + shadeOwner)
    Shade.create({
        // id
        // total dislikes // auto gen'd
        ownerid: shadeOwner,
        text: shadeText,
        totaldislikes: 0,
        ownerscreenname: shadeOwnSN
    })
    .then(
        function createShadeSuccess(shade) {
            console.log("New shade")
            res.json({
                shade
            });
        }, 
    function createShadeError(err) {
        console.log("New log not added")
        res.send(500, err.message);
        }
    );
    
})


// get all shades posted with limits
/////////////////////////////////////
//

router.get('/all', function(req, res) {
    Shade.findAll({ 
        limit: 50,
        order: [
            ['id', 'DESC']
        ]
    })
    .then(
        function getShadesSuccess(shades) {
            res.json(shades);
        },
        function getShadesError(err){
            res.send(500, err.message);
        }
    )
})

// update
/////////
//

// add :id later

router.put('/update/', function(req, res) {
    res.send("Update shade point test successful")
})

// delete
/////////
// 

router.delete('/delete/:id', function(req, res) {
    var shadeOwn = req.user.id;
    var shadeNum = req.params.id;
    console.log("Owner number: " + shadeOwn + " will be delete shade number: " + shadeNum);

    Shade.destroy({
        where: { 
            id: shadeNum,
            ownerid: shadeOwn
        }
    }).then(
        function deleteShadeSuccess(shade) {
            res.send("Shade deleted")
        },
        function deleteShadeError(err) {
            res.send(" You cannot delete this shade")
        }
    )
})

module.exports = router;