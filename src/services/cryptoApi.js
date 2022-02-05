import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  'x-rapidapi-host': "https://api.binance.com/api/v3/exchangeInfo",
  //'x-rapidapi-key': 'f202df29cfmshd2f75362c20ca73p18c695jsn8338ca6f4cc4'
};

const baseUrl = "https://api.binance.com/api/v3/exchangeInfo"

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("/coins"),
    }),
  }),
});

export const {
  useGetCryptosQuery,
} = cryptoApi;