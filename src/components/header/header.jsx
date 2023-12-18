import React from "react";
import "../cssFIles/header/header.css";
import mealsImg from "../../assets/meals.jpg";

function Header() {
  return (
    <>
      <div className="main-outer-div-header">
        <div className="heading-div-header">
          <h2>REACTBITES</h2>
        </div>
        <div className="header-button-holder">
          <button className="header-buttons-navbar">Login/Signup</button>
          <button className="header-buttons-navbar">Your Cart</button>
        </div>
      </div>
      <div className="main-image">
        <img src={mealsImg} alt="A meals" />
      </div>
    </>
  );
}

export default Header;
