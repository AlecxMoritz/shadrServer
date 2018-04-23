module.exports = function(req, res, DataTypes) {
    return sequelize.define('somethinggood', {
        ownerid: DataTypes.INTEGER,
        // owners id
        text: DataTypes.STRING,
        // shade text
        ownerscreenname: DataTypes.STRING, 
        // owner screen name
    })
}