module.exports = function (sequelize, DataTypes) {
    var DriverInfo = sequelize.define("DriverInfo", {
        // Giving the Author model a name of type STRING
        driverName: DataTypes.STRING,
        fastestLapTime: DataTypes.STRING,
    },
        {
            timestamps: false

        });

    return DriverInfo;
};
