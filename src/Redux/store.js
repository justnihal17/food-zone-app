import { configureStore } from "@reduxjs/toolkit";
import cartReducers from '../Redux/Cart_Silce'
const appStore = configureStore({
  reducer: {
    cart: cartReducers,
  },
});

export default appStore;
