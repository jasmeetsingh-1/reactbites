import { createSlice, configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "react",
  storage,
};

const signUpFormData = {
  signupdata: [],
};

const loginFormData = {
  isloggedIn: false,
  data: {},
};

const cartItems = {
  cart: [],
  totalAmount: 0,
};

const LoginSlice = createSlice({
  name: "login",
  initialState: loginFormData,
  reducers: {
    loginButtonHandlerReducers(state, action) {
      state.isloggedIn = action.payload.status;
      state.data = action.payload.userdata;
    },
  },
});

const SignUpSlice = createSlice({
  name: "signUp",
  initialState: signUpFormData,
  reducers: {
    signupButtonHandlerReducer(state, action) {
      const newSignUp = {
        username: action.payload.username,
        name: action.payload.name,
        password: action.payload.password,
        email: action.payload.email,
        phonenumber: action.payload.phonenumber,
        orders: [],
      };
      console.log("new signup data>>>", newSignUp);
      state.signupdata = [...state.signupdata, newSignUp];
    },
    addToOrders(state, action) {
      console.log("action payload>>>", action.payload);
      const indexOFItem = state.signupdata.findIndex(
        (item) => item.email === action.payload.loginEmail
      );
      // console.log("data to update:>>>>", state.signupdata[indexOFItem]);
      let newSignUpData;
      if (indexOFItem !== -1) {
        const updatedSignUpdata = state.signupdata[indexOFItem];
        const newOrder = {
          orderId: updatedSignUpdata.orders.length + 1,
          orderAddress: action.payload.orderAddress,
          orderTotal: action.payload.orderTotal,
          orderItems: action.payload.cartItems,
        };
        newSignUpData = {
          ...updatedSignUpdata,
          orders: [...updatedSignUpdata.orders, newOrder],
        };
        console.log("updated", newSignUpData);
        const updatedItems = [...state.signupdata];
        updatedItems[indexOFItem] = newSignUpData;
        state.signupdata = [...updatedItems];
        // look code from item already in cart and then manage stuff here bro
      }
    },
  },
});

const cartSlice = createSlice({
  name: "cart Items",
  initialState: cartItems,
  reducers: {
    cartItemsAdded(state, action) {
      const indexOFItem = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      let newItem;

      if (indexOFItem !== -1) {
        //item already in cart
        const temp = state.cart[indexOFItem];
        newItem = {
          ...temp,
          amount: temp.amount + action.payload.amount,
        };
        const updatedItems = [...state.cart];
        updatedItems[indexOFItem] = newItem;
        const newTotalAmount =
          state.totalAmount + action.payload.price * action.payload.amount;

        state.cart = updatedItems;
        state.totalAmount = newTotalAmount;
      } else {
        //new item to add in cart
        const updatedItems = state.cart.concat(action.payload);
        const newTotalAmount =
          state.totalAmount + action.payload.price * action.payload.amount;

        state.cart = updatedItems;
        state.totalAmount = newTotalAmount;
      }
    },
    cartItemRemove(state, action) {
      const indexOFItem = state.cart.findIndex(
        (item) => item.id === action.payload
      );
      const newTotalAmount = state.totalAmount - state.cart[indexOFItem].price;
      if (state.cart[indexOFItem].amount === 1) {
        //remove completed
        const updatedItems = state.cart.filter(
          (temp) => temp.id !== action.payload
        );
        state.cart = updatedItems;
        state.totalAmount = newTotalAmount;
      } else {
        //update the amount
        let newItem = {
          ...state.cart[indexOFItem],
          amount: state.cart[indexOFItem].amount - 1,
        };
        const updatedItems = [...state.cart];
        updatedItems[indexOFItem] = newItem;
        state.cart = updatedItems;
        state.totalAmount = newTotalAmount;
      }
    },
    cartItemClear(state) {
      state.cart = [];
      state.totalAmount = 0;
    },
  },
});

const rootReducer = combineReducers({
  loginStore: LoginSlice.reducer,
  signupStore: SignUpSlice.reducer,
  cartStore: cartSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const loginReducers = LoginSlice.actions;
export const signUpReducers = SignUpSlice.actions;
export const cartItemReducers = cartSlice.actions;

const store = configureStore({
  reducer: persistedReducer,
});
const persistor = persistStore(store);
export default store;
export { persistor };
