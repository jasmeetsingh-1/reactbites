import Modal from "../Modal";
import "../cssFiles/CartModal/Cart.css";
import { useSelector } from "react-redux";

function Cart(props) {
  const cartItems = useSelector((state) => state.cartStore);
  return (
    <Modal className="cart-holder-cartfile" onClick={props.closeCart}>
      <div className="cart-holder-cartfile">
        <div className="heading-div-cartfile">
          <h4>Your Cart</h4>
        </div>
        <div style={{ maxHeight: "11rem", overflow: "auto" }}>
          {cartItems.cart.map((item) => {
            return (
              <div className="Cart-items-holder-cartfile">
                <div className="main-content-cartitem">
                  <div>
                    <p>{item.name}</p>
                    <button>-</button>
                    <button>+</button>
                  </div>
                  <div className="amount-holder-cartitem">x{item.amount}</div>
                </div>
                <div className="amount-cartitem">₹{item.price}</div>
              </div>
            );
          })}
        </div>
        <div className="total-amount-container-cartfile">
          <p>Total Amount</p>
          <span>₹{cartItems.totalAmount}</span>
        </div>
        <div className="buttons-container-cartfiles">
          <button>Close</button>
          <button>Clear</button>
          <button style={{ backgroundColor: "#541904", color: "white" }}>
            Order
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default Cart;
