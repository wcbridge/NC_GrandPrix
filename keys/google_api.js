console.log("google api loaded");
require("dotenv").config();

exports.google = {
    key: process.env.GOOGLE_MAPS_API_KEY
}