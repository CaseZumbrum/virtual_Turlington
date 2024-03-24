import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchTab from "../components/SearchTab";
import ClubCard from "../components/ClubCard";

//pages and components
//import Home from "./pages/Home";
//import Navbar from "./components/Navbar";

const poggersClub = {
  name: "Poggers Club",
  info: "We just LOVE to LOG. And to POG! But NOT to dog...",
  meetStart: "12",
  PM: true,
  meetLength: "60", //of size 1...
  day: [0, 4, 5],
  freq: 1,
  links: ["honda.com", "google.com", "yahoo.com"],
  tags: ["Nationalism", "Extremism", "Zionism", "Egoistic Altruism"],
  app: true,
  interactions: 1000,
};

const App = () => {
  return (
    <div className="App">
      <div className="flexbox_row">
        <SearchTab />
        <div className="clubCards">
          <ClubCard club={poggersClub} />
          <ClubCard club={poggersClub} />
          <ClubCard club={poggersClub} />
          <ClubCard club={poggersClub} />
        </div>
      </div>
    </div>
  );
};

export default App;
