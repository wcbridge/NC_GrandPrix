// require("dotenv").config();
// var keys = require("../keys/google_api.js");

// console.log("folder",keys)

// var google_key = keys.google.key;

// console.log("key", google_key);

// //Test Req
// //===============================================
// var googleMapsClient = require('@google/maps').createClient({
//     key:google_key,
//     Promise: Promise
// });

// googleMapsClient.geocode({ address: '1600 Amphitheatre Parkway, Mountain View, CA' }).asPromise()
//     .then((response) => {
//         console.log(response.json.results);
//     })
//     .catch((err) => {
//         console.log(err);
//     });