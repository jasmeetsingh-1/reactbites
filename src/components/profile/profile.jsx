import React, { useEffect, useState } from "react";
import "../cssFIles/profile/profile.css";
import Sidebar from "./sidebar";
import { useSelector } from "react-redux";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Lottie from "lottie-react";
import MyProfileAnimation from "../../assets/my_profile_annimation.json";
import { Formik, Form, Field, ErrorMessage } from "formik";
import MyOrders from "./profileOrders";
import AboutUs from "./Aboutus";
import * as Yup from "yup";

library.add(faEye);

function MyProfile() {
  const [activeMenu, setActiveMenu] = useState(1);
  const [passwordChanging, setPasswordChanging] = useState(false);
  const [viewingPassword, setviewingPassword] = useState(false);
  const loginData = useSelector((state) => state.loginStore);
  const initialValues = {
    name: loginData.data.name,
    username: loginData.data.username,
    email: loginData.data.email,
    // address: "address test",
    phonenumber: loginData.data.phonenumber,
    // city: "city test",
    // state: "state test",
    password: loginData.data.password,
    confirmpassword: loginData.data.password,
  };

  const validationEditProfile = Yup.object({
    name: Yup.string().required("Please enter your name"),
    username: Yup.string().required("Please enter your username"),
    email: Yup.string().required("Please enter your email"),
    phonenumber: Yup.string()
      .required("Please enter your phonenumber")
      .min(10, "Phone number must be 10 digits")
      .max(10, "Phone number must be 10 digits"),
    password: Yup.string()
      .required("Please enter password")
      .min(6, "Password must be more then 6 character"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Please confirm password"),
  });
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}
      >
        <div className="profile-css-main-div">
          <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
          {activeMenu === 1 ? (
            <div className="profile-css-form-div-holder">
              <div className="profile-change-div-heading">
                <div className="profile-annimation-holder-div">
                  <Lottie
                    animationData={MyProfileAnimation}
                    loop={false}
                    autoplay={true}
                  />
                </div>
                Edit Profile
              </div>

              <div className="profile-change-div-form">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationEditProfile}
                  onSubmit={(values) => {
                    console.log("values", values);
                  }}
                >
                  {({ values, errors, touched }) => (
                    <Form>
                      <div
                        className="profile-edit-form-row"
                        style={{ flexDirection: "row", gap: "1rem" }}
                      >
                        <div className="width-div-container-profile-css">
                          <label htmlFor="name">Name</label>
                          <Field name="name" id="name" value={values.name} />
                          {errors.name && touched.name ? (
                            <span className="error-class-profile">
                              {errors.name}
                            </span>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="width-div-container-profile-css">
                          <label htmlFor="username">Username</label>
                          <Field
                            disabled={true}
                            style={{ cursor: "not-allowed" }}
                            name="username"
                            id="username"
                            value={values.username}
                          />
                        </div>
                      </div>
                      <div className="profile-edit-form-row">
                        <label htmlFor="email">Email</label>
                        <Field
                          name="email"
                          id="email"
                          value={values.email}
                          disabled={true}
                          style={{ cursor: "not-allowed" }}
                        />
                      </div>
                      {/* <div className="profile-edit-form-row">
                      <label htmlFor="address">Address</label>
                      <Field
                        name="address"
                        id="address"
                        value={values.address}
                      />
                    </div> */}
                      <div className="profile-edit-form-row">
                        <label htmlFor="phonenumber">Phone Number</label>
                        <Field
                          name="phonenumber"
                          id="phonenumber"
                          value={values.phonenumber}
                        />
                        {errors.phonenumber && touched.phonenumber ? (
                          <span className="error-class-profile">
                            {errors.phonenumber}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                      {/* <div
                      className="profile-edit-form-row"
                      style={{ flexDirection: "row", gap: "2rem" }}
                    >
                      <div className="width-div-container-profile-css">
                        <label htmlFor="city">City</label>
                        <Field name="city" id="city" value={values.city} />
                      </div>
                      <div className="width-div-container-profile-css">
                        <label htmlFor="state">State</label>
                        <Field name="state" id="state" value={values.state} />
                      </div>
                    </div> */}

                      {passwordChanging ? (
                        <div
                          className="profile-edit-form-row"
                          style={{ flexDirection: "row", gap: "2rem" }}
                        >
                          <div
                            className="width-div-container-profile-css"
                            style={{
                              position: "relative",
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faEye}
                              style={{
                                position: "absolute",
                                right: "7px",
                                bottom: "20%",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                setviewingPassword(!viewingPassword);
                              }}
                            />
                            <label htmlFor="password">Password</label>
                            <Field
                              type={viewingPassword ? "text" : "password"}
                              name="password"
                              id="password"
                              value={values.password}
                            />
                            {errors.password && touched.password ? (
                              <span className="error-class-profile password-errors-profile">
                                {errors.password}
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                          <div
                            className="width-div-container-profile-css"
                            style={{ position: "relative" }}
                          >
                            <label htmlFor="confirmpassword">
                              Confirm Password
                            </label>
                            <Field
                              type="password"
                              name="confirmpassword"
                              id="confirmpassword"
                              value={values.confirmpassword}
                            />
                            {errors.confirmpassword &&
                            touched.confirmpassword ? (
                              <span className="password-errors-profile error-class-profile">
                                {errors.confirmpassword}
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      ) : (
                        <div
                          className="profile-edit-form-row"
                          style={{
                            position: "relative",
                          }}
                        >
                          <span
                            style={{
                              color: "blue",
                              textDecoration: "underline",
                              position: "absolute",
                              right: "0",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              setPasswordChanging(true);
                            }}
                          >
                            Change?
                          </span>
                          <FontAwesomeIcon
                            icon={faEye}
                            style={{
                              position: "absolute",
                              right: "7px",
                              bottom: "20%",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              setviewingPassword(!viewingPassword);
                            }}
                          />

                          <label htmlFor="password">Password</label>
                          <Field
                            style={{ cursor: "not-allowed" }}
                            type={viewingPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            value={values.password}
                            disabled={true}
                          />
                        </div>
                      )}

                      <div className="profile-edit-submit-button">
                        <button>Cancel</button>
                        <button
                          style={{
                            background: "rgb(138 43 6 / 84%)",
                            color: "#fff",
                          }}
                          type="submit"
                        >
                          Save
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          ) : activeMenu === 2 ? (
            <MyOrders setActiveMenu={setActiveMenu} />
          ) : (
            <AboutUs />
          )}
        </div>
      </div>
    </>
  );
}

export default MyProfile;
