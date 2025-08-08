import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cms-server-inky.vercel.app/api/v1",
  }),
  endpoints: () => ({}),
  tagTypes: ["User", "Complain"],
});