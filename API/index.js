const mongoose = require("mongoose");
const Club = require(".\\Models\\Club");
const express = require("express");
const {exec} = require('child_process')
const cors = require('cors');
var ObjectID = require('mongodb').ObjectID;
const app = express();
const fs = require('node:fs');

require("dotenv").config();

app.use(express.json())
app.use(cors());

function timeToInt(input){
    let results = input.meetStart.slice(-2, -1) + input.meetStart.slice(-1);
    results = input.meetStart.slice(0, -3) + results;
    results = parseInt(results);
    if(input.PM){
        results += 1200;
    }

    return results
}

function intTimetoTime(temp){
    return Math.floor(temp / 100).toString() + ":" + (temp.toString().slice(-2, -1) + temp.toString().slice(-1));

}

async function getClubs() {
    await mongoose.connect(process.env.MONGO_API_KEY);
    const clubs = await Club.find();

    mongoose.disconnect()
    return clubs;
  }





app.get('/clubs', async(req,res)=>{
    
    let clubs = await getClubs();
    
    let input = JSON.parse(req.query.data);
    if(input.meetStart == ""){
        input.meetStart = "00:00"
    }
    input.meetStart = timeToInt(input);
    
    
    //let command = "python scripts\\main.py \""  + JSON.stringify(input).replaceAll("\"","\\\"") + "\" \"[";
    let command = ""  + JSON.stringify(input).replaceAll("\"","\"") + " [";
    for(let i = 0; i< clubs.length-1; i++){
        clubs[i].meetLength = clubs[i].meetLength[0];
        clubs[i].meetStart = clubs[i].meetStart[0].toString();
        command += JSON.stringify(clubs[i]).replaceAll("\"","\"") + ", ";
    }
    clubs[clubs.length-1].meetLength = clubs[clubs.length-1].meetLength[0];
    clubs[clubs.length-1].meetStart = clubs[clubs.length-1].meetStart[0].toString();
    command += JSON.stringify(clubs[clubs.length-1]).replaceAll("\"","\"")
    command += "]"
    //console.log(command)
    
    

    
    fs.writeFile('scripts/clubs.txt', command, err => {
      if (err) {
        console.error(err);
      }
    });

    //console.log(command);
    exec("python scripts/main.py", (err, output) => {
        if(err){
           // console.log(output);
        }
        
        let sorted_Clubs = JSON.parse(JSON.parse(output.replaceAll("\'","\\\"").replaceAll("True","true").replaceAll("False","false")));
       
        for(let i = 0; i< sorted_Clubs.length; i++){
            if(sorted_Clubs[i].meetStart > 1200){
                sorted_Clubs[i].meetStart -= 1200;
                sorted_Clubs[i].PM = true;
            }
            else{
                sorted_Clubs[i].PM = false;
                
            }
            
            sorted_Clubs[i].meetStart = intTimetoTime(sorted_Clubs[i].meetStart);
            for(let j = 0; j < sorted_Clubs[i].links.length; j++){
                sorted_Clubs[i].links[j] = JSON.parse("{\"Site\":\"" + sorted_Clubs[i].links[j][0] + "\",\"Link\":\"" + sorted_Clubs[i].links[j][1] + "\"}");
            }
           
        }
        
        res.json(sorted_Clubs);
    })
    
   
    
});

app.post('/clubs',async(req,res)=>{
    console.log("got a post");
    await mongoose.connect(process.env.MONGO_API_KEY);
    input = req.body;
    input.meetLength = [input.meetLength];
    input.meetTime = [input.meetTime];
    input.meetStart = timeToInt(input);
    const club = new Club(input);
    await club.save();
    
    res.json({"all":"good"});
    mongoose.disconnect();
});



let homeList = [];
app.get('/homepage',async(req,res)=>{
    let newList = []
    if(homeList.length > 6){
    for (let i = 0; i<6; i++){
        newList.push(homeList[i][0])
    }
}
else{
    for (let i = 0; i<homeList.length; i++){
        newList.push(homeList[i][0])
    }
}
res.json(newList);
});

const wait = ms => new Promise(r => setTimeout(r, ms));

async function frontPageTimer(){
  while (true) {
    if(homeList.length > 6){
    for (let i = 0; i<6; i++){
        homeList[i][1]--;
        if (homeList[i][1] == 0){
            homeList.splice(i, 1);
            i--; 
        }
    }
}
    else{
        for (let i = 0; i<homeList.length; i++){
            homeList[i][1]--;
            if (homeList[i][1] == 0){
                homeList.splice(i, 1);
                i--; 
            }
    }
        console.log(homeList);
    }
    await wait(5000);
  }
}

app.post('/homepage',async(req,res)=>{
    console.log("got a homepage post");
    clubName = req.body.clubName;
    
    let clubs = await getClubs();
    
    for (let i = 0; i<clubs.length; i++){
        
        if (clubs[i].name == clubName){
            homeList.push([clubs[i],10])
        }
    }
    
    res.json({"all":"good"});
});

frontPageTimer();
app.listen(3001);
console.log("Listening on port 3001");