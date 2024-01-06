import { Modal, ModalBody } from "react-bootstrap";
import { useEffect, useState } from "react";
import "../cssFiles/ProfileModal/profileModal.css";
import { Field, Formik } from "formik";
import amount_image from "../../../assets/order_amount_profileModal.svg";
import date_image from "../../../assets/order_Date_profileModal.svg";
import order_id_image from "../../../assets/order_id_image_profileModal.svg";

const initialValues = {
  name: "Jasmeet",
  username: "jasmeet_test",
  email: "jasmeet@gmail.com",
};

const onSubmitHandler = (values) => {
  console.log("formik values>>>>", values);
};
function Profile(props) {
  const [formDisabled, setformDisabled] = useState(true);

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <div className="profile-holder-outer-div">
        <div className="profile-modal-left-holder">
          <div className="gradient-border">
            <img
              src={order_id_image}
              alt="order_id"
              title="order_id"
              className="img-profile-holder-left-div"
            />
            <div>
              <span>Order ID</span>
              <p>#1</p>
            </div>
          </div>
          <div className="gradient-border">
            <img
              src={date_image}
              alt="order_date"
              title="order_date"
              className="img-profile-holder-left-div"
            />
            <div>
              <span>Ordered On</span>
              <p>12 Dec, 2023</p>
            </div>
          </div>
          <div className="gradient-border">
            <img
              src={amount_image}
              alt="order_amount"
              title="order_amount"
              className="img-profile-holder-left-div"
            />
            <div>
              <span>Total Amount</span>
              <p style={{ color: "#962000" }}>₹690</p>
            </div>
          </div>
          <div style={{ justifyContent: "center" }}>
            <button className="order-again-image-profilModal">
              ORDER AGAIN
            </button>
          </div>
        </div>
        <div className="profile-modal-right-holder">cart and address</div>
      </div>
    </Modal>
  );
}

export default Profile;
