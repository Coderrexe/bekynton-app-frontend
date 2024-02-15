import React, { useState, useEffect } from "react";
import "./RateFood.css";
import axios from "axios";
import moment from "moment";

const apiBaseUrl = "http://localhost:8080/api/ratings";

const RateFood = () => {
  const [currentDate, setCurrentDate] = useState(moment().format("YYYY-MM-DD"));
  const niceDateFormat = moment().format("MMMM Do YYYY");
  const [mealType, setMealType] = useState("Lunch");
  const [mainCourse, setMainCourse] = useState("");
  const [dessert, setDessert] = useState("");
  const [mainCourseRating, setMainCourseRating] = useState(1);
  const [dessertRating, setDessertRating] = useState(1);
  const [mainCoursePortion, setMainCoursePortion] = useState(100);
  const [dessertPortion, setDessertPortion] = useState(100);
  const [keepMainCourseOnMenu, setKeepMainCourseOnMenu] = useState(false);
  const [keepDessertOnMenu, setKeepDessertOnMenu] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      date: currentDate,
      meals: [
        {
          type: "Main Course",
          name: mainCourse,
          rating: mainCourseRating,
          portionEaten: mainCoursePortion,
          keepOnMenu: keepMainCourseOnMenu,
        },
        {
          type: "Dessert",
          name: dessert,
          rating: dessertRating,
          portionEaten: dessertPortion,
          keepOnMenu: keepDessertOnMenu,
        },
      ],
    };
    axios.post(`${apiBaseUrl}/submit_rating`, data).then((response) => {
      console.log(response.status, response.data);
    });
  };

  return (
    <div className="rate-food-container">
      <h1>How was Your Meal?</h1>
      <div className="rate-food-form">
        <h2>Date: {niceDateFormat}</h2>
        {/* <form onSubmit={handleSubmit} className="scrollable-form"> */}
        <form className="scrollable-form">
          {/* Main Course Section */}
          <div className="section">
            <label>Which meal?</label>
            <select
              value={mealType}
              onChange={(e) => setMealType(e.target.value)}
            >
              <option value={"Lunch"}>Lunch</option>
              <option value={"Supper"}>Supper</option>
            </select>
            <h3>Main Course</h3>
            <select onChange={(e) => setMainCourse(e.target.value)} required>
              <option value="">Select Main Course</option>
              {/* Populate with your options */}
            </select>
            <label>Rate the main course (1-10):</label>
            <input
              type="number"
              value={mainCourseRating}
              onChange={(e) =>
                setMainCourseRating(Math.max(1, Math.min(10, e.target.value)))
              }
              min={1}
              max={10}
              required
            />
            <label>How much of the main course did you eat?</label>
            <select
              value={mainCoursePortion}
              onChange={(e) => setMainCoursePortion(e.target.value)}
            >
              <option value={0}>0%</option>
              <option value={25}>25%</option>
              <option value={50}>50%</option>
              <option value={75}>75%</option>
              <option value={100}>100%</option>
              <option value={150}>150% (I got seconds)</option>
              <option value={200}>200% (I finished my seconds)</option>
            </select>
            <label>
              <input
                type="checkbox"
                checked={keepMainCourseOnMenu}
                onChange={() => setKeepMainCourseOnMenu(!keepMainCourseOnMenu)}
              />
              Keep this meal on the menu?
            </label>
          </div>

          {/* Dessert Section */}
          <div className="section">
            <h3>Dessert</h3>
            <select onChange={(e) => setDessert(e.target.value)} required>
              <option value="">Select Dessert</option>
              {/* Populate with your options */}
            </select>
            <label>Rate the dessert (1-10):</label>
            <input
              type="number"
              value={dessertRating}
              onChange={(e) =>
                setDessertRating(Math.max(1, Math.min(10, e.target.value)))
              }
              min={1}
              max={10}
              required
            />
            <label>How much of the dessert did you eat?</label>
            <select
              value={dessertPortion}
              onChange={(e) => setDessertPortion(e.target.value)}
            >
              <option value={0}>0%</option>
              <option value={25}>25%</option>
              <option value={50}>50%</option>
              <option value={75}>75%</option>
              <option value={100}>100%</option>
              <option value={150}>150% (I got seconds)</option>
              <option value={200}>200% (I finished my seconds)</option>
            </select>
            <label>
              <input
                type="checkbox"
                checked={keepDessertOnMenu}
                onChange={() => setKeepDessertOnMenu(!keepDessertOnMenu)}
              />
              Keep this meal on the menu?
            </label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RateFood;
