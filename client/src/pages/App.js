import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages and components
//import Home from "./pages/Home";
//import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <h1>Hello World!</h1>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
