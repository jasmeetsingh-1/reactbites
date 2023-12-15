import React, { useState } from "react";
import "../cssFIles/login/loginPage.css";
import image from "../../assets/welcomefood.jpg";
function LoginPage() {
  const [loginForm, setloginForm] = useState(false);
  const [signUpForm, setsignUpForm] = useState(false);
  return (
    <div className="main-div-container ">
      <div className="main-image-container">
        <img
          style={{ width: "inherit", height: "inherit", borderRadius: "27px" }}
          src={image}
          alt="Welcome screen"
        />
      </div>
      <div className="information-outer-main-div">
        <div className="heading-section-login-page">
          <h2
            className="heading-login-page"
            style={{ fontSize: "2.5rem", fontWeight: "bold" }}
          >
            WELCOME TO
          </h2>
          <h1
            className="heading-login-page"
            style={{
              fontWeight: "bolder",
              fontSize: "4rem",
              textDecoration: "underline",
            }}
          >
            REACTBITES
          </h1>
        </div>
        <div>
          {!loginForm && !signUpForm ? (
            <>
              <div className="paragraph-div-holder">
                <p>
                  Take a minute to Login/Signup to have a seamless experience
                </p>
              </div>
              <div>
                <div style={{ margin: "60px 0px" }}>
                  <button
                    className="buttons-login-page"
                    style={{
                      marginRight: "10px",
                      backgroundColor: "black",
                      color: "white",
                    }}
                    onClick={() => {
                      setloginForm(true);
                      setsignUpForm(false);
                    }}
                  >
                    Login
                  </button>
                  <button
                    className="buttons-login-page"
                    style={{ backgroundColor: "#D7CECE" }}
                    onClick={() => {
                      setloginForm(false);
                      setsignUpForm(true);
                    }}
                  >
                    Signup
                  </button>
                </div>
                <div
                  style={{
                    height: "fit-content",
                    color: "rgb(255 255 255 / 53%)",
                    fontWeight: "900",
                  }}
                >
                  <p>
                    At REACTBITES elevate your senses with our premium,
                    just-in-time crafted meals. Our skilled chefs promise a
                    gourmet experience every time quality and freshness
                    guaranteed. Indulge in excellence with us!
                  </p>
                </div>
              </div>
            </>
          ) : loginForm ? (
            <>
              <div>
                <div className="paragraph-div-holder">
                  <p>Take a minute to Login to have a seamless experience</p>
                </div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="login-tag-inputfields">
                    <label htmlFor="usernamelogin">USERNAME</label>
                    <input
                      id="usernamelogin"
                      name="usernamelogin"
                      type="text"
                      style={{ paddingLeft: "10px" }}
                    />
                  </div>
                  <div className="login-tag-inputfields">
                    <label htmlFor="passwordlogin">PASSWORD</label>
                    <input
                      id="passwordlogin"
                      name="passwordlogin"
                      type="password"
                      style={{ paddingLeft: "10px" }}
                    />
                  </div>
                  <div className="bottom-login-tag-form">
                    <button
                      type="submit"
                      className="buttons-login-page"
                      style={{
                        marginRight: "10px",
                        backgroundColor: "black",
                        color: "white",
                        width: "7rem",
                      }}
                    >
                      Login
                    </button>
                    &nbsp;
                    <p style={{ fontSize: "small" }}>Don't have an account?</p>
                    &nbsp;&nbsp;
                    <p
                      onClick={() => {
                        setsignUpForm(true);
                        setloginForm(false);
                      }}
                      className="a-href-button-styling"
                    >
                      SignUp
                    </p>
                  </div>
                </form>
              </div>
            </>
          ) : signUpForm ? (
            <>
              <div>
                <div className="paragraph-div-holder">
                  <p>Take a minute to Signup to have a seamless experience</p>
                </div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="signup-form-tag-inputfields">
                    <label htmlFor="usernameSignup">USERNAME</label>
                    <input
                      id="usernameSignup"
                      name="usernameSignup"
                      type="text"
                      style={{ paddingLeft: "10px" }}
                    />
                  </div>
                  <div className="signup-form-tag-inputfields">
                    <label htmlFor="name">NAME</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      style={{ paddingLeft: "10px" }}
                    />
                  </div>
                  <div className="signup-form-tag-inputfields">
                    <label htmlFor="email">EMAIL</label>
                    <input
                      id="email"
                      name="email"
                      type="text"
                      style={{ paddingLeft: "10px" }}
                    />
                  </div>
                  <div className="signup-form-tag-inputfields">
                    <label htmlFor="passwordSignUp">PASSWORD?</label>
                    <input
                      id="passwordSignUp"
                      name="passwordSignUp"
                      type="password"
                      style={{ paddingLeft: "10px" }}
                    />
                  </div>
                  <div className="signup-form-tag-inputfields">
                    <label htmlFor="confirmpasswordSignup">
                      CONFIRM PASSWORD?
                    </label>
                    <input
                      id="confirmpasswordSignup"
                      name="confirmpasswordSignup"
                      type="password"
                      style={{ paddingLeft: "10px" }}
                    />
                  </div>
                  <div className="bottom-login-tag-form">
                    <button
                      type="submit"
                      className="buttons-login-page"
                      style={{
                        marginRight: "10px",
                        backgroundColor: "black",
                        color: "white",
                        width: "7rem",
                      }}
                    >
                      Sign Up
                    </button>
                    &nbsp;
                    <p style={{ fontSize: "small" }}>
                      Already have an account?
                    </p>
                    &nbsp;&nbsp;
                    <p
                      onClick={() => {
                        setloginForm(true);
                        setsignUpForm(false);
                      }}
                      className="a-href-button-styling"
                    >
                      Login
                    </p>
                  </div>
                </form>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
