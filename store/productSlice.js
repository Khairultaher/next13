import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { FiChevronDown } from "react-icons/fi";

const initialState = {
  search: "",
  product: {},
  products: []
};
const productSlice = createSlice({
  name: "productL",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      //console.log(action.payload);
      state.product = action.payload;
      //console.log(state.product);
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    }
  }
});

export const { setProduct, setProducts, setSearch } = productSlice.actions;
export default productSlice.reducer;
