import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  products: [],
}

const productSlice = createSlice({
  name: 'products',
  initialState: initalState,
  reducers: {
        setProducts(state, action){
          state.products = action.payload
        }
  },
})

export const { setProducts} = productSlice.actions;

export default productSlice.reducer
