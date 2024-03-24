const mongoose = require("mongoose");
const Club = require(".\\Models\\Club");
require("dotenv").config();

async function getClubs() {
  mongoose.connect(process.env.MONGO_API_KEY);
  const clubs = await Club.find();
  for (let i = 0; i < clubs.length; i++) {
    console.log(clubs[i]);
  }
  mongoose.disconnect();
}

getClubs();
