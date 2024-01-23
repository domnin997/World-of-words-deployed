import { backendApi } from './base'
import localforage from 'localforage'

const extendedApi = backendApi.injectEndpoints({
  endpoints: (builder) => ({
    getWords: builder.query({
      queryFn: async (userId) => {
        const response = await localforage.getItem(userId)
        return new Promise((resolve) => setTimeout(() => resolve( {data: response }), 2500))
      },
      providesTags: ['Word'],
    })
  })
})

export const { 
  useGetWordsQuery,
} = extendedApi