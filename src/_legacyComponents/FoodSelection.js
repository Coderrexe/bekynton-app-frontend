import React, { useState } from "react";
import { Link } from "react-router-dom";
import foodOptions from "../data/foodOptions";

import styles from "./FoodSelection.css";

const FoodSelection = () => {
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [totalPoints, setTotalPoints] = useState(100);

  const handleFoodClick = (food) => {
    if (
      totalPoints >= food.cost &&
      !selectedFoods.some((selected) => selected.id === food.id)
    ) {
      setSelectedFoods([...selectedFoods, food]);
      setTotalPoints(totalPoints - food.cost);
    }
  };

  const handleRemoveClick = (food) => {
    const updatedSelectedFoods = selectedFoods.filter(
      (selected) => selected.id !== food.id
    );
    setSelectedFoods(updatedSelectedFoods);
    setTotalPoints(totalPoints + food.cost);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Create Your Ideal Food Routine</h2>
      <p className={styles.points}>Points Remaining: {totalPoints}</p>
      <ul className={styles.foodList}>
        {foodOptions.map((food) => (
          <li
            key={food.id}
            className={styles.foodItem}
            onClick={() => handleFoodClick(food)}
            style={{
              cursor: selectedFoods.some((selected) => selected.id === food.id)
                ? "not-allowed"
                : "pointer",
            }}
          >
            {food.name} ({food.cost} points)
          </li>
        ))}
      </ul>
      <div className={styles.selectedFoods}>
        <h3>Your Selected Foods:</h3>
        <div className={styles.scrollableContainer}>
          <ul className={styles.selectedFoodList}>
            {selectedFoods.map((food) => (
              <li key={food.id} className={styles.selectedFood}>
                {food.name} ({food.cost} points)
                <button
                  className={styles.removeButton}
                  onClick={() => handleRemoveClick(food)}
                >
                  Remove
                </button>
                {/* <Link
                  to={{
                    pathname: `/food-details/`,
                    state: { foodData: food }, // Pass the food data as state
                  }}
                  className={styles.detailsButton}
                >
                  Details
                </Link> */}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button
        className={styles.backButton}
        onClick={() => window.history.back()}
      >
        Back
      </button>
    </div>
  );
};

export default FoodSelection;
