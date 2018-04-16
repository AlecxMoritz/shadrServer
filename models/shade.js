module.exports = function(req, res, DataTypes) {
    return sequelize.define('shade', {
        ownerid: DataTypes.INTEGER,
        // owners id
        text: DataTypes.STRING,
        // shade test
        totaldislikes: DataTypes.INTEGER, 
        // dislikes counter
        ownerimg: DataTypes.STRING, 
        // owner img
        ownerscreenname: DataTypes.STRING, 
        // owner screen name
    })
}