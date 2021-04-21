"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
var mongoose = require("mongoose");
const apiKey = "13afb31088fddda8c16ce9f2914774b4";
var configDB = require("./config/database.js");

const cors = require("cors");

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// configuration ===============================================================

app.use(express.static("public"));
app.use(bodyParser.json());
//app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.json({ weather: null, error: null });
});

const geomagnetism = require("geomagnetism");

// information for "right now"
const info = geomagnetism.model().point([44.53461, -109.05572]);
console.log("declination:", info.decl);

// use a specific date
//const model = geomagnetism.model(new Date("12/25/2017"));
//const innfo = model.point([44.53461, -109.05572]);
//console.log("declination:", innfo.decl);

app.post("/", function (req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

  request(url, function (err, response, body) {
    console.log(response);
    if (err) {
      res.json({ weather: null, error: "Error, please try again" });
    } else {
      let weather = JSON.parse(body);
      if (weather.main == undefined) {
        res.json({
          weather: null,
          error: "Error, please try again",
        });
      } else {
        let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        res.json({ weather: weatherText, error: null });
      }
    }
  });
});

//Connect to Database Weather
mongoose.connect(configDB.url, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});
require("./route/routes")(app);

app.listen(3000, function () {
  console.log("Weather App listening on port 3000!");
});
