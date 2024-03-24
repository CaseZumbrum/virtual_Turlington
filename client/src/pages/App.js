import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchTab from "../components/SearchTab";
import ClubPromotion from "../components/ClubPromotion";
import { testClub } from "../help/ListsAndThings";
import { useState } from "react";
import button from "../styles/button.css";


const App = () => {
  const [clubs, setClubs] = useState([]);

  return (
    <div className="App">
      
      <Link to = "/landingpage">
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
      
      
        <SearchTab setClubs={setClubs} />
        <div className="flexb-row">
        <div className="clubPromotion">
          {clubs.map((club, index) => (
            <ClubPromotion club={club} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
