require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  defaultConfig: {
    TIMESTAMP_TOLERANCE_SECONDS: parseInt(process.env.TIMESTAMP_TOLERANCE_SECONDS, 10) || 300,
    QUANTITY_TOLERANCE_PCT: parseFloat(process.env.QUANTITY_TOLERANCE_PCT) || 0.01,
  }
};
