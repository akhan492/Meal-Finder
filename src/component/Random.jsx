import React from "react";
import "./Random.css";
export default function Random(props) {
  console.log(props);
  return (
    <div className="singleContianer">
      {props.data.map((meal) => (
        <div className="single-meal">
          <h1>{meal.strMeal}</h1>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <div className="single-meal-info">
            <p>{meal.strCategory}</p>
          </div>
          <div className="main">
            <p>{meal.strInstructions}</p>
            <h2>Ingredients </h2>
            <ul>
              {meal.strIngredient1 && <li>{meal.strIngredient1}</li>}
              {meal.strIngredient2 && <li>{meal.strIngredient2}</li>}
              {meal.strIngredient3 && <li>{meal.strIngredient3}</li>}
              {meal.strIngredient4 && <li>{meal.strIngredient4}</li>}
              {meal.strIngredient5 && <li>{meal.strIngredient5}</li>}
              {meal.strIngredient6 && <li>{meal.strIngredient6}</li>}
              {meal.strIngredient7 && <li>{meal.strIngredient7}</li>}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
