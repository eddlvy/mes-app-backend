const dotenv = require('dotenv').config({ path: "./config.env" });
const mongoose = require('mongoose');

const dbname = process.env.DB_NAME;
const dbString = process.env.DB_STRING;

const options = {
  dbName: dbname,
  autoIndex: true
}


const connectToDB = async (req, res) => {
  try {
    await mongoose.connect(dbString, options);
    console.log("Connected To DB")

  } catch (error) {
    console.log(`Error Connecting , error: ${error}`)
  }
}

module.exports = connectToDB;