const db = require("../model");
const Weather = db.weathers;
exports.create = (req, res) => {
  // Validate request
  if (!req.body.degrees) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Weather
  const weather = new Weather({
    degrees: req.body.degrees,
    city: req.body.city,
  });

  // Save Weather in the database
  weather
    .save(weather)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

exports.findAllPublished = (req, res) => {
  weather
    .find({ timestamps: true })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
