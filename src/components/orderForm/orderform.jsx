import React, { useEffect } from "react";
import "../cssFIles/orderForm/orderform.css";
import { useSelector, useDispatch } from "react-redux";
import { ordersReducers } from "../redux-store/store";
import { useFormik } from "formik";
import * as Yup from "yup";
import Footer from "../footer/footer";

function OrderForm() {
  const loginData = useSelector((state) => state.loginStore);
  const cartItems = useSelector((state) => state.cartStore);
  const dispatch = useDispatch();

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const initialValues = {
    name: loginData.data.name,
    phonenumber: "",
    address: "",
    city: "",
    state: "",
  };

  const validation = Yup.object({
    name: Yup.string().required(""),
    phonenumber: Yup.number().required("Enter phone number"),
    address: Yup.string().required("Enter Address"),
    city: Yup.string().required("Enter City"),
    state: Yup.string().required("Enter State"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validation,
    onSubmit: (values) => {
      const formdata = {
        name: values.name,
        phonenumber: values.phonenumber,
        address: values.address,
        city: values.city,
        state: values.state,
      };
      console.log(formdata);
      const orderPayload = {
        orderAddress: formdata,
        loginEmail: loginData.data.email,
        orderTotal: cartItems.totalAmount,
        cartItems: cartItems.cart,
      };
      dispatch(ordersReducers.addToOrders(orderPayload));
    },
  });

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}
      >
        <div className="outer-order-form-holder">
          <div className="left-heading-holder-orderform">
            <h3>Indulge in Comfort:</h3>
            <p>Where Should We Deliver Your Culinary Bliss?</p>
          </div>
          <div>
            <form onSubmit={formik.handleSubmit}>
              <div className="input-holder-orderform">
                <label htmlFor="username">
                  NAME<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  name="username"
                  id="username"
                  value={capitalizeFirstLetter(loginData.data.name)}
                  disabled
                  placeholder="ENTER YOUR NAME"
                  style={{ cursor: "not-allowed" }}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="input-holder-orderform">
                <label htmlFor="phonenumber">
                  PHONE NUMBER<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  name="phonenumber"
                  id="phonenumber"
                  type="number"
                  placeholder="ENTER YOUR PHONE NUMBER"
                  value={formik.values.phonenumber}
                  onChange={formik.handleChange}
                />
                {formik.errors.phonenumber && formik.touched.phonenumber ? (
                  <p
                    style={{
                      color: "red",
                      position: "absolute",
                      top: "75px",
                      right: "0",
                      margin: "0",
                    }}
                  >
                    {formik.errors.phonenumber}
                  </p>
                ) : null}
              </div>
              <div className="input-holder-orderform">
                <label htmlFor="address">
                  ADDRESS<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  name="address"
                  id="address"
                  type="text"
                  placeholder="ENTER YOUR ADDRESS"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                />
                {formik.errors.address && formik.touched.address ? (
                  <p
                    style={{
                      color: "red",
                      position: "absolute",
                      top: "75px",
                      right: "0",
                      margin: "0",
                    }}
                  >
                    {formik.errors.address}
                  </p>
                ) : null}
              </div>
              <div className="input-holder-orderform">
                <label htmlFor="city">
                  CITY<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  name="city"
                  id="city"
                  type="text"
                  placeholder="ENTER YOUR CITY"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                />
                {formik.errors.city && formik.touched.city ? (
                  <p
                    style={{
                      color: "red",
                      position: "absolute",
                      top: "75px",
                      right: "0",
                      margin: "0",
                    }}
                  >
                    {formik.errors.city}
                  </p>
                ) : null}
              </div>
              <div className="input-holder-orderform">
                <label htmlFor="state">
                  STATE<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  name="state"
                  id="state"
                  type="text"
                  placeholder="ENTER YOUR STATE"
                  value={formik.values.state}
                  onChange={formik.handleChange}
                />
                {formik.errors.state && formik.touched.state ? (
                  <p
                    style={{
                      color: "red",
                      position: "absolute",
                      top: "75px",
                      right: "0",
                      margin: "0",
                    }}
                  >
                    {formik.errors.state}
                  </p>
                ) : null}
              </div>
              <div className="input-holder-orderform">
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OrderForm;
