import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_BASE_URL} from '../../constants';
import {Characters} from './types';

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({baseUrl: API_BASE_URL}),

  endpoints: builder => ({
    getCharacters: builder.query<Characters, string>({
      query: searchText => `?name=${searchText}`,
    }),
  }),
});

export const {useGetCharactersQuery, useLazyGetCharactersQuery} = searchApi;
