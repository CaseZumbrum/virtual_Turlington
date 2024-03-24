import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchTab from "../components/SearchTab";
import ClubPromotion from "../components/ClubPromotion";
import { testClub } from "../help/ListsAndThings";
import { useState } from "react";

const App = () => {
  const [clubs, setClubs] = useState([]);

  return (
    <div className="App">
      <Link className="bannerHeader" to="/landingpage">
        <img
          style={{ width: "100%", height: "100px", position: "fixed" }}
          src="VT_Banner.png"
          className="bannerHeader"
        ></img>
      </Link>
      <div className="flexbox_row">
        <SearchTab setClubs={setClubs} />
        <div className="clubCards">
          {clubs.map((club, index) => (
            <ClubPromotion club={club} isPromotion={"false"} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
