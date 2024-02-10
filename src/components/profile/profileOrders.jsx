import amount_image from "../../assets/order_amount_profileModal.svg";
import date_image from "../../assets/order_Date_profileModal.svg";
import order_id_image from "../../assets/order_id_image_profileModal.svg";
import "../cssFIles/profile/profileOrders.css";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function MyOrders() {
  const loginData = useSelector((state) => state.loginStore);
  const [showingOrder, setShowingOrder] = useState(0);
  useEffect(() => {
    console.log(loginData.data.orders.length);
  }, []);
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
              <p>#{loginData.data.orders[showingOrder].orderId}</p>
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
              <p style={{ color: "#962000" }}>
                ₹{loginData.data.orders[showingOrder].orderTotal}
              </p>
            </div>
          </div>
          <div style={{ justifyContent: "center" }}>
            <button className="order-again-image-profilModal">
              ORDER AGAIN
            </button>
          </div>
        </div>
        <div
          className="profile-modal-right-holder"
          style={{ position: "relative" }}
        >
          <div>
            <span>Delivered At</span>

            <div className="order-delivery-address-holder">
              <Table striped>
                <tbody>
                  <tr>
                    <td className="no-boder-table-tr-bootstrap">Name:</td>
                    <td className="no-boder-table-tr-bootstrap">
                      {loginData.data.orders[showingOrder].orderAddress.name}
                    </td>
                  </tr>
                  <tr>
                    <td className="no-boder-table-tr-bootstrap">
                      Contact No.:
                    </td>
                    <td className="no-boder-table-tr-bootstrap">
                      {
                        loginData.data.orders[showingOrder].orderAddress
                          .phonenumber
                      }
                    </td>
                  </tr>
                  <tr>
                    <td className="no-boder-table-tr-bootstrap">Address:</td>
                    <td className="no-boder-table-tr-bootstrap">
                      {loginData.data.orders[showingOrder].orderAddress.address}{" "}
                      , {loginData.data.orders[showingOrder].orderAddress.city}{" "}
                      , {loginData.data.orders[showingOrder].orderAddress.state}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          <div>
            <span>Cart items</span>
            {loginData.data.orders[showingOrder].orderItems.map((item) => {
              return (
                <div className="cart-item-holder-profileModal">
                  <div className="amount-holder-cart-item-profileModal">
                    x{item.amount}
                  </div>
                  <div>{item.name}</div>
                  <div style={{ color: "#962000" }}>₹{item.price}</div>
                </div>
              );
            })}

            <div
              className="cart-item-holder-profileModal"
              style={{ borderTop: "1px solid black", padding: "14px 0 0 0 " }}
            >
              <div style={{ fontWeight: "800", width: "80%" }}>SubTotal</div>
              <div style={{ color: "#962000" }}>
                ₹{loginData.data.orders[showingOrder].orderTotal}
              </div>
            </div>
          </div>
          {loginData.data.orders.length > 1 &&
          showingOrder < loginData.data.orders.length - 1 ? (
            <span
              className="show-orders-next-button"
              onClick={() => {
                setShowingOrder(showingOrder + 1);
              }}
            >
              Next
            </span>
          ) : (
            ""
          )}
          {loginData.data.orders.length > 1 && showingOrder != 0 ? (
            <span
              className="show-orders-next-button"
              style={{ left: "80%" }}
              onClick={() => {
                setShowingOrder(showingOrder - 1);
              }}
            >
              Prev
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
export default MyOrders;
