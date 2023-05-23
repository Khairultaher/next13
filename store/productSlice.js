import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { FiChevronDown } from "react-icons/fi";

const initialState = {
  product: {},
  products: []
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      //console.log(action.payload);
      state.product = action.payload;
      //console.log(state.product);
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    }
  }
});

export const { setProduct, setProducts } = productSlice.actions;
export default productSlice.reducer;
