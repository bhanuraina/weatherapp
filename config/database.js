// config/database.js
const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  PORT: process.env.PORT,
  url: process.env.DB_URL,
  api_key: process.env.API_KEY,
  api_url: process.env.API_URL,
};
