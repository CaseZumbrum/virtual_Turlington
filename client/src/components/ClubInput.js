import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckboxGrid from "./CheckboxGrid";
import { convertDayToInt } from "../help/DataConversions";
import { days, tags } from "../help/ListsAndThings";
import { useState, useEffect } from "react";

//pages and components
//import Home from "./pages/Home";
//import Navbar from "./components/Navbar";


function splitStringByComma(inputString) {
  // Split the string by commas
  console.log(inputString);
  const splitArray = inputString.split(',');
  
  // Initialize an empty list to hold pairs
  const pairs = [];

  // Iterate over the split array by incrementing index by 2
  for (let i = 0; i < splitArray.length; i += 2) {
      // Add a [Link, Type] pair to pairs list
      if (i + 1 < splitArray.length) {
          pairs.push([splitArray[i].trim(), splitArray[i + 1].trim()]);
      }
  }
  
  return pairs;
}


let query = {
  clubName: "",
  meetStart: "",
  info: "",
  PM: false,
  meetLength: 0,
  day: [],
  tags: [],
  app: false,
  links:""
};

const ClubInput = ({}) => {
  const [tagQuery, setTagQuery] = useState([]);
  const [dayQuery, setDayQuery] = useState([]);
  const [appQuery, setAppQuery] = useState(false);
  const handleSubmit = (e) => {
    query.day = dayQuery;
    query.tags = tagQuery;
    query.app = appQuery;
    query.links = splitStringByComma(query.links);
    console.log(query);
    


    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(query)
  };

  fetch('http://localhost:3001/clubs', requestOptions)
    
    //console.log(query);
  };

  const handleGridCheckboxClick = (e, setFunction) => {
    const isClicked = e.target.checked;
    if (isClicked) {
      setFunction([...tagQuery, e.target.id]);
    } else {
      setFunction(tagQuery.filter((item) => item !== e.target.id));
    }
  };

  return (
    <div className="searchtab">
      <form action="">
        <div className="searchElement">
          <label for="name">Organization Name:</label>
          <input
            type="text"
            name="name"
            onChange={(e) => (query.clubName = e.target.value)}
          />
        </div>

        <div className="searchElement">
          <label for="info">Organization Info:</label>
          <input className="info"
            type="text"
            name="info"
            onChange={(e) => (query.info = e.target.value)}
          />
        </div>

        <div className="searchElement">
          <CheckboxGrid
            optionList={tags}
            onChange={(e) => handleGridCheckboxClick(e, setTagQuery)}
          ></CheckboxGrid>
        </div>

        <div className="searchElement timeSearch">
          <div className="flexbox_row">
            <label for="time">Time:</label>
            <input
              type="text"
              name="time"
              onChange={(e) => (query.meetStart = e.target.value)}
            />
            <select id="time">
              <option value="AM">AM</option>
              <option value="PM">PM</option>
              onChange=
              {(e) =>
                e.target.value === "PM" ? (query.pm = true) : (query.pm = false)
              }
            </select>
          </div>
        </div>
        <div className="searchElement">
          <label for="maxTime">Max Duration: </label>
          <input
            type="text"
            id="name"
            name="maxTime"
            onChange={(e) => (query.meetLength = parseInt(e.target.value))}
          />
        </div>
        <div className="searchElement">
          <CheckboxGrid
            optionList={days}
            onChange={(e) => handleGridCheckboxClick(e, setDayQuery)}
          ></CheckboxGrid>
        </div>
        <div className="searchElement">
          <label for="app">Requires Application?</label>
          <input
            id="app"
            type="checkbox"
            onChange={(e) => {
              setAppQuery(e.target.checked);
            }}
          />
        </div>
      </form>

      <div className="searchElement">
          <label for="info">Links:</label>
          <input className="info"
            type="text"
            name="text"
            onChange={(e) => (query.links = e.target.value)}
          />
        </div>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ClubInput;





const inputString = "Instagram, http://insta, Twitter, http://twitter";
const result = splitStringByComma(inputString);

