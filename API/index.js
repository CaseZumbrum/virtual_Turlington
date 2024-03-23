const mongoose = require("mongoose");
const Club = require(".\\Models\\Club");
const express = require("express");
const {exec} = require('child_process')
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
    let clubs = await getClubs();
    let command = "python main.py "  + req.query.data + " ";
    for(let i = 0; i< clubs.length; i++){
        command += JSON.stringify(clubs[i]) + " ";
    }

    let sorted_Clubs;
    exec(command, (err, output) => {
        sorted_Clubs = JSON.parse(output);
    })

    res.json(sorted_Clubs);
    
});
app.listen(3001);
console.log("WE HERE BITCHES");