module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: DataTypes.STRING,
        DistanceOfRoute: {
            type: DataTypes.STRING
        },
        TimeOfRoute: {
            type: DataTypes.INTEGER,

        }
    },
        {
            timestamps:false
    })
    //Association to Driver Model
    // User.associate = function (models) {
    //     User.belongsTo(models.DriverInfo)
    // }
    return User;
}

