"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "@/store/index";
import { setSearch } from "@/store/productSlice";
import { pokemonApi } from "@/store/productApi";
import Products from "@/components/Products";
import { productApi } from "./../store/productApi";

const SearchInput = () => {
  const dispatch = store.dispatch;
  const search = useSelector((state) => state.product.search);
  const data = useSelector((state) => state.product.products);

  const filtered_data = useSelector(
    (state) => state.productApi.queries[`search("${search}")`]?.data
  );

  useEffect(() => {
    dispatch(productApi.endpoints.search.initiate(search));
  }, [dispatch, search]);

  return (
    <div className="max-w-contentContainer mx-auto bg-white">
      <input
        className="mt-5 ml-5 rounded-full border-2 border-rose-500"
        type="text"
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
      <Products products={search.length ? filtered_data ?? [] : data} />
    </div>
  );
};

export default SearchInput;
