import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import cartRducer from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartRducer,
  },
  devTools: false,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
