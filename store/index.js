import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import { productApi } from "./productApi";

export const store = configureStore({
  reducer: {
    product: productReducer,
    productApi: productApi.reducer
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(productApi.middleware);
  }
});
