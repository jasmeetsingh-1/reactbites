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

          {/* <div className="home-page-menu-items">
            <span>Soups (20)</span>
          </div>
          <div className="home-page-menu-items">
            <span>Burgers (9)</span>
          </div>
          <div className="home-page-menu-items">
            <span>Pizza (11)</span>
          </div>
          <div className="home-page-menu-items">
            <span>Bowls (12)</span>
          </div>
          <div className="home-page-menu-items">
            <span>Desserts (5)</span>
          </div> */}
        </div>
        <div>Content holder</div>
      </div>
    </>
  );
}
