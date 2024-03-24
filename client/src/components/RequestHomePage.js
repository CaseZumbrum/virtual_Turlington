import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CheckboxGrid from "./CheckboxGrid";
import { convertDayToInt } from "../help/DataConversions";
import { days, tags } from "../help/ListsAndThings";
import button from "../styles/button.css";
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
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(query),
    };

    fetch("http://localhost:3001/homepage", requestOptions);

    //console.log(query);
  };

  return (
    <div>
            <div className = "button">

    <Link to="/landingpage">
      <img style={{width:"100%"}}src="VT_Banner.png"></img>

      </Link>


      <div className="flex-search">
        <Link to = "/clubsite">
            <img style={{width:"50px"}} src="Up Arrow.png"></img>
        </Link>

        <Link to = "/homeRequest">
            <img style={{width:"50px"}} src="Gold Star.png"></img>
        </Link>

        <Link to = "/">
            <img style={{width:"50px"}} src="Magnifying Glass.png"></img>
        </Link>
      </div>
      </div>

    <div className="searchtab">

      <div className="searchElement">
        <label for="info">Links:</label>
        <input
          className="name"
          type="text"
          name="name"
          onChange={(e) => (query.clubName = e.target.value)}
        />
      </div>

      <button onClick={handleSubmit}>Submit</button>
    </div></div>
  );
};

export default RequestHomePage;
