module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: DataTypes.STRING,
        DistanceOfRoute: {
            type: DataTypes.STRING
        },
        TimeOfRoute: {
            type: DataTypes.INTEGER,
            
        },
      
    })
    return User;
}

