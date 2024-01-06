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
    <Modal
      show={props.show}
      onHide={props.onHide}
      contentClassName="modal-resize-profileModal"
    >
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
        <div className="profile-modal-right-holder">
          <div>
            <span>Delivered At</span>
            {/* remove this and use table here */}
            <div className="order-delivery-address-holder">
              <div className="order-delivery-address-row">
                <p>Name:</p>
                <p>Jasmeet Singh</p>
              </div>
              <div className="order-delivery-address-row">
                <p>Contact No.:</p>
                <p>9877998276</p>
              </div>
              <div className="order-delivery-address-row">
                <p>Address:</p>
                <p>
                  262B, Guru Arjan Dev Nagar, near Putlighar, Amritsar, Punjab
                </p>
              </div>
            </div>
          </div>
          <div>
            <span>Cart items</span>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default Profile;
