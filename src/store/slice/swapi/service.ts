import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TCharacter, TCharacterFilterSearchProps } from './types';

export const swApi = createApi({
  reducerPath: 'tagsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SW_API_URL,
  }),
  tagTypes: ['Characters'],
  endpoints: (builder) => ({
    getCharacters: builder.query<TCharacter[], TCharacterFilterSearchProps | void>({
      query: (search) => ({
        url: '/api/v1.0/task/tags',
        params: {
          search,
        },
      }),
      transformResponse(baseQueryReturnValue: { data: TCharacter[] }) {
        return baseQueryReturnValue.data;
      },
      providesTags: (result) =>
        (result
          ? [
            ...result.map(({ name }) => ({ type: 'Characters' as const, name })),
            { type: 'Characters', id: 'LIST' },
          ]
          : [{ type: 'Characters', id: 'LIST' }]),
    }),
  }),
});

export const {
  useGetCharactersQuery,
  useLazyGetCharactersQuery,
} = swApi;
