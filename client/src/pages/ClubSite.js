import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ClubInput from "../components/ClubInput";
import RequestHomePage from "../components/RequestHomePage";
import button from "../styles/button.css";


//pages and components
//import Home from "./pages/Home";
//import Navbar from "./components/Navbar";

const ClubSite = () => {
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
        <ClubInput />
        
      
    </div>
  );
};

export default ClubSite;
