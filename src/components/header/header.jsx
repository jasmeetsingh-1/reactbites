import React, { useEffect, useState } from "react";
import "../cssFIles/header/header.css";
import mealsImg from "../../assets/meals.jpg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [totalCartItems, settotalCartItems] = useState(0);
  const loginData = useSelector((state) => state.loginStore);
  const cartItems = useSelector((state) => state.cartStore);

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  useEffect(() => {
    if (loginData.isloggedIn) {
      const capitalizedUsername = capitalizeFirstLetter(loginData.data.name);
      setUsername(capitalizedUsername);
    } else setUsername("");
  }, [loginData]);

  useEffect(() => {
    settotalCartItems(0);
    cartItems.cart.map((item) => {
      settotalCartItems((prev) => prev + item.amount);
    });
  }, [cartItems]);

  return (
    <>
      <div className="main-outer-div-header">
        <div className="heading-div-header">
          <h2>REACTBITES</h2>
        </div>
        <div className="header-button-holder">
          <button
            className="header-buttons-navbar"
            onClick={(e) => {
              e.preventDefault();
              if (!loginData.isloggedIn) {
                navigate("/login");
              }
            }}
          >
            {username ? `Hi, ${username}` : "Login/SignUp"}
          </button>
          <button
            className="header-buttons-navbar"
            style={{ marginRight: "43px" }}
            onClick={props.openCart}
          >
            Your Cart
            <span className="cart-items-header">{totalCartItems}</span>
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
