module.exports = function (sequelize, DataTypes) {
    var DriverInfo = sequelize.define("DriverInfo", {
        // Giving the Author model a name of type STRING
        driverName: DataTypes.STRING,
        fastestLapTime: DataTypes.STRING,
    },
        {
            timestamps: false

        });
    // Driver.associate = function (models) {
    //     // Associating Author with Posts
    //     // When an Author is deleted, also delete any associated Posts
    //     Driver.hasMany(models.Post, {
    //         onDelete: "cascade"
    //     });
    // };
    return DriverInfo;
};

// dropdown name with id in DB;
// send to GET req;
// make compare req;
// response is fastest lap;

// post user table;

// math function; 
// user results;