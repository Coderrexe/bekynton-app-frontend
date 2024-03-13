import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import RateFood from "./components/RateFood";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FoodInformation from "./components/FoodInformation";
import "./App.css";

function App() {
  return (
    <Router>
      <div class="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rate-food" element={<RateFood />} />
          <Route path="/food-information" element={<FoodInformation />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
