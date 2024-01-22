import { backendApi } from './base'
import localforage from 'localforage'

const extendedApi = backendApi.injectEndpoints({
  endpoints: (builder) => ({
    getWords: builder.query({
      queryFn: async (userId) => {
        console.log(userId)
        const response = await localforage.getItem(userId)
        return new Promise((resolve) => setTimeout(() => resolve( {data: response }), 2500))
      }
        // const response = await localforage.getItem(userId)
        // const output = response ? response : false
        // return new Promise((resolve) => setTimeout(() => resolve( output ), 500))
      ,
      providesTags: ['Word'],
    })
  })
})

export const { 
  useGetWordsQuery,
} = extendedApi