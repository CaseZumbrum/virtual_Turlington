import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CheckboxGrid from "./CheckboxGrid";
import { convertDayToInt } from "../help/DataConversions";
import { days, tags } from "../help/ListsAndThings";
import { useState, useEffect } from "react";

//pages and components
//import Home from "./pages/Home";
//import Navbar from "./components/Navbar";






let query = {
  clubName: "",
};

const RequestHomePage = ({}) => {

  const handleSubmit = (e) => {

    console.log(query);
    


    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(query)
  };

  fetch('http://localhost:3001/homepage', requestOptions)
    
    //console.log(query);
  };

  

  return (
    <div className="searchtab">
    <Link to="/">
      <img src="VT_Banner.png"></img>
      </Link>

      <div className="searchElement">
          <label for="info">Links:</label>
          <input className="name"
            type="text"
            name="name"
            onChange={(e) => (query.clubName = e.target.value)}
          />
        </div>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default RequestHomePage;




