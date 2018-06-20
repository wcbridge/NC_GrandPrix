// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the posts
  app.get("/api/user/", function (req, res) {
    db.User.findAll({})
      .then(entries => {
        res.json(entries);
      });
  });

  //   // Get route for returning posts of a specific category
  app.get("/api/user/filter/:time", function (req, res) {
    db.User.findAll({
      where: {
        TimeOfRoute: req.params.time
      }
    })
      .then(filterEntries => {
        res.json(filterEntries);
      });
  });

  //   // Get route for retrieving a single post
  app.get("/api/user/:id", function (req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(oneEntry => {
        res.json(oneEntry);
      });
  });

  //   // POST route for saving a new post
  app.post("/api/user/post", function (req, res) {
    console.log("userInput",req.body, req.body.name, req.body.miles, req.body.minutes);
    db.User.create({
      name: req.body.name,
      DistanceOfRoute: req.body.miles,
      TimeOfRoute: req.body.minutes
    })
      .then(userEntry => {
        res.json(userEntry)
      });
  });

  //GET route for drivers

  // app.get("/api/drivers/", function (req, res) {
  //   db.DriverInfo.findAll({}).then(driver => {
  //     res.json(driver)
  //   })

  // })

  
  //GET one driver's fastest lap time
  app.get("/api/drivers/:id", function (req, res) {
    db.DriverInfo.findOne({
      where: { id: req.params.id }
    }).then(oneDriver => {
      res.json(oneDriver.fastestLapTime)
    })
    
  })
};