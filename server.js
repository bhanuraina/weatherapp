"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

const apiKey = "13afb31088fddda8c16ce9f2914774b4";

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

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
