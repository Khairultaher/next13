import React from "react";
import Providers from "@/components/Provider";
import SearchInput from "@/components/SearchInput";
import Preloader from "@/components/Preloader";

import { store } from "@/store";
import { setProducts, setProduct } from "@/store/productSlice";

export default async function Test() {
  // const res = await fetch("http://localhost:3000/api/product");
  // const data = await res.json();
  // store.dispatch(setProducts(data));

  const data = store.getState().product.products;

  return (
    <div>
      <Preloader products={data} />
      <Providers>
        <SearchInput />
      </Providers>
    </div>
  );
}
