import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const backendApi = createApi({
  reducerPath: 'backendApi',
  tagTypes: ['Word', 'Dictionaries'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://backend.local/api/' }),
  endpoints: () => ({}),
})