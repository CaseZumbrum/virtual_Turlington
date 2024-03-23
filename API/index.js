const mongoose = require("mongoose");
const Club = require(".\\Models\\Club");
const express = require("express");
const {exec} = require('child_process')
const app = express();

require("dotenv").config();

app.use(express.json())


function timeToInt(input){

    let results = input.meetStart.slice(-2, -1) + temp.slice(-1);
    results = input.meetStart.slice(0, -3) + results;
    results = parseInt(results);
    if(input.PM){
        results += 1200;
    }

    return results
}

function intTimetoTime(temp){
    return Math.floor(temp / 100).toString() + ":" + (temp % 100).toString();

}

async function getClubs() {
    mongoose.connect(process.env.MONGO_API_KEY);
    const clubs = await Club.find();

    mongoose.disconnect()
    return clubs;
  }





app.get('/clubs', async(req,res)=>{
    let clubs = await getClubs();
    let input = JSON.loads(req.query.data);

    input.meetStart = timeToInt(input);

    let command = "python main.py "  + JSON.stringify(input) + " ";
    for(let i = 0; i< clubs.length; i++){
        command += JSON.stringify(clubs[i]) + " ";
    }

    let sorted_Clubs;
    exec(command, (err, output) => {
        if(err){
            console.log(output);
        }
        sorted_Clubs = JSON.parse(output);
    })

    for(let i = 0; i< sorted_Clubs.length; i++){
        if(sorted_Clubs[i].meetStart > 1200){
            sorted_Clubs[i].meetStart -= 1200;
            sorted_Clubs[i].PM = true;
        }
        else{
            sorted_Clubs[i].PM = false;
        }
        sorted_Clubs[i].meetStart = intTimetoTime(sorted_Clubs[i].meetStart);
        
    }

    res.json(sorted_Clubs);
    
});
app.listen(3001);
console.log("WE HERE BITCHES");