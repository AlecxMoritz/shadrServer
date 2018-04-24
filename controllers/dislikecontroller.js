var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var Dislike = sequelize.import('../models/dislike')
var jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.get('/', function(req, res) {
    res.send("dislike handshake success")
})

router.post('/new', function(req, res) {
    let dislikerid = req.user.id;
    let text = req.body.dislike.text;
    let ownerid = req.body.dislike.ownerid;
    let ownerscreenname = req.body.dislike.ownerscreenname;
    
    Dislike.create({
        dislikerid: dislikerid,
        text: text,
        ownerid: ownerid,
        ownerscreenname: ownerscreenname
    })
    .then(
        function dislikeSuccess(dislike) {
            console.log("Disliked!")
            res.json({
                dislike
            });
        },
        function dislikeError(err) {
            console.log("Not disliked") 
            res.send(500, err.message);
        }
    );
})


router.get('/mine', function(req, res) {
    let userid = req.user.id
    Dislike.findAll({
    where: {
    dislikerid: userid
        }
    })
    .then(
        function getDislikesSuccess(dislikes) {
            res.json(dislikes) 
        },
        function(err) {
            res.send(500, err.message)
        }
    )
})

router.delete('/delete/:id', function(req, res) {
    let dislikerid = req.user.id;
    let dislikeid = req.params.id;
    
    Dislike.destroy({
        where: {
            id: dislikeid,
            dislikerid: dislikerid
        }
    }).then(
        function deleteDislikeSuccess(dislike) {
            res.send("Dislike removed");
            console.log("Dislike removed")
        },
        function deleteDislikeError(err) {
            console.log("Removal failed")
            res.send("Cannot remove this Dislike")
        }
    )
})

module.exports = router;