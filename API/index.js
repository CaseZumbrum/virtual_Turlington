const mongoose = require("mongoose");
const Club = require(".\\Models\\Club");
const express = require("express");
const app = express();

require("dotenv").config();

app.use(express.json())


async function getClubs() {
    mongoose.connect(process.env.MONGO_API_KEY);
    const clubs = await Club.find();

    mongoose.disconnect()
    return clubs;
  }





app.get('/clubs', async(req,res)=>{
    res.json(await getClubs());
    console.log(req.query)
});
app.listen(3001);
console.log("WE HERE BITCHES");