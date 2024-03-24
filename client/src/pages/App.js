import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchTab from "../components/SearchTab";
import ClubCard from "../components/ClubCard";
import { testClub } from "../help/ListsAndThings";
import { useState } from "react";

const App = () => {
  const [clubs, setClubs] = useState([]);

  return (
    <div className="App">
      <div className="Navbar">Hello</div>
      <div className="flexbox_row">
        <SearchTab setClubs={setClubs} />
        <div className="clubCards">
          {clubs.map((club, index) => (
            <ClubCard club={club} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
