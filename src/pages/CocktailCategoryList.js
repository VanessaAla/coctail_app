import React, { useState } from "react";
import Category from "./Category";

export default function CocktailCategoryList() {
  const [category, set_category] = useState([
    { strCategory: "Ordinary Drink" },
    { strCategory: "Cocktail" },
    { strCategory: "Milk / Float / Shake" },
    { strCategory: "Other/Unknown" },
    { strCategory: "Cocoa" },
    { strCategory: "Shot" },
    { strCategory: "Coffee / Tea" },
    { strCategory: "Homemade Liqueur" },
    { strCategory: "Punch / Party Drink" },
    { strCategory: "Beer" },
    { strCategory: "Soft Drink / Soda" },
    { strCategory: "" },
  ]);
  console.log("what do i see", category);
  return (
    <div>
      {category.map((category) => (
        <Category name={category.strCategory} />
      ))}
    </div>
  );
}
