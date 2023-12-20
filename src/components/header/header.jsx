import React, { useEffect, useState } from "react";
import "../cssFIles/header/header.css";
import mealsImg from "../../assets/meals.jpg";
import { useSelector } from "react-redux";

function Header() {
  const [username, setUsername] = useState("");
  const loginData = useSelector((state) => state.loginStore);

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  useEffect(() => {
    if (loginData.isloggedIn) {
      const capitalizedUsername = capitalizeFirstLetter(loginData.data.name);
      setUsername(capitalizedUsername);
    } else setUsername("");
  }, [loginData]);

  return (
    <>
      <div className="main-outer-div-header">
        <div className="heading-div-header">
          <h2>REACTBITES</h2>
        </div>
        <div className="header-button-holder">
          <button className="header-buttons-navbar">
            {username ? `Hi, ${username}` : "Login/SignUp"}
          </button>
          <button
            className="header-buttons-navbar"
            style={{ marginRight: "43px" }}
          >
            Your Cart
            <span className="cart-items-header">10</span>
          </button>
        </div>
      </div>
      <div className="main-image">
        <img src={mealsImg} alt="A meals" />
      </div>
    </>
  );
}

export default Header;
