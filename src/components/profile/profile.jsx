import React, { useEffect, useState } from "react";
import "../cssFIles/profile/profile.css";
import Sidebar from "./sidebar";
import { Formik, Form, Field, ErrorMessage } from "formik";

function MyProfile() {
  const [activeMenu, setActiveMenu] = useState(1);
  const initialValues = {
    name: "name test",
    username: "username test",
    email: "email test",
    address: "address test",
    phonenumber: "phonenumber",
    city: "city test",
    state: "state test",
    password: "password test",
    confirmpassword: "confirm password test",
  };
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
                    <div className="profile-edit-form-row">
                      <div>
                        <label htmlFor="name">Name</label>
                        <Field name="name" id="name" value={values.name} />
                      </div>
                      <div>
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
                    <div className="profile-edit-form-row">
                      <label htmlFor="address">Adress</label>
                      <Field
                        name="address"
                        id="address"
                        value={values.address}
                      />
                    </div>
                    <div className="profile-edit-form-row">
                      <label htmlFor="phonenumber">Contact No</label>
                      <Field
                        name="phonenumber"
                        id="phonenumber"
                        value={values.phonenumber}
                      />
                    </div>
                    <div className="profile-edit-form-row">
                      <label htmlFor="city">City</label>
                      <Field name="city" id="city" value={values.city} />

                      <label htmlFor="username">State</label>
                      <Field name="state" id="state" value={values.state} />
                    </div>

                    <div className="profile-edit-form-row">
                      <label htmlFor="password">Password</label>
                      <Field
                        type="password"
                        name="password"
                        id="password"
                        value={values.password}
                      />
                    </div>
                    <div className="profile-edit-submit-button">
                      <button type="submit">Submit</button>
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
