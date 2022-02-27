import React from "react";
import "./meal.css";
import Random from "./Random";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {faShuffle} from "@fortawesome/free-solid-svg-icons"

function Meal() {
  const [input, setInput] = React.useState();
  const [apiData, setApiData] = React.useState([]);
  const [randomdata, setRandomdata] = React.useState([]);
  function showdata() {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
      .then((response) => response.json())
      .then((data) => setApiData(data.meals))

      .catch((error) => console.log("error", error));
    setRandomdata([]);
    if(input === ""){
      alert("Please enter a value");
    }
    setInput("");
  }
//arslaan khan meal project//
  function random() {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => response.json())
      .then((data) => setRandomdata(data.meals))
      .catch((error) => console.log("error", error));
    setApiData([]);
  }

  return (
    <div className="mealFinder">
      <h1 className="heading">Meal Finder</h1>
      <input
        type="text"
        placeholder="search for the meal"
        onChange={(e) => setInput(e.target.value) } value={input}
      />
      <button type="search" onClick={() => showdata()}>
      <FontAwesomeIcon icon={faSearch} />
      </button>

      <button type="search" onClick={random}>
      <FontAwesomeIcon icon={faShuffle} />
      </button>
      <div className="showMeals">
       
        {apiData===null? (
          <h1 className="dataNotfound">No Data found</h1>
        ) : (
          apiData.map((meal) => (
            <div className="meal">
              <img src={meal.strMealThumb} alt="meal" />
              <h2>{meal.strMeal}</h2>
            </div>
          ))
        )}
      </div>
      {/* <Random data={randomdata} /> */}
      {randomdata === [] ? null : <Random data={randomdata} />}
    </div>
  );
}
export default Meal;
