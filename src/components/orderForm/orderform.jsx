import React, { useEffect, useState } from "react";
import "../cssFIles/orderForm/orderform.css";
import { useSelector, useDispatch } from "react-redux";
// import { ordersReducers } from "../redux-store/store";
import {
  signUpReducers,
  loginReducers,
  cartItemReducers,
} from "../redux-store/store";
import { useFormik } from "formik";
import * as Yup from "yup";
import OrderPlaced from "../Modals/OrderPlacedModal/OrderPlacedModal";
import { useNavigate } from "react-router-dom";
import PaymentModal from "../Modals/paymentModal";

function OrderForm() {
  const [OrderPlacedModal, setOrderPlacedModal] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);
  const signupData = useSelector((state) => state.signupStore.signupdata);
  const loginData = useSelector((state) => state.loginStore);
  const cartItems = useSelector((state) => state.cartStore);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  useEffect(() => {
    if (cartItems.totalAmount == 0) {
      navigate("/");
    }
  }, []);
  const initialValues = {
    name: loginData.data.name,
    email: loginData.data.email,
    phonenumber: loginData.data.phonenumber,
    address: "",
    city: "",
    state: "",
  };

  const validation = Yup.object({
    name: Yup.string().required(""),
    phonenumber: Yup.string()
      .matches(/^[^0-5]/, "Enter valid phone number")
      .matches(/^\d+$/, "Enter valid phone number")
      .required("Enter Phone number")
      .length(10, "Enter 10 Digits phone number"),
    address: Yup.string().required("Enter Address"),
    city: Yup.string().required("Enter City"),
    state: Yup.string().required("Enter State"),
  });

  const OrderPlacedFromSubmitHandle = (values) => {
    const formdata = {
      name: values.name,
      phonenumber: values.phonenumber,
      address: values.address,
      city: values.city,
      state: values.state,
    };
    const orderPayload = {
      orderAddress: formdata,
      loginEmail: loginData.data.email,
      orderTotal: cartItems.totalAmount,
      cartItems: cartItems.cart,
    };
    console.log("orderpaylad>>>>", orderPayload);
    setPaymentModal(true);
    dispatch(signUpReducers.addToOrders(orderPayload));
    dispatch(loginReducers.addingOrderToLogin(orderPayload));
    dispatch(cartItemReducers.cartItemClear());
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validation,
    onSubmit: OrderPlacedFromSubmitHandle,
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
              <div className="input-holder-orderform invalid-form-holder">
                <div className="invalid-field-holder-orderform">
                  <label
                    htmlFor="username"
                    style={{ position: "relative", top: "-20px" }}
                  >
                    NAME<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    name="username"
                    id="username"
                    value={capitalizeFirstLetter(loginData.data.name)}
                    disabled
                    placeholder="ENTER YOUR NAME"
                    style={{
                      cursor: "not-allowed",
                      color: "#ffffffab",
                      position: "absolute",
                    }}
                    onChange={formik.handleChange}
                  />
                </div>

                <div className="invalid-field-holder-orderform email-field-holder-orderForm">
                  <label
                    htmlFor="email"
                    style={{ position: "relative", top: "-20px" }}
                  >
                    EMAIL<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    name="email"
                    id="email"
                    value={formik.values.email}
                    disabled
                    placeholder="ENTER YOUR EMAIL"
                    style={{
                      cursor: "not-allowed",
                      color: "#ffffffab",
                    }}
                    onChange={formik.handleChange}
                  />
                </div>
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
                  onChange={(e) => {
                    // if (formik.values.phonenumber.length <= 10)
                    console.log("value>>>", e.target.value);
                    formik.handleChange(e);
                  }}
                />
                {formik.errors.phonenumber && formik.touched.phonenumber ? (
                  <p className="error-class-orderform">
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
                  <p className="error-class-orderform">
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
                  <p className="error-class-orderform">{formik.errors.city}</p>
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
                  <p className="error-class-orderform">{formik.errors.state}</p>
                ) : null}
              </div>
              <div className="input-holder-orderform">
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <PaymentModal
        showModal={paymentModal}
        onHide={() => {
          setPaymentModal(false);
        }}
        showPaymentModal={() => {
          setPaymentModal(false);
          setOrderPlacedModal(true);
        }}
      />
      <OrderPlaced
        show={OrderPlacedModal}
        onHide={() => {
          setOrderPlacedModal(false);
        }}
      />
    </>
  );
}

export default OrderForm;
