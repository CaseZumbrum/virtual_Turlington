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


  fetch("http://localhost:3001/homepage").then(
      (response) => {
        response.json().then((clubs_response) => {
          console.log(clubs_response);
          setClubs(clubs_response);
        });
      }
    );

  return (
    <div className="LandingPage">
    <Link to = "/">
      <img src="VT_Banner.png"></img>
      </Link>
      <div className="flex-container">
      {clubs.map((club, index) => (
            <ClubPromotion club={club} />
          ))}
      </div>
    </div>
  );
};

export default LandingPage;
