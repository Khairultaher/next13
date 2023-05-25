"use client";

import { useRef } from "react";
import { store } from "@/store";
import { setProducts } from "@/store/productSlice";

function Preloader({ products }) {
  const loaded = useRef(false);
  if (!loaded.current) {
    store.dispatch(setProducts(products));
    loaded.current = true;
  }

  return null;
}

export default Preloader;
