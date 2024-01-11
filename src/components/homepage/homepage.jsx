import React, { useEffect, useRef, useState } from "react";
// import Header from "../header/header";
import Meals from "../../assets/data/MealsContent";
import { cartItemReducers } from "../redux-store/store";
import { useDispatch } from "react-redux";
import Footer from "../footer/footer";

import "../cssFIles/homepage/homepage.css";

export default function HomePage() {
  const [inputState, setInputState] = useState(1);
  const dispatch = useDispatch();
  const [indexMealItem, setIndexMealItem] = useState("soup");

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="full-width-div">
      {/* <Header /> */}
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
                      const payload = {
                        id: item.id,
                        name: item.name,
                        amount: parseInt(inputState, 10),
                        price: item.price,
                      };
                      dispatch(cartItemReducers.cartItemsAdded(payload));
                    }}
                  >
                    <div className="input-label-field">
                      <label htmlFor="mealsQuantity">Quantity</label>
                      <input
                        min={1}
                        max={10}
                        step={1}
                        defaultValue={1}
                        type="number"
                        id="mealsQuantity"
                        name="mealsQuantity"
                        onChange={(e) => {
                          setInputState(e.target.value);
                        }}
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
      {/* <Footer /> */}
    </div>
  );
}
