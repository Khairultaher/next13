import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/" }),
  endpoints: (builder) => ({
    search: builder.query({
      query: (q) => `product?name=${q}`
    })
  })
});
