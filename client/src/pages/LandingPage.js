import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchTab from "../components/SearchTab";
import ClubPromotion from "../components/ClubPromotion";
import { testClub } from "../help/ListsAndThings";
import { testClub1 } from "../help/ListsAndThings";
import { testClub2 } from "../help/ListsAndThings";
import { testClub3 } from "../help/ListsAndThings";
import { testClub4 } from "../help/ListsAndThings";
import { testClub5 } from "../help/ListsAndThings";
import navigator from "../index.css";
import searchBox from "../index.css";
import button from "../styles/button.css";
import { useState } from "react";

const LandingPage = () => {
  const [clubs, setClubs] = useState([]);

  return (
    <div className="LandingPage">
    <Link to = "/landingpage">
      <img style={{width:"100%"}} src="VT_Banner.png"></img>
      </Link>

      <div className = "button">

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

      

      <div className="flex-container">
            <ClubPromotion club={testClub}/>
            <ClubPromotion club={testClub1}/>
            <ClubPromotion club={testClub2}/>
            <ClubPromotion club={testClub3}/>
            <ClubPromotion club={testClub4}/>
            <ClubPromotion club={testClub5}/>
      </div>
    </div>
  );
};

export default LandingPage;
