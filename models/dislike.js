module.exports = function(sequelize, DataTypes) {
    return sequelize.define('dislike', {
        dislikerid: DataTypes.INTEGER,  
        // id of user who disliked it   // recieved from token
        text: DataTypes.STRING,  
        // shade text  // recieve from post
        totaldislikes: DataTypes.INTEGER,   
        // dislike counter
        ownerimg: DataTypes.STRING,  
        // actual owners img
        ownerid: DataTypes.STRING,  
        //actual owners id // recieved from post
        ownerscreenname: DataTypes.STRING, 
        // the actual owners screen name  // recieved from post
    })
}