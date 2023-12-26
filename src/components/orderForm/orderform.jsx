import React from "react";
import "../cssFIles/orderForm/orderform.css";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import Footer from "../footer/footer";

function OrderForm() {
  const loginData = useSelector((state) => state.loginStore);
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
    phonenumber: Yup.number().required(""),
    address: Yup.string().required(),
    city: Yup.string().required(),
    state: Yup.string().required(),
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
      // formik.resetForm();
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
                <label htmlFor="username">NAME</label>
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
                <label htmlFor="phonenumber">PHONE NUMBER</label>
                <input
                  name="phonenumber"
                  id="phonenumber"
                  type="number"
                  placeholder="ENTER YOUR PHONE NUMBER"
                />
              </div>
              <div className="input-holder-orderform">
                <label htmlFor="address">ADDRESS</label>
                <input
                  name="address"
                  id="address"
                  type="text"
                  placeholder="ENTER YOUR ADDRESS"
                />
              </div>
              <div className="input-holder-orderform">
                <label htmlFor="city">CITY</label>
                <input
                  name="city"
                  id="city"
                  type="text"
                  placeholder="ENTER YOUR CITY"
                />
              </div>
              <div className="input-holder-orderform">
                <label htmlFor="state">STATE</label>
                <input
                  name="state"
                  id="state"
                  type="text"
                  placeholder="ENTER YOUR STATE"
                />
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
