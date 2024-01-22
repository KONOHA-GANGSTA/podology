import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.npoint.io" }),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => ({ url: "6240076df9c56365e8e5" }),
    }),
    getServices: builder.query({
      query: () => ({
        url: "977cb9cfcf1bc398f26f",
      }),
    }),
    getPrices: builder.query({
      query: () => ({
        url: "0730b483ec0aa7f3e92d",
      }),
    }),
  }),
});

export const { useGetContactsQuery, useGetPricesQuery, useGetServicesQuery } =
  api;
