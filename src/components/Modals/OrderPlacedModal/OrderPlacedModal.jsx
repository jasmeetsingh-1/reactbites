import { Modal } from "react-bootstrap";
import React, { useState } from "react";
import "../cssFiles/OrderPlacedModal/OrderPlacedModal.css";
import Lottie from "lottie-react";
import OrderPlacedAnimation from "../../../assets/OrderPlacedAnimation.json";

function OrderPlaced(props) {
  const [showModal, setShowModal] = useState(true);
  return (
    // <Modal show={props.show} onHide={props.onHide}>
    <Modal
      show={showModal}
      onHide={() => {
        setShowModal(false);
      }}
      contentClassName="main-modal-orderplacedModal"
    >
      <div className="animation-holder-orderPlacedModal">
        {/* try that after some time the animation again happen and then againn stop .. like 2-3 seconds */}
        <Lottie
          animationData={OrderPlacedAnimation}
          loop={false}
          autoplay={true}
        />
      </div>
      <div className="content-holder-div-orderPlacedModal">
        <h3>Order Placed Sucessfully</h3>
        <p>
          You’ve successfully placed an order of ₹970.00 (Nine hundred Ninety
          only) from <span style={{ color: "#8A2B06" }}>REACTBITES!</span>
        </p>
      </div>
      <div style={{ width: "85%" }}>
        <div className="included-main-holder-stepmodal1">
          <div className="included-row-holder-stepmodal1">
            <span className="included-items-plans-stepmodal1 white-color">
              Status
            </span>
            <span
              className="included-items-plans-stepmodal1"
              style={{ color: "black", fontSize: "20px !important" }}
            >
              Completed
            </span>
          </div>
          <div className="included-row-holder-stepmodal1">
            <span className="included-items-plans-stepmodal1 white-color">
              Order ID
            </span>
            <span
              className="included-items-plans-stepmodal1"
              style={{ color: "black", fontSize: "20px !important" }}
            >
              #1
            </span>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default OrderPlaced;
