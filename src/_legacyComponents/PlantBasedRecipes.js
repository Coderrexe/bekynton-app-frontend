import React from "react";
import "./PlantBasedRecipes.css";

const recipes = [
  {
    title: "Vegan Spaghetti Carbonara",
    alternativeFor: "Alternative for traditional carbonara",
    ingredients: [
      "200g spaghetti",
      "150g firm tofu",
      "1/4 cup nutritional yeast",
      "1/4 cup almond milk",
      "1 tsp olive oil",
      "1/2 cup peas",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Cook spaghetti according to package instructions.",
      "In a blender, combine tofu, nutritional yeast, almond milk, and blend until smooth.",
      "In a pan, heat olive oil, add peas, and cook for a few minutes.",
      "Combine cooked spaghetti, tofu sauce, and peas in the pan. Toss until well coated.",
      "Season with salt and pepper. Serve hot.",
    ],
  },
  {
    title: "Quinoa Salad with Roasted Vegetables",
    alternativeFor: "Alternative for traditional roasted vegetable salad",
    ingredients: [
      "1 cup quinoa",
      "2 cups water",
      "2 cups mixed vegetables (bell peppers, zucchini, cherry tomatoes)",
      "2 tbsp olive oil",
      "1/4 cup fresh basil leaves",
      "Juice of 1 lemon",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Rinse quinoa and cook in water according to package instructions.",
      "Toss mixed vegetables with olive oil, salt, and pepper. Roast in the oven until tender.",
      "In a large bowl, combine cooked quinoa, roasted vegetables, fresh basil, and lemon juice.",
      "Season with salt and pepper. Serve chilled.",
    ],
  },
  {
    title: "Vegan Tofu Scramble",
    alternativeFor: "Alternative for scrambled eggs",
    ingredients: [
      "200g firm tofu",
      "1/4 cup diced bell peppers",
      "1/4 cup diced onions",
      "1/4 cup spinach",
      "1/2 tsp turmeric powder",
      "Salt and pepper to taste",
      "1 tbsp nutritional yeast (optional)",
    ],
    instructions: [
      "Crumble tofu into a pan and cook until slightly browned.",
      "Add bell peppers, onions, and spinach. Cook until vegetables are tender.",
      "Season with turmeric, salt, and pepper. Stir in nutritional yeast if desired.",
      "Serve hot as a breakfast scramble.",
    ],
  },
  {
    title: "Chickpea Curry",
    alternativeFor: "Alternative for meat-based curry",
    ingredients: [
      "1 can chickpeas (15 oz), drained and rinsed",
      "1 onion, diced",
      "2 cloves garlic, minced",
      "1 can diced tomatoes (14 oz)",
      "1 can coconut milk (14 oz)",
      "2 tsp curry powder",
      "Salt and pepper to taste",
      "Fresh cilantro for garnish",
    ],
    instructions: [
      "In a pan, sauté onions and garlic until translucent.",
      "Add chickpeas, diced tomatoes, coconut milk, and curry powder.",
      "Simmer for 20-25 minutes until flavors meld.",
      "Season with salt and pepper, and garnish with fresh cilantro.",
      "Serve with rice or naan.",
    ],
  },
  {
    title: "Vegan Banana Pancakes",
    alternativeFor: "Alternative for traditional pancakes",
    ingredients: [
      "1 ripe banana",
      "1/2 cup oat flour",
      "1/4 cup almond milk",
      "1 tsp baking powder",
      "1/2 tsp vanilla extract",
      "1/4 tsp cinnamon (optional)",
      "Maple syrup and fruit for topping",
    ],
    instructions: [
      "In a blender, combine banana, oat flour, almond milk, baking powder, vanilla, and cinnamon.",
      "Blend until smooth.",
      "Heat a non-stick pan and pour pancake batter onto it.",
      "Cook until bubbles form, flip, and cook the other side until golden brown.",
      "Serve with maple syrup and fresh fruit.",
    ],
  },
  // Add more recipess
];

const PlantBasedRecipes = () => {
  return (
    <div className="plant-based-recipes-container">
      <h1>Plant-Based Recipes</h1>
      <div className="recipe-list">
        {recipes.map((recipe, index) => (
          <div className="recipe-card" key={index}>
            <h2>{recipe.title}</h2>
            <p className="alternative-for">{recipe.alternativeFor}</p>
            <div className="recipe-details">
              <div className="ingredients">
                <h3>Ingredients:</h3>
                <ul>
                  {recipe.ingredients.map((ingredient, i) => (
                    <li key={i}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <div className="instructions">
                <h3>Instructions:</h3>
                <ol>
                  {recipe.instructions.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantBasedRecipes;
