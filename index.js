require('dotenv').config();

const express = require('express');
const connectDB = require('./src/config/db');


const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.listen(port, () => {
  console.log(`Reconciliation Engine running on port ${port}`);
});

module.exports = app; 