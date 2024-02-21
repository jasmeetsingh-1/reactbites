import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import "./cssFiles/paymentModal.css";
import Lottie from "lottie-react";
import paymentAnnimation from "../../assets/arrowPaymentAnnimation.json";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import backButton from "../../assets/back-arrow-svgrepo-com.svg";
import closeButton from "../../assets/close-svgrepo-com.svg";
import {
  signUpReducers,
  loginReducers,
  cartItemReducers,
} from "../redux-store/store";

function PaymentModal({ showModal, onHide, showPaymentModal }) {
  const [paymentOption, setPaymentOption] = useState("none");
  const [otpButtonClicked, setOtpButtonClicked] = useState(false);
  const [otpValue, setOtpValue] = useState();
  const [otpValidated, setOtpValidated] = useState(false);

  useEffect(() => {
    setPaymentOption("none");
    setOtpButtonClicked(false);
    setOtpValidated(false);
  }, []);

  const initialBankingDetails = {
    cardHolderName: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvvNumber: "",
  };

  const validationSchemaNetBanking = Yup.object({
    cardHolderName: Yup.string().required("Please enter your name"),
    cardNumber: Yup.string()
      .required("Please enter your card.")
      .min(16, "Card number must be 16 digits"),
    expMonth: Yup.string().required("Please choose exp month/year."),
    expYear: Yup.string().required("Please choose exp month/year"),
    cvvNumber: Yup.string()
      .required("Please enter your CVV.")
      .min(3, "CVV can only be 3 digits"),
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

  const expMonthOptions = [
    { label: 1, value: "January" },
    { label: 2, value: "February" },
    { label: 3, value: "March" },
    { label: 4, value: "April" },
    { label: 5, value: "May" },
    { label: 6, value: "June" },
    { label: 7, value: "July" },
    { label: 8, value: "August" },
    { label: 9, value: "September" },
    { label: 10, value: "October" },
    { label: 11, value: "November" },
    { label: 12, value: "December" },
  ];

  //   const payButtonHandle = () => {
  //     dispatch(signUpReducers.addToOrders(orderPayload));
  //     dispatch(loginReducers.addingOrderToLogin(orderPayload));
  //     dispatch(cartItemReducers.cartItemClear());
  //   };

  const expYearOption = [2023, 2024, 2025, 2026, 2027, 2028, 2029];
  return (
    <>
      <Modal show={showModal} onHide={onHide}>
        <Modal.Header
          className="payment-modal-heading-section"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              setPaymentOption("none");
            }}
          >
            <img src={backButton} alt="back button" width="20px" />
          </div>
          <span className="payment-option-heading">Choose your payment</span>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              onHide();
            }}
          >
            <img src={closeButton} alt="close button" width="20px" />
          </div>
        </Modal.Header>

        <Modal.Body className="payment-modal-heading-section">
          <div className="modal-body-holder">
            {paymentOption === "none" ? (
              <>
                <button
                  onClick={() => {
                    setPaymentOption("upi");
                  }}
                >
                  Proceed with UPI{" "}
                  <Lottie
                    animationData={paymentAnnimation}
                    loop={true}
                    autoplay={true}
                    style={{ height: 50 }}
                  />
                </button>
                <button
                  onClick={() => {
                    setPaymentOption("netbanking");
                  }}
                >
                  Proceed with NetBanking{" "}
                  <Lottie
                    animationData={paymentAnnimation}
                    loop={true}
                    autoplay={true}
                    style={{ height: 50 }}
                  />
                </button>
              </>
            ) : (
              ""
            )}

            {paymentOption === "upi" ? (
              <button className="selected-payment-option">
                Proceed with UPI{" "}
                <Lottie
                  animationData={paymentAnnimation}
                  loop={true}
                  autoplay={true}
                  style={{ height: 50 }}
                />
              </button>
            ) : (
              ""
            )}

            {paymentOption === "netbanking" ? (
              <>
                <button className="selected-payment-option">
                  Proceed with NetBanking{" "}
                  <Lottie
                    animationData={paymentAnnimation}
                    loop={true}
                    autoplay={true}
                    style={{ height: 50 }}
                  />
                </button>

                <div className="netbanking-heading">
                  Enter your payment Details.{" "}
                  <span>
                    By continuing you agree to our{" "}
                    <span
                      style={{
                        color: "#6979F8",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      Terms
                    </span>{" "}
                  </span>
                </div>

                <Formik
                  initialValues={initialBankingDetails}
                  validationSchema={validationSchemaNetBanking}
                  onSubmit={(values, { resetForm }) => {
                    console.log("form submitted");
                    console.log({ values });
                    setOtpButtonClicked(true);
                  }}
                >
                  {({
                    values,
                    handleChange,
                    resetForm,
                    errors,
                    touched,
                    handleSubmit,
                  }) => (
                    <Form className="form-holder-netbanking">
                      <div className="netbanking-form-row">
                        <label htmlFor="cardHolderName">Cardholder Name</label>
                        <Field
                          className="field-netbanking-form"
                          type="text"
                          placeholder="Enter name on your card"
                          name="cardHolderName"
                          id="cardHolderName"
                          onKeyPress={(e) => {
                            if (
                              !/^[a-zA-Z ]*$/.test(e.key) ||
                              e.target.value.length > 49
                            )
                              e.preventDefault();
                          }}
                        />
                        {errors.cardHolderName && touched.cardHolderName ? (
                          <span
                            className="formik-error-netbanking-form"
                            style={{ top: "44%" }}
                          >
                            {errors.cardHolderName}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>

                      <div className="netbanking-form-row">
                        <label htmlFor="cardNumber">Card Number</label>
                        <Field
                          className="field-netbanking-form"
                          type="text"
                          placeholder="Enter your card no."
                          name="cardNumber"
                          id="cardNumber"
                          onKeyPress={(e) => {
                            if (
                              !/^[0-9]*$/.test(e.key) ||
                              e.target.value.length > 15
                            )
                              e.preventDefault();
                          }}
                        />
                        {errors.cardNumber && touched.cardNumber ? (
                          <span
                            className="formik-error-netbanking-form"
                            style={{ top: "63%" }}
                          >
                            {errors.cardNumber}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>

                      <div className="netbanking-form-row-two-cols">
                        <div className="netbanking-col">
                          <div
                            style={{ width: "100%" }}
                            className="netbanking-col-cvv"
                          >
                            <label htmlFor="expYear">Exp Month/ Year</label>
                            <div>
                              <Field
                                className="select-options-netbanking"
                                as="select"
                                name="expMonth"
                              >
                                {expMonthOptions.map((item) => {
                                  return (
                                    <option value={item.value} key={item.label}>
                                      {item.label}
                                    </option>
                                  );
                                })}
                              </Field>
                              <span> / </span>
                              <Field
                                className="select-options-netbanking"
                                as="select"
                                name="expYear"
                              >
                                {expYearOption.map((item) => {
                                  return (
                                    <option value={item} key={item}>
                                      {item}
                                    </option>
                                  );
                                })}
                              </Field>
                              {errors.expMonth && touched.expMonth ? (
                                <span
                                  className="formik-error-netbanking-form"
                                  style={{ top: "82%", left: "25px" }}
                                >
                                  {errors.expMonth}
                                </span>
                              ) : (
                                ""
                              )}
                              {errors.expYear && touched.expYear ? (
                                <span
                                  className="formik-error-netbanking-form"
                                  style={{ top: "82%", left: "25px" }}
                                >
                                  {errors.expYear}
                                </span>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="netbanking-col-cvv">
                          <label htmlFor="cvvNumber">CVV</label>
                          <Field
                            className="field-netbanking-form"
                            type="password"
                            name="cvvNumber"
                            id="cvvNumber"
                            onKeyPress={(e) => {
                              if (
                                !/^[0-9]*$/.test(e.key) ||
                                e.target.value.length > 2
                              )
                                e.preventDefault();
                            }}
                          />
                          {errors.cvvNumber && touched.cvvNumber ? (
                            <span
                              className="formik-error-netbanking-form"
                              style={{ top: "82%" }}
                            >
                              {errors.cvvNumber}
                            </span>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>

                      {otpButtonClicked ? (
                        <>
                          <div
                            className="netbanking-form-row-two-cols"
                            style={{ justifyContent: "center" }}
                          >
                            <div className="netbanking-col">
                              <div
                                style={{ width: "100%" }}
                                className="netbanking-col-cvv"
                              >
                                <label htmlFor="otp">
                                  Enter OTP sent on{" "}
                                  <i
                                    style={{
                                      color: "blue",
                                      textDecoration: "underline",
                                      cursor: "pointer",
                                    }}
                                  >
                                    xxxxxx8276
                                  </i>
                                </label>
                                <div>
                                  <input
                                    className="field-netbanking-form"
                                    type="text"
                                    name="otp"
                                    id="otp"
                                    value={otpValue}
                                    onChange={(e) => {
                                      if (
                                        /^[0-9]*$/.test(e.target.value) &&
                                        e.target.value.length <= 4
                                      )
                                        setOtpValue(e.target.value.trim());
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div style={{ textAlign: "center" }}>
                            {otpValidated ? (
                              <button
                                className="btn btn-success"
                                onClick={(e) => {
                                  e.preventDefault();
                                  showPaymentModal();
                                }}
                              >
                                Pay
                              </button>
                            ) : (
                              <button
                                className="btn btn-secondary"
                                onClick={(e) => {
                                  e.preventDefault();
                                  if (otpValue === "1234") {
                                    toast.success("OTP verified", toastConfig);
                                    setOtpValidated(true);
                                  } else {
                                    toast.error("Invalid OTP", toastConfig);
                                  }
                                }}
                              >
                                Verify
                              </button>
                            )}
                          </div>
                        </>
                      ) : (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <button
                            type="submit"
                            className="get-Otp-button-netbanking"
                            onClick={() => {
                              handleSubmit();
                            }}
                          >
                            Get OTP
                          </button>
                        </div>
                      )}
                    </Form>
                  )}
                </Formik>
              </>
            ) : (
              ""
            )}
          </div>
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default PaymentModal;
