import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import LeadershipTeam from "./LeadershipTeam";
import Sustainability from "./Sustainability";

const Navbar = ({ isNavbarMinimized, setIsNavbarMinimized }) => {
  const [isMinimized, setIsMinimized] = useState(isNavbarMinimized);

  const toggleNavbar = () => {
    setIsMinimized(!isMinimized);
    setIsNavbarMinimized(!isNavbarMinimized);
  };

  return (
    <nav className={`navbar ${isMinimized ? "minimized" : ""}`}>
      <div className={`navbar-top ${isMinimized ? "minimized-top" : ""}`}>
        {isMinimized ? (
          <i className="fas fa-university"></i>
        ) : (
          <a
            href="https://www.etoncollege.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-university"></i> ETON COLLEGE
          </a>
        )}
      </div>
      {!isMinimized && (
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/">
              <i className="fas fa-home"></i> Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/create-routine">
              <i className="fas fa-utensils"></i> Create Your Ideal Food Routine
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/rate-food">
              <i className="fas fa-star"></i> Meal Feedback
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/sustainability">
              <i className="fas fa-star"></i> Sustainability
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/leadership-team">
              <i className="fas fa-star"></i> The Leadership Team
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/food-information">
              <i className="fas fa-star"></i> Know What You Eat
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/plant-based-recipes">
              <i className="fas fa-star"></i> Alternatives
            </Link>
          </li>
        </ul>
      )}
      <button className="toggle-button" onClick={toggleNavbar}>
        {isMinimized ? (
          <i className="fas fa-arrow-right"></i>
        ) : (
          <i className="fas fa-arrow-left"></i>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
