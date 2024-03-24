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

      <Link className="bannerHeader" to="/landingpage">
        <img
          className="bannerHeader"
          style={{ width: "100%", height: "100px", position: "fixed" }}
          src="VT_Banner.png"
        ></img>
      </Link>
      <ClubInput />

    </div>
  );
};

export default ClubSite;
