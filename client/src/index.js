import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/clubcard.css"
import "./styles/searchtab.css"
import "./styles/index.css"
import SearchTab from "./components/SearchTab";
import { BrowserRouter } from "react-router-dom";
import RoutePage from "./pages/RoutePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <RoutePage/>
    </BrowserRouter>
    
  </React.StrictMode>
);
