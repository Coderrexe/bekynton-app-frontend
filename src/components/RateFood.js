import React, { useState } from "react";
import "./RateFood.css";
import axios from "axios";

const dateOptions = [
  {
    date: "2023-09-10",
    meal: "Breakfast: Oatmeal, Salad, Dinner: Spaghetti",
  },
  {
    date: "2023-09-11",
    meal: "Breakfast: Scrambled Eggs,Sandwich, Dinner: Grilled Chicken",
  },
  {
    date: "2023-09-12",
    meal: "Breakfast: Pancakes, Soup, Dinner: Beef Stew",
  },
  {
    date: "2023-09-13",
    meal: "Breakfast: Yogurt, Quinoa Bowl, Dinner: Salmon",
  },
  {
    date: "2023-09-14",
    meal: "Breakfast: Cereal,Pizza, Dinner: Tofu Stir-Fry",
  },
];

const apiBaseUrl = "http://localhost:8080/api/ratings";

const RateFood = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [foodRating, setFoodRating] = useState(0);
  const [foodPortion, setFoodPortion] = useState(100);
  const [keepOnMenu, setKeepOnMenu] = useState(false);
  const [mealHeader, setMealHeader] = useState("Meal:");
  const [selectedMeal, setSelectedMeal] = useState("");

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    // Update the mealHeader based on the selected date
    const selectedMeal = dateOptions.find(
      (option) => option.date === e.target.value
    )?.meal;
    setMealHeader(
      selectedMeal ? `Meal: ${selectedMeal.split(",")[1]}` : "Meal:"
    );
    setSelectedMeal(selectedMeal ? `${selectedMeal.split(",")[1]}` : "Meal:");
  };

  const handleRatingChange = (e) => {
    setFoodRating(e.target.value);
  };

  const handlePortionChange = (e) => {
    setFoodPortion(e.target.value);
  };

  const handleKeepOnMenuChange = () => {
    setKeepOnMenu(!keepOnMenu);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const endpoint = "/submit_rating";
    const APIURL = apiBaseUrl + endpoint;

    // const formData = {
    //   name: selectedMeal,
    //   rating: foodRating,
    //   portionEaten: foodPortion,
    //   keepOnMenu: keepOnMenu,
    // };
    const data = {
      name: selectedMeal,
      rating: foodRating,
      portionEaten: foodPortion,
      keepOnMenu: keepOnMenu,
    };
    console.log("DATA", data);
    // Submission logic
    axios
      .post("http://localhost:8080/api/ratings/submit_rating", data)
      .then((response) => {
        console.log(response.status, response.data.token);
      });

    // console.log("Date:", selectedDate);

    console.log("Food Rating:", foodRating);
    console.log("Food Portion:", foodPortion);
    console.log("Keep on Menu:", keepOnMenu);

    // setSelectedDate("");
    // setFoodRating("");
    // setFoodPortion(100);
    // setKeepOnMenu(false);
    // setMealHeader("Meal:");
  };

  return (
    <div className="rate-food-container">
      <h1>How was Your Meal?</h1>
      <div className="rate-food-form">
        <div className="date-dropdown">
          <label htmlFor="date">Select Date:</label>
          <select id="date" value={selectedDate} onChange={handleDateChange}>
            <option value="">Select a Date</option>
            {dateOptions.map((option, index) => (
              <option key={index} value={option.date}>
                {option.date}
              </option>
            ))}
          </select>
        </div>
        <h2>{mealHeader}</h2>
        <form onSubmit={handleSubmit}>
          <div className="rating">
            <label htmlFor="foodRating">
              How did you find your meal (1-10):
            </label>
            <input
              type="number"
              id="foodRating"
              value={foodRating}
              onChange={handleRatingChange}
              min={1}
              max={10}
              required
            />
          </div>
          <div className="portion">
            <label htmlFor="foodPortion">
              How Much Of the food on your plate did you eat:
            </label>
            <select
              id="foodPortion"
              value={foodPortion}
              onChange={handlePortionChange}
            >
              <option value={25}>25%</option>
              <option value={50}>50%</option>
              <option value={75}>75%</option>
              <option value={100}>100%</option>
              <option value={200}>200%(More than one Round)</option>
            </select>
          </div>
          <div className="keep-on-menu">
            <label>
              <input
                type="checkbox"
                checked={keepOnMenu}
                onChange={handleKeepOnMenuChange}
              />
              Would you like this meal to stay on the menu?
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RateFood;
