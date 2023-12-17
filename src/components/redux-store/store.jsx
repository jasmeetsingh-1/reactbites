import { createSlice, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "react",
  storage,
};

const signUpFormData = {
    signupdata:[]
}

const loginFormData = {
    isloggedIn:false,
    data:{},
};

const LoginSlice = createSlice({
  name: "login",
  initialState: loginFormData,
  reducers: {
    //function to write which we'll be using
    loginButtonHandlerReducers(state, action) {
        state.isloggedIn=action.payload.status;
        state.data=action.payload.userdata;
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
      };

      state.signupdata=[...state.signupdata, newSignUp];

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

const store = configureStore({
  reducer: {
    loginStore: persistedReducerLoginSlice,
    signupStore: persistedReducerSignUpSlice,
  },
});

const persistor = persistStore(store);

export const loginReducers = LoginSlice.actions;
export const signUpReducers = SignUpSlice.actions;

export default store;
export { persistor };
