// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
//require("dotenv").config();
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3030;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

app.get('/', function (req, res) {
  //res.send('hello world');
  res.sendFile(__dirname + '/public/html/index.html');
})

// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });

//API Key
// =============================================================
//var googleKey = require("./controllers/google_maps.js")
// Routes
// =============================================================
//require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// // =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    //db.User.findAll().then(entries => {
      //console.log("ENTRIES", entries[1].dataValues.endLoc);

    //db.User.findOne({where: {startLoc:'here'}}).then(entries => {
      //console.log("ID 2", entries);
    //})
   // });
  //  db.User.create({name: 'A Test. Name', DistanceOfRoute: 'Distance mi', TimeOfRoute: 30}).then(entry => {
  //    console.log("Entered: ", entry)
  //  })
  });
});
