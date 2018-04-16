module.exports = function(req, res, DataTypes) {
    return sequelize.define('dislke', {
        dislikerid: DataTypes.STRING,  
        // id of user who disliked it
        text: DataTypes.STRING,  
        // shade text 
        totaldislikes: DataTypes.INTEGER,   
        // dislike counter
        ownerimg: DataTypes.STRING,  
        // actual owners img
        ownerid: DataTypes.STRING,  
        //actual owners id
        ownerscreenname: DataTypes.STRING, 
        // the actual owners screen name
    })
}