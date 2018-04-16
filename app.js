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

// middleware
app.use(bodyParser.json())
sequelize.sync();
app.use(require('./middleware/headers'))

//{Force: true}

// unauth'd routes
app.use('/test', test)
app.use('/user', user)

// will move later
app.use('/shade', shade)                

// validation
// need a validate sesision

// auth'd routes
// put shades here after tests            **

// listener
app.listen(8000, function() {
    console.log("Spinning on 8000")
});