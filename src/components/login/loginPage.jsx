import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginReducers, signUpReducers } from "../redux-store/store";
import { useDispatch, useSelector } from "react-redux";

import "../cssFIles/login/loginPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import image from "../../assets/welcomefood.jpg";
// import image from "../../assets/welcomefood.svg";
function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginForm, setloginForm] = useState(false);
  const [signUpForm, setsignUpForm] = useState(false);
  const signupData = useSelector((state) => state.signupStore.signupdata);
  const loginData = useSelector((state) => state.loginStore);

  const [loginFormData, setLoginFormData] = useState({
    usernamelogin: "",
    passwordlogin: "",
  });

  const [signUpFormData, setSignUpFormData] = useState({
    username: "",
    password: "",
    confirmpassword: "",
    email: "",
    name: "",
    phonenumber: "",
  });

  const toastConfig = {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };

  function loginUserExistCheck(username) {
    //checks if username is in the list of the signup
    //if exist then false either true
    // true teh fer if call hojju
    //true mtlb nahi hega

    let flag = true;
    signupData.map((data) => {
      if (data.username === username) {
        flag = false;
        return;
      }
    });

    return flag;
  }

  function loginUserCheck(loginInput) {
    //checks if username exist and then check password
    let flag = false;
    signupData.map((data) => {
      if (data.username === loginInput.usernamelogin) {
        if (data.password !== loginInput.passwordlogin) {
          flag = true;
          return;
        }
      }
    });

    return flag;
  }

  // useEffect(() => {
  //   var headers = new Headers();
  //   headers.append("X-CSCAPI-KEY", "API_KEY");

  //   var requestOptions = {
  //     method: "GET",
  //     headers: headers,
  //     redirect: "follow",
  //   };

  //   fetch("", requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log("error", error));
  // }, []);

  function loginFormHandler(key) {
    if (loginFormData.usernamelogin.length === 0) {
      toast.warn("Please enter username", toastConfig);
      return;
    }
    if (loginFormData.passwordlogin.length === 0) {
      toast.warn("Please enter Password", toastConfig);
      return;
    }
    if (!/^[a-zA-Z0-9_]+$/.test(loginFormData.usernamelogin)) {
      toast.error(
        "Invalid username: Username can only contain letters, numbers, and underscores.",
        toastConfig
      );
      return;
    }
    if (/\s/.test(loginFormData.passwordlogin)) {
      toast.error(
        "Invalid password: password cant have whitespaces",
        toastConfig
      );
      return;
    }

    if (loginUserExistCheck(loginFormData.usernamelogin)) {
      toast.error("No user found with the username", toastConfig);
      return;
    }

    if (loginUserCheck(loginFormData)) {
      toast.error("Incorrect Password", toastConfig);
      return;
    }

    const userdata = signupData.find((data) => {
      return (
        data.username === loginFormData.usernamelogin &&
        data.password === loginFormData.passwordlogin
      );
    });

    toast.success("Login Successful", toastConfig);
    dispatch(
      loginReducers.loginButtonHandlerReducers({
        status: true,
        userdata: userdata,
      })
    );

    setTimeout(() => {
      navigate("/");
    }, 1000);
  }

  function emailCheckBeforeSignUp(email) {
    //if email already used then return true, otherwise return false
    let ans = false;
    signupData.map((data) => {
      if (data.email === email) {
        ans = true;
        return;
      }
    });

    return ans;
  }

  function usernameCheckBeforeSignUp(username) {
    let ans = false;
    signupData.map((data) => {
      if (data.username === username) {
        ans = true;
        return;
      }
    });

    return ans;
  }

  function phonenumberCheckBeforeSignUp(phonenumber) {
    //function will return true if phone number is not valid
    let ans = false;
    if (phonenumber.length !== 10) {
      ans = true;
    } else {
      const firstDigit = phonenumber[0];
      if (
        firstDigit == 1 ||
        firstDigit == 2 ||
        firstDigit == 3 ||
        firstDigit == 4 ||
        firstDigit == 5
      ) {
        ans = true;
      }
    }
    return ans;
  }

  function passwordSignUpChecker(password) {
    //one number, one capital, one special character
    if (!/\d/.test(password)) {
      return "Password must have number.";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must have a capital.";
    }
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
      return "Password must contain a special character.";
    }

    return "password Valid";
  }
  function signUpFormHandler() {
    if (
      signUpFormData.username.length === 0 ||
      signUpFormData.name.length === 0 ||
      signUpFormData.email.length === 0 ||
      signUpFormData.password.length === 0
    ) {
      toast.warn("All fields are mandatory", toastConfig);
      return;
    }
    if (!/^[a-zA-Z0-9_]+$/.test(signUpFormData.username)) {
      toast.error(
        "Invalid username: Username can only contain letters, numbers, and underscores.",
        toastConfig
      );
      return;
    }
    if (/\s/.test(signUpFormData.password)) {
      toast.error(
        "Invalid password: password cant have whitespaces",
        toastConfig
      );
      return;
    }
    if (signUpFormData.confirmpassword !== signUpFormData.password) {
      toast.error("Password and Confirm password must match", toastConfig);
      return;
    }
    const passwordError = passwordSignUpChecker(signUpFormData.password);
    if (passwordError != "password Valid") {
      toast.error(passwordError, toastConfig);
      return;
    }
    if (signUpFormData.password < 6) {
      toast.error("Password must more then 6 characters", toastConfig);
    }
    if (!/^[a-zA-Z0-9_\s]+$/.test(signUpFormData.name)) {
      toast.error(
        "Invalid name: Name can only contain letters, numbers, underscores, and spaces.",
        toastConfig
      );
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signUpFormData.email)) {
      toast.error("Invalid Email address", toastConfig);
      return;
    }

    if (emailCheckBeforeSignUp(signUpFormData.email)) {
      toast.error("User exist for given email", toastConfig);
      return;
    }

    if (usernameCheckBeforeSignUp(signUpFormData.username)) {
      toast.error("Username already taken", toastConfig);
      return;
    }

    if (phonenumberCheckBeforeSignUp(signUpFormData.phonenumber)) {
      toast.error("Invalid Phone Number", toastConfig);
      return;
    }

    setSignUpFormData({
      username: signUpFormData.username.trim(),
      name: signUpFormData.name.trim(),
      password: signUpFormData.password.trim(),
      confirmpassword: signUpFormData.confirmpassword.trim(),
      email: signUpFormData.email.trim(),
      phonenumber: signUpFormData.phonenumber.trim(),
    });
    dispatch(signUpReducers.signupButtonHandlerReducer(signUpFormData));
    toast.success("Sign Up Successful", toastConfig);
    setloginForm(true);
    setsignUpForm(false);
    // loginFormHandler("afterSignUp");
    // dispatch(
    //   loginReducers.loginButtonHandlerReducers({
    //     status: true,
    //     userdata: {
    //       username: signUpFormData.username,
    //       name: signUpFormData.name,
    //       password: signUpFormData.password,
    //       email: signUpFormData.email,
    //     },
    //   })
    // );
    // setTimeout(() => {
    //   navigate("/");
    // }, 1800);
  }

  return (
    <>
      <div className="main-div-container ">
        <div className="main-image-container">
          {/* <img
            style={{
              width: "inherit",
              height: "inherit",
              borderRadius: "27px",
            }}
            src={image}
            alt="Welcome screen"
          /> */}
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
                      loginFormHandler("login");
                    }}
                  >
                    <div className="login-tag-inputfields">
                      <label htmlFor="usernamelogin">USERNAME</label>
                      <input
                        id="usernamelogin"
                        name="usernamelogin"
                        type="text"
                        value={loginFormData.usernamelogin}
                        style={{ paddingLeft: "10px" }}
                        onChange={(e) => {
                          const usernameInput = e.target.value;
                          setLoginFormData({
                            ...loginFormData,
                            usernamelogin: usernameInput,
                          });
                        }}
                      />
                    </div>
                    <div className="login-tag-inputfields">
                      <label htmlFor="passwordlogin">PASSWORD</label>
                      <input
                        id="passwordlogin"
                        name="passwordlogin"
                        type="password"
                        value={loginFormData.passwordlogin}
                        style={{ paddingLeft: "10px" }}
                        onChange={(e) => {
                          const passwordinput = e.target.value;
                          setLoginFormData({
                            ...loginFormData,
                            passwordlogin: passwordinput,
                          });
                        }}
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
                      <p style={{ fontSize: "small" }}>
                        Don't have an account?
                      </p>
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
                      signUpFormHandler();
                    }}
                  >
                    <div className="signup-form-tag-inputfields">
                      <label htmlFor="usernameSignup">USERNAME</label>
                      <input
                        id="usernameSignup"
                        name="usernameSignup"
                        type="text"
                        value={signUpFormData.username}
                        style={{ paddingLeft: "10px" }}
                        onChange={(e) => {
                          const usernameInput = e.target.value;
                          setSignUpFormData({
                            ...signUpFormData,
                            username: usernameInput,
                          });
                        }}
                      />
                    </div>
                    <div className="signup-form-tag-inputfields">
                      <label htmlFor="name">NAME</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={signUpFormData.name}
                        style={{ paddingLeft: "10px" }}
                        onChange={(e) => {
                          const nameinput = e.target.value;
                          setSignUpFormData({
                            ...signUpFormData,
                            name: nameinput,
                          });
                        }}
                      />
                    </div>
                    <div className="signup-form-tag-inputfields">
                      <label htmlFor="email">EMAIL</label>
                      <input
                        id="email"
                        name="email"
                        type="text"
                        value={signUpFormData.email}
                        style={{ paddingLeft: "10px" }}
                        onChange={(e) => {
                          const emailinput = e.target.value;
                          setSignUpFormData({
                            ...signUpFormData,
                            email: emailinput,
                          });
                        }}
                      />
                    </div>
                    <div className="signup-form-tag-inputfields">
                      <label htmlFor="email">PHONE No.</label>
                      <input
                        id="phonenumber"
                        name="phonenumber"
                        type="text"
                        value={signUpFormData.phonenumber}
                        style={{ paddingLeft: "10px" }}
                        onChange={(e) => {
                          if (
                            /^[0-9]*$/.test(e.target.value) &&
                            e.target.value.length <= 10
                          ) {
                            const phonenumberinput = e.target.value;
                            setSignUpFormData({
                              ...signUpFormData,
                              phonenumber: phonenumberinput,
                            });
                          }
                        }}
                      />
                    </div>
                    <div className="signup-form-tag-inputfields">
                      <label htmlFor="passwordSignUp">PASSWORD?</label>
                      <input
                        id="passwordSignUp"
                        name="passwordSignUp"
                        type="password"
                        value={signUpFormData.password}
                        style={{ paddingLeft: "10px" }}
                        onChange={(e) => {
                          const passwordinput = e.target.value;
                          setSignUpFormData({
                            ...signUpFormData,
                            password: passwordinput,
                          });
                        }}
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
                        value={signUpFormData.confirmpassword}
                        style={{ paddingLeft: "10px" }}
                        onChange={(e) => {
                          const confirmpassword = e.target.value;
                          setSignUpFormData({
                            ...signUpFormData,
                            confirmpassword: confirmpassword,
                          });
                        }}
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
      <ToastContainer />
    </>
  );
}

export default LoginPage;
