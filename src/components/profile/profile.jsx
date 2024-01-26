import React, { useEffect, useState } from "react";
import "../cssFIles/profile/profile.css";
import Sidebar from "./sidebar";
import { useSelector } from "react-redux";

import { Formik, Form, Field, ErrorMessage } from "formik";

function MyProfile() {
  const [activeMenu, setActiveMenu] = useState(1);
  const [passwordChanging, setPasswordChanging] = useState(false);
  const loginData = useSelector((state) => state.loginStore);
  const initialValues = {
    name: loginData.data.name,
    username: loginData.data.username,
    email: loginData.data.email,
    // address: "address test",
    phonenumber: "phonenumber",
    // city: "city test",
    // state: "state test",
    password: loginData.data.password,
    confirmpassword: loginData.data.password,
  };

  useEffect(() => {
    console.log({ loginData });
  }, []);
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}
      >
        <div className="profile-css-main-div">
          <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
          <div className="profile-css-form-div-holder">
            <div className="profile-change-div-heading">Edit Profile</div>
            <div className="profile-change-div-form">
              <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                  console.log("values", values);
                }}
              >
                {({ values }) => (
                  <Form>
                    <div
                      className="profile-edit-form-row"
                      style={{ flexDirection: "row", gap: "2rem" }}
                    >
                      <div className="width-div-container-profile-css">
                        <label htmlFor="name">Name</label>
                        <Field name="name" id="name" value={values.name} />
                      </div>
                      <div className="width-div-container-profile-css">
                        <label htmlFor="username">Username</label>
                        <Field
                          name="username"
                          id="username"
                          value={values.username}
                        />
                      </div>
                    </div>
                    <div className="profile-edit-form-row">
                      <label htmlFor="email">Email</label>
                      <Field name="email" id="email" value={values.email} />
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
                      <label htmlFor="phonenumber">Contact Number</label>
                      <Field
                        name="phonenumber"
                        id="phonenumber"
                        value={values.phonenumber}
                      />
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
                        <div className="width-div-container-profile-css">
                          <label htmlFor="password">Password</label>
                          <Field
                            type="password"
                            name="password"
                            id="password"
                            value={values.password}
                          />
                        </div>
                        <div className="width-div-container-profile-css">
                          <label htmlFor="confirmpassword">
                            Confirm Password
                          </label>
                          <Field
                            type="password"
                            name="confirmpassword"
                            id="confirmpassword"
                            value={values.confirmpassword}
                          />
                        </div>
                      </div>
                    ) : (
                      <div
                        className="profile-edit-form-row"
                        style={{ position: "relative" }}
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
                        <label htmlFor="password">Password</label>
                        <Field
                          type="password"
                          name="password"
                          id="password"
                          value={values.password}
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
        </div>
      </div>
    </>
  );
}

export default MyProfile;
