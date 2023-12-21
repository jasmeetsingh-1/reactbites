import React from "react";
import Header from "../header/header";
import "../cssFIles/homepage/homepage.css";
import Meals from "../../assets/data/MealsContent";

export default function HomePage() {
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
              <div className="home-page-menu-items">
                <span>
                  {capitalizeFirstLetter(item)} ({Meals[item].length})
                </span>
              </div>
            );
          })}
        </div>

        {/* content div  */}
        <div className="content-div">
          <div className="MealItem-holder-div">
            <div className="green-border">
              <div className="meal-item-name">Bombay Toasty Burger</div>
              <div className="meal-item-description">
                Multigrain Bread Roast Beet , Potato Onion, Marinated Cucumber
              </div>
              <div className="meal-item-amount">₹485.00</div>
            </div>
            <div className="red-border">
              <form>
                <div className="input-label-field">
                  <label htmlFor="mealsQuantity">Quantity</label>
                  <input id="mealsQuantity" name="mealsQuantity" />
                </div>
                <div>
                  <button type="submit"> + Add </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
