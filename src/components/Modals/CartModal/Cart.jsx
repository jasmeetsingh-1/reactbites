import Modal from "../Modal";
import "../cssFiles/CartModal/Cart.css";
import { cartItemReducers } from "../../redux-store/store";
import { useSelector, useDispatch } from "react-redux";

function Cart(props) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartStore);
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
                        e.preventDefault();
                        dispatch(cartItemReducers.cartItemRemove(item.id));
                      }}
                    >
                      -
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
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
                  }, [500]);
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
          <button style={{ backgroundColor: "#541904", color: "white" }}>
            Order
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default Cart;
