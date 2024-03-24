import { Route, Routes } from "react-router-dom";
import App from "./App";
import ClubSite from "./ClubSite";
import LandingPage from "./LandingPage";
import RequestHomePage from "../components/RequestHomePage";

function RoutePage() {
  return (
    <Routes>

      <Route path="/" element={<App />}></Route>
      <Route path="/clubsite" element={<ClubSite />} />
      <Route path="/landingpage" element={<LandingPage />} />
      <Route path="/homeRequest" element={<RequestHomePage />} />
    </Routes>
  );
}

export default RoutePage;
