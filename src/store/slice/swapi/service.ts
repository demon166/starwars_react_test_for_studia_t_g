import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  TCharacter,
  TCharacterFilterSearchProps,
  TCharacterWookiee,
  TSwApiDataRequest,
  TSwApiDataRequestWookiee,
} from './types';
import { isWookieeResponse } from 'shared/typeGuards/wookieeLang';
import { wookieeToHuman } from '../../../shared/helpers/wookieeToHumanResponse';

export const swApi = createApi({
  reducerPath: 'tagsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SW_API_URL,
  }),
  tagTypes: ['Characters'],
  endpoints: (builder) => ({
    getCharacters: builder.query<TCharacter[], TCharacterFilterSearchProps | void>({
      query: ({ search, page, format }: TCharacterFilterSearchProps) => ({
        url: '/people',
        params: {
          search,
          page,
          format,
        },
      }),
      transformErrorResponse: (response) => {
        if (typeof response?.data === 'string') {
          return wookieeToHuman(JSON.parse(response?.data?.replaceAll('whhuanan', 'null')).rcwochuanaoc);
        }
      },
      transformResponse: (baseQueryReturnValue: TSwApiDataRequest<TCharacter>
      | TSwApiDataRequestWookiee<TCharacterWookiee>) => {
        if (isWookieeResponse(baseQueryReturnValue)) {
          return wookieeToHuman(baseQueryReturnValue.rcwochuanaoc);
        }
        return baseQueryReturnValue.results;
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
