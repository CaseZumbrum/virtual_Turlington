import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ClubInput from "../components/ClubInput";
import RequestHomePage from "../components/RequestHomePage";

//pages and components
//import Home from "./pages/Home";
//import Navbar from "./components/Navbar";

const ClubSite = () => {
  return (
    <div>
      <Link to="/">
      <img src="VT_Banner.png"></img>
      </Link>
        <ClubInput />
        
      
    </div>
  );
};

export default ClubSite;
