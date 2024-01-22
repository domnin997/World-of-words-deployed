import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const backendApi = createApi({
  reducerPath: 'backendApi',
  tagTypes: ['Word'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://backend.local/api/' }),
  endpoints: () => ({}),
})

// export const {useGetWordsQuery} = backendApi