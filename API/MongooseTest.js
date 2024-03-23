const mongoose = require("mongoose");
const Club = require(".\\Models\\Club");
require("dotenv").config();


async function getClubs() {
    mongoose.connect(process.env.MONGO_API_KEY);
    const clubs = await Club.find();
    console.log(clubs[1].tags);
    mongoose.disconnect()
    // Expected output: "resolved"
  }

getClubs();