import { Route, Routes } from "react-router-dom";
import App from "./App";
import ClubSite from "./ClubSite";
import LandingPage from "./LandingPage";

function RoutePage() {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/clubsite" element={<ClubSite />} />
      <Route path="/landingpage" element={<LandingPage />} />
      
    </Routes>
  );
}

export default RoutePage;
