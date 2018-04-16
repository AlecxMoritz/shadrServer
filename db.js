const Sequelize = require('sequelize');

const sequelize = new Sequelize('theShadiest', 'postgres', 'ghastb0i', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function() {
        console.log("Connected to Database")
    },
    function(err) {
        console.log(err)
    }
)

module.exports = sequelize;