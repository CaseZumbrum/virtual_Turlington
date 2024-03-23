import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllTheTags from "./AllTheTags";
//pages and components
//import Home from "./pages/Home";
//import Navbar from "./components/Navbar";

let tags = [
  "Social",
  "Fun",
  "Professional Development",
  "STEM",
  "Arts",
  "Performance",
  "Sport",
  "Service",
  "Cultural",
  "Religious",
  "Engineering",
  "Business",
  "Environmental",
];

const SearchTab = () => {
  return (
    <div className="searchtab">
      <form action="">
        <div className="searchElement">
          <label for="name">Organization Name:</label>
          <input type="text" name="name" />
        </div>
        <div className="searchElement">
          <AllTheTags tags={tags}></AllTheTags>
        </div>

        <div className="searchElement timeSearch">
          <div className="flexbox_row">
            <label for="time">Time:</label>
            <input type="text" name="time" />
            <select id="time">
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
        </div>
        <div className="searchElement">
          <label for="maxTime">Max Duration: </label>
          <input type="text" id="name" name="maxTime" />
        </div>
        <div className="searchElement">
          <div className="flexbox_row">
            <label for="meetingDay">Day: </label>
            <select id="meetingDay">
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SearchTab;
