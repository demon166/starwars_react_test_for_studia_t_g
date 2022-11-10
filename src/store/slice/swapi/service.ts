import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const swApi = createApi({
  reducerPath: 'tagsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SW_API_URL,
  }),
  tagTypes: ['Tags'],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  endpoints: (builder) => ({
  // Тут будут запросы
  }),
});

// eslint-disable-next-line no-empty-pattern
export const {
  // useGetQuery,
} = swApi;
