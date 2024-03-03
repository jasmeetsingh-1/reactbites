import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import noOrderPlacedAnnimation from "../../assets/no order placed annimation.json";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";

function NoOrders({ setActiveMenu }) {
  const navigate = useNavigate();
  const [noOrderModal, setNoOrderModal] = useState(true);
  return (
    <>
      <Modal
        show={noOrderModal}
        onHide={() => {
          setNoOrderModal(false);
          setActiveMenu(1);
        }}
        contentClassName="main-modal-orderplacedModal"
      >
        <div
          className="animation-holder-orderPlacedModal"
          style={{ minWidth: "280px", minHeight: "280px" }}
        >
          <Lottie
            animationData={noOrderPlacedAnnimation}
            loop={true}
            autoplay={true}
          />
        </div>
        <div className="content-holder-div-orderPlacedModal">
          <h3>No Order Placed</h3>
          <p>
            Unfortunately, your order is still missing from our records at
            REACTBITES.
          </p>
        </div>

        <div className="order-placed-modal-div-button">
          {/* <div
            onClick={() => {
              navigate("/my_profile");
            }}
          >
            View your Profile
          </div> */}
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Go To Home Page
          </button>
        </div>
      </Modal>
    </>
  );
}

export default NoOrders;
