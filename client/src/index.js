import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SearchTab from "./components/SearchTab";
import App from "./pages/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
