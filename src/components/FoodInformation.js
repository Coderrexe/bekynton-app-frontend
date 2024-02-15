import React, { useState } from "react";
import "./FoodInformation.css";

const foodData = [
  {
    name: "Salad",
    environmentalRating: 9,
    // nutritionalValue: "High in vitamins and fiber.",
    environmentalImpact: "Low water usage and carbon emissions.",
    waterUsage: "Low",
    environmentalIssues: "Minimal",
    carbonFootprint: "Low",
    carbonEmissions: "Low",
    landUsage: "Minimal",
  },
  {
    name: "Burger",
    environmentalRating: 3,
    // nutritionalValue: "High in calories and saturated fat.",
    environmentalImpact: "High carbon emissions and land use.",
    waterUsage: "Moderate",
    environmentalIssues: "High",
    carbonFootprint: "High",
    carbonEmissions: "High",
    landUsage: "High",
  },
  // Add more food
];

const FoodInformation = () => {
  const [selectedFood, setSelectedFood] = useState(null);

  const handleFoodChange = (event) => {
    const selectedFoodName = event.target.value;
    setSelectedFood(foodData.find((food) => food.name === selectedFoodName));
  };

  return (
    <div className="food-information-container">
      <h1>Food Information</h1>
      <div className="food-dropdown">
        <label>Select a Food:</label>
        <select onChange={handleFoodChange}>
          <option value="">Choose a food</option>
          {foodData.map((food) => (
            <option key={food.name} value={food.name}>
              {food.name}
            </option>
          ))}
        </select>
      </div>
      {selectedFood && (
        <div className="food-details">
          <h2>{selectedFood.name}</h2>
          <p>Environmental Rating: {selectedFood.environmentalRating}/10</p>
          <p>Nutritional Value: {selectedFood.nutritionalValue}</p>
          <p>Environmental Impact: {selectedFood.environmentalImpact}</p>
          <p>Water Usage: {selectedFood.waterUsage}</p>
          <p>Environmental Issues: {selectedFood.environmentalIssues}</p>
          <p>Carbon Footprint: {selectedFood.carbonFootprint}</p>
          <p>Carbon Emissions: {selectedFood.carbonEmissions}</p>
          <p>Land Usage: {selectedFood.landUsage}</p>
        </div>
      )}
    </div>
  );
};

export default FoodInformation;
