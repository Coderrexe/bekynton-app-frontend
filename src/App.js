import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CreateRoutine from "./components/CreateRoutine";
import RateFood from "./components/RateFood";
import LoginHeader from "./components/LoginHeader";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LeadershipTeam from "./components/LeadershipTeam";
import FoodSelection from "./components/FoodSelection";

import Sustainability from "./components/Sustainability";
import FoodInformation from "./components/FoodInformation";
import PlantBasedRecipes from "./components/PlantBasedRecipes";

function App() {
  const [isNavbarMinimized, setIsNavbarMinimized] = useState(true);

  return (
    <div>
      <Router>
        <div>
          <LoginHeader />
          <Navbar
            isNavbarMinimized={isNavbarMinimized}
            setIsNavbarMinimized={setIsNavbarMinimized}
          />
          <Routes>
            <Route
              path="/"
              element={<Home isMinimized={isNavbarMinimized} />}
            />
            <Route path="/create-routine" Component={FoodSelection} />
            <Route path="/sustainability" Component={Sustainability} />
            <Route path="/rate-food" Component={RateFood} />
            <Route path="/leadership-team" Component={LeadershipTeam} />
            <Route path="/food-information" Component={FoodInformation} />
            <Route path="/plant-based-recipes" Component={PlantBasedRecipes} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
