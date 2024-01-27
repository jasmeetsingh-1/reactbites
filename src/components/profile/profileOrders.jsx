import amount_image from "../../assets/order_amount_profileModal.svg";
import date_image from "../../assets/order_Date_profileModal.svg";
import order_id_image from "../../assets/order_id_image_profileModal.svg";
import { Table } from "react-bootstrap";
import "../cssFIles/profile/profileOrders.css";

function MyOrders() {
  return (
    <>
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

            <div className="order-delivery-address-holder">
              <Table striped>
                <tbody>
                  <tr>
                    <td className="no-boder-table-tr-bootstrap">Name:</td>
                    <td className="no-boder-table-tr-bootstrap">
                      Jasmeet Singh
                    </td>
                  </tr>
                  <tr>
                    <td className="no-boder-table-tr-bootstrap">
                      Contact No.:
                    </td>
                    <td className="no-boder-table-tr-bootstrap">9877998276</td>
                  </tr>
                  <tr>
                    <td className="no-boder-table-tr-bootstrap">Address:</td>
                    <td className="no-boder-table-tr-bootstrap">
                      262B, Guru Arjan Dev Nagar, near Putlighar, Amritsar,
                      Punjab
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          <div>
            <span>Cart items</span>
            <div className="cart-item-holder-profileModal">
              <div className="amount-holder-cart-item-profileModal">x1</div>
              <div>Chicken Lemon Coriander Soup</div>
              <div style={{ color: "#962000" }}>₹345</div>
            </div>
            <div className="cart-item-holder-profileModal">
              <div className="amount-holder-cart-item-profileModal">x1</div>
              <div>Chicken Lemon Coriander Soup</div>
              <div style={{ color: "#962000" }}>₹345</div>
            </div>
            <div
              className="cart-item-holder-profileModal"
              style={{ borderTop: "1px solid black", padding: "14px 0 0 0 " }}
            >
              <div style={{ fontWeight: "800", width: "90%" }}>SubTotal</div>
              <div style={{ color: "#962000" }}>₹690</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MyOrders;
