import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchTab from "../components/SearchTab";

//pages and components
//import Home from "./pages/Home";
//import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="App">
      <div className="main_container">
        <SearchTab />
        <div className="clubCards">Hi</div>
      </div>
    </div>
  );
};

export default App;
