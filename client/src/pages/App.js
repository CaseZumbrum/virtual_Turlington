import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchTab from "../components/SearchTab";

//pages and components
//import Home from "./pages/Home";
//import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="App">
      <div className="flexbox_row">
        <SearchTab />
        <div className="clubCards">THE REST OF THE APP LOL</div>
      </div>
    </div>
  );
};

export default App;
