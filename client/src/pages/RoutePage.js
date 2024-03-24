import { Route, Routes } from "react-router-dom";
import App from "./App";
import ClubSite from "./ClubSite";

function RoutePage() {
  return (
    <Routes>
      <Route path="/" element={<App />}/>
        
        <Route path="/clubsite" element={<ClubSite />} />
      
    </Routes>
  );
}

export default RoutePage;
