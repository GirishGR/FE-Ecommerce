import { configureStore } from "@reduxjs/toolkit";

import cartsliceR from "./cartsliceR";
import productSliceA from "./productSliceA";

const store = configureStore({
  reducer:{
    cart: cartsliceR,
    product: productSliceA
  }
})

export default store