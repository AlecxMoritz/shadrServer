module.exports = function(sequelize, DataTypes) {
    return sequelize.define('user', {
        
        name: DataTypes.STRING,
        // name
        screenname: DataTypes.STRING,
        // user screen name displayed with shades
        email: DataTypes.STRING,
        // user email used for validation
        passwordhash: DataTypes.STRING,
        // password to be encrypted and salted
        img: DataTypes.BLOB,
        // user img
        bio: DataTypes.STRING,
        // user bio
        totalshades: DataTypes.INTEGER,
        // total shades posted
        dislikesgiven: DataTypes.INTEGER,
        // total dislikes given by a user
        usertype: DataTypes.STRING,
        // user, admin, or mod
        usersymbol: DataTypes.STRING
        // symbol in front of user's shades
    })
}