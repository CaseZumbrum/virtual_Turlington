import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchTab from "../components/SearchTab";
import ClubPromotion from "../components/ClubPromotion";
import { testClub } from "../help/ListsAndThings";
import { testClub1 } from "../help/ListsAndThings";
import { testClub2 } from "../help/ListsAndThings";
import { testClub3 } from "../help/ListsAndThings";
import { testClub4 } from "../help/ListsAndThings";
import { testClub5 } from "../help/ListsAndThings";
import { useState } from "react";

const LandingPage = () => {
  const [clubs, setClubs] = useState([]);

  return (
    <div className="LandingPage">
    <Link to = "/">
      <img src="VT_Banner.png"></img>
      </Link>
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
