const { Mongoose } = require("mongoose");

module.exports = (mongoose) => {
  const weather = mongoose.model(
    "weather",
    mongoose.Schema(
      {
        Date: Date,
        degrees: String,
        city: String,
        longitude: Number,
        latitude: Number,
        declination: Number,
      },
      { timestamps: true }
    )
  );
  return weather;
};
