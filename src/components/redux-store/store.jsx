import { createSlice, configureStore } from "@reduxjs/toolkit";
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
    //function to write which we'll be using
    loginButtonHandlerReducers(state, action) {
      return {
        ...state,
        isloggedIn: action.payload.status,
        data: action.payload.userdata,
      };
      // state.isloggedIn = action.payload.status;
      // state.data = action.payload.userdata;
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
        orders: [],
      };
      return {
        ...state,
        signupdata: [...state.signupdata, newSignUp],
      };
      // state.signupdata = [...state.signupdata, newSignUp];
    },
    addToOrders(state, action) {
      //action payload:
      //    email,
      //through that email i'l go to that account and then update order there
      const indexOFItem = state.signupdata.findIndex(
        (item) => item.email === action.payload.loginEmail
      );
      if (indexOFItem !== -1) {
        const UpdatedItems = [...state.signupdata];
        console.log("order button clicked", UpdatedItems);
        return;
        const newOrder = {
          cartItems: action.payload.cartItems,
          orderTotal: action.payload.orderTotal,
          orderAddress: action.payload.orderAddress,
        };
        const newItem = {
          ...UpdatedItems[indexOFItem],
          orders: [...UpdatedItems[indexOFItem].orders, newOrder],
        };

        UpdatedItems[indexOFItem] = newItem;
        state.signupdata = UpdatedItems;
        //now clear the cart as order is placed
        // state.cart = [];
        // state.totalAmount = 0;
        return {
          ...state,
          cart: [],
          totalAmount: [],
        };
      } else {
        console.log(
          "No account with action payload email>>>>",
          action.payload.loginEmail
        );
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

        // state.cart = updatedItems;
        // state.totalAmount = newTotalAmount;
        return {
          ...state,
          cart: updatedItems,
          totalAmount: newTotalAmount,
        };
      } else {
        //new item to add in cart
        const updatedItems = state.cart.concat(action.payload);
        const newTotalAmount =
          state.totalAmount + action.payload.price * action.payload.amount;

        // state.cart = updatedItems;
        // state.totalAmount = newTotalAmount;
        return {
          ...state,
          cart: updatedItems,
          totalAmount: newTotalAmount,
        };
      }
    },
    cartItemRemove(state, action) {
      const indexOFItem = state.cart.findIndex(
        (item) => item.id === action.payload
      );
      // return;
      const newTotalAmount = state.totalAmount - state.cart[indexOFItem].price;
      if (state.cart[indexOFItem].amount === 1) {
        //remove completed
        const updatedItems = state.cart.filter(
          (temp) => temp.id !== action.payload
        );
        // state.cart = updatedItems;
        // state.totalAmount = newTotalAmount;
        return {
          ...state,
          cart: updatedItems,
          totalAmount: newTotalAmount,
        };
      } else {
        //update the amount
        let newItem = {
          ...state.cart[indexOFItem],
          amount: state.cart[indexOFItem].amount - 1,
        };
        const updatedItems = [...state.cart];
        updatedItems[indexOFItem] = newItem;
        // state.cart = updatedItems;
        // state.totalAmount = newTotalAmount;
        return {
          ...state,
          cart: updatedItems,
          totalAmount: newTotalAmount,
        };
      }
    },
    cartItemClear(state) {
      // state.cart = [];
      // state.totalAmount = 0;
      return {
        ...state,
        cart: [],
        totalAmount: 0,
      };
    },
  },
});

const persistedReducerLoginSlice = persistReducer(
  persistConfig,
  LoginSlice.reducer
);
const persistedReducerSignUpSlice = persistReducer(
  persistConfig,
  SignUpSlice.reducer
);
const persistedReducerCartItemSlice = persistReducer(
  persistConfig,
  cartSlice.reducer
);

const store = configureStore({
  reducer: {
    loginStore: persistedReducerLoginSlice,
    signupStore: persistedReducerSignUpSlice,
    cartStore: persistedReducerCartItemSlice,
  },
});

const persistor = persistStore(store);

export const loginReducers = LoginSlice.actions;
export const signUpReducers = SignUpSlice.actions;
export const cartItemReducers = cartSlice.actions;

export default store;
export { persistor };
