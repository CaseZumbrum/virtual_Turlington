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

      <Link to="/landingpage" className="bannerHeader">
        <img
          style={{ width: "100%", height: "100px", position: "fixed" }}
          src="VT_Banner.png"
          className="bannerHeader"
        ></img>

      </Link>
      <div className="searchtab">
        <div className="flexbox_row navbuttons">
          <Link to="/clubsite" style={{ flex: "1" }}>
            <img
              style={{
                width: "25px",
                height: "25px",
                margin: "0px 0px 0px 33%",
              }}
              src="Up_Arrow.png"
            ></img>
          </Link>
          <Link to="/homeRequest" style={{ flex: "1" }}>
            <img
              style={{
                width: "25px",
                height: "25px",
                margin: "0px 0px 0px 33%",
              }}
              src="Gold_Star.png"
            ></img>
          </Link>
          <Link to="/" style={{ flex: "1" }}>
            <img
              style={{
                width: "25px",
                height: "25px",
                margin: "0px 0px 0px 33%",
              }}
              src="Magnifying_Glass.png"
            ></img>
          </Link>
        </div>
        <div className="searchElement">
          <label for="info">Club Name:</label>
          <input
            className="name"
            type="text"
            name="name"
            onChange={(e) => (query.clubName = e.target.value)}
          />
        </div>


        <button className="submitButton" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>

  );
};

export default RequestHomePage;
