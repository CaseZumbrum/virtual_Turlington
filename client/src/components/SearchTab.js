import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckboxGrid from "./CheckboxGrid";
import { convertDayToInt } from "../help/DataConversions";
import { days, tags } from "../help/ListsAndThings";
import { useState, useEffect } from "react";
//pages and components
//import Home from "./pages/Home";
//import Navbar from "./components/Navbar";

let query = {
  clubName: "",
  meetStart: "",
  PM: false,
  meetLength: 0,
  day: [],
  tags: [],
  app: false,
};

const SearchTab = ({ setClubs }) => {
  const [tagQuery, setTagQuery] = useState([]);
  const [dayQuery, setDayQuery] = useState([]);
  const [appQuery, setAppQuery] = useState(false);
  const handleSubmit = (e) => {
    query.day = dayQuery;
    query.tags = tagQuery;
    query.app = appQuery;

    fetch("http://localhost:3001/clubs?data=" + JSON.stringify(query)).then(
      (response) => {
        response.json().then((clubs_response) => {
          console.log(clubs_response);
          setClubs(clubs_response);
        });
      }
    );
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

  const handleClear = async (e) => {
    query = {
      clubName: "",
      meetStart: "",
      PM: false,
      meetLength: 0,
      day: [],
      tags: [],
      app: false,
    };

    const checkboxes = document.querySelectorAll(
      '.searchtab input[type="checkbox"]'
    );
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });

    const textboxes = document.querySelectorAll(
      '.searchtab input[type="text"]'
    );
    textboxes.forEach((textbox) => {
      textbox.value = "";
    });
  };

  return (
    <div className="searchtab">
      <h4>Organization Search</h4>
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
          <div className="flexbox_row">
            <label for="maxTime">Max Duration: </label>
            <input
              type="text"
              id="maxDuration"
              name="maxTime"
              onChange={(e) => (query.meetLength = parseInt(e.target.value))}
            />
          </div>
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
      <div className="flexbox_row buttons">
        <button className="submitButton" onClick={handleSubmit}>
          Submit
        </button>
        <button className="clearButton" onClick={handleClear}>
          Clear All
        </button>
      </div>
    </div>
  );
};

export default SearchTab;
