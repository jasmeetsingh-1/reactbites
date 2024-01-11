import Modal from "../Modal";
import "../cssFiles/CartModal/Cart.css";
import { cartItemReducers } from "../../redux-store/store";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Cart(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cartStore);
  const loginStore = useSelector((state) => state.loginStore);

  const handleOrderSubmit = () => {
    console.log("button clicked");
    props.closeCart();
    if (loginStore.isloggedIn) navigate("/order");
    else navigate("/login");
  };
  return (
    <Modal className="cart-holder-cartfile" onClick={props.closeCart}>
      <div className="cart-holder-cartfile">
        <div className="heading-div-cartfile">
          <h4>Your Cart</h4>
        </div>
        <div style={{ maxHeight: "13rem", overflow: "auto" }}>
          {cartItems.cart.map((item) => {
            return (
              <div className="Cart-items-holder-cartfile">
                <div className="main-content-cartitem">
                  <div>
                    <p>{item.name}</p>
                    <button
                      onClick={(e) => {
                        dispatch(cartItemReducers.cartItemRemove(item.id));
                      }}
                    >
                      -
                    </button>
                    <button
                      onClick={(e) => {
                        const payload = {
                          id: item.id,
                          name: item.name,
                          amount: 1,
                          price: item.price,
                        };
                        dispatch(cartItemReducers.cartItemsAdded(payload));
                      }}
                    >
                      +
                    </button>
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
          {cartItems.cart.length > 0 ? (
            <>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(cartItemReducers.cartItemClear());
                  setTimeout(() => {
                    props.closeCart();
                  }, 500);
                }}
              >
                Clear
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  props.closeCart();
                }}
              >
                Close
              </button>{" "}
            </>
          ) : (
            ""
          )}
          <button
            className={
              cartItems.totalAmount === 0 ? "button-is-diabled-cart-modal" : ""
            }
            onClick={handleOrderSubmit}
            disabled={cartItems.totalAmount === 0}
            style={{ backgroundColor: "#541904", color: "white" }}
          >
            Order
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default Cart;
