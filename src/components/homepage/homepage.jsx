import React, { useEffect, useState } from "react";
import Header from "../header/header";
import "../cssFIles/homepage/homepage.css";
import Meals from "../../assets/data/MealsContent";

export default function HomePage() {
  const [indexMealItem, setIndexMealItem] = useState("soup");
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <>
      <Header />
      <div className="main-home-page-container">
        <div className="outer-div-home-page-menu">
          {Object.keys(Meals).map((item) => {
            return (
              <div
                className={
                  item === indexMealItem
                    ? "home-page-menu-items home-page-menu-items-focus"
                    : "home-page-menu-items"
                }
                onClick={(e) => {
                  e.preventDefault();
                  setIndexMealItem(item);
                }}
              >
                <span>
                  {capitalizeFirstLetter(item)} ({Meals[item].length})
                </span>
              </div>
            );
          })}
        </div>

        {/* content div  */}
        <div className="content-div">
          {Meals[indexMealItem].map((item) => {
            return (
              <div className="MealItem-holder-div">
                <div>
                  <div className="meal-item-name">{item.name}</div>
                  <div className="meal-item-description">
                    {item.description}
                  </div>
                  <div className="meal-item-amount">₹{item.price}</div>
                </div>
                <div className="right-div-mealitems">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <div className="input-label-field">
                      <label htmlFor="mealsQuantity">Quantity</label>
                      <input
                        type="number"
                        id="mealsQuantity"
                        name="mealsQuantity"
                      />
                    </div>
                    <div className="submit-button-holder">
                      <button type="submit"> + Add </button>
                    </div>
                  </form>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
