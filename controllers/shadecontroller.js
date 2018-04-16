var express = require('express');
var router = express.Router();
var sequelize = ('../db');

// handshake
////////////
//

router.get('/', function(req, res) {
    res.send("Shade handshake successful")
})

// post
///////
//

router.post('/new', function(req, res) {
    res.send("New shade point test succesful")
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

// add :id later

router.delete('/delete', function(req, res) {
    res.send("Delete sahde point test successful")
})

module.exports = router;