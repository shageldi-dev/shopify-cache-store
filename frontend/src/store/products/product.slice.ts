import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../core/constant";
import GetProducts from "../../types/get-products";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query<
      GetProducts,
      { search: string; page: number; limit: number }
    >({
      query: ({ search, page, limit }) =>
        `public-api/get-products?search=${search}&page=${page}&limit=${limit}`,
      keepUnusedDataFor: 100,
      providesTags: ["Product"],
    }),
    sync: builder.mutation<unknown, { data: unknown }>({
      query: () => ({
        url: "/sync",
        method: "POST",
        body: {},
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetProductsQuery, useSyncMutation } = api;
