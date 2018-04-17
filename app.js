// imports


// do not touch this line
// {force: true}



// vars
const express =require('express');
var app = express();
var sequelize = require('./db');
var bodyParser = require('body-parser');

// controllers
const test = require('./controllers/testcontroller');
const user = require('./controllers/usercontroller')
const shade = require('./controllers/shadecontroller')
const advuser = require('./controllers/advancedusercontroller')

// middleware
app.use(bodyParser.json())
sequelize.sync();
app.use(require('./middleware/headers'))

//{Force: true}

// unauth'd routes
app.use('/test', test)
app.use('/user', user)

// will move later

// validation
app.use(require('./middleware/validate-session'))

// auth'd routes
app.use('/shade', shade)
app.use('/advuser', advuser)            

// listener
app.listen(8000, function() {
    console.log("Spinning on 8000")
});