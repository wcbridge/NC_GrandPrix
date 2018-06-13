module.exports = function (sequelize, DataTypes) {
    var Driver = sequelize.define("driver", {
        // Giving the Author model a name of type STRING
        driverId : DataTypes.STRING,
        driverRef: DataTypes.STRING
    });
    // Driver.associate = function (models) {
    //     // Associating Author with Posts
    //     // When an Author is deleted, also delete any associated Posts
    //     Driver.hasMany(models.Post, {
    //         onDelete: "cascade"
    //     });
    // };
    return Driver;
};
