module.exports = (app) => {
  const weathers = require("../controller/controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", weathers.create);

  // Retrieve all Tutorials
  router.get("/", weathers.findAllPublished);

  // Retrieve all published Tutorials

  app.use("/api/weather", router);
};
