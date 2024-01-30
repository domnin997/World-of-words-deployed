import { backendApi } from './base'
import { wordsService } from './words.service'

const extendedApi = backendApi.injectEndpoints({
  endpoints: (builder) => ({
    getDictionaries: builder.query({
      queryFn: async (userId) => {
        const response = await wordsService.getUserDictionaries(userId)
        return new Promise((resolve) => setTimeout(() => resolve( {data: response }), 2500))
      },
      providesTags: ['Dictionaries'],
    })
  })
})

export const { 
  useGetDictionariesQuery,
} = extendedApi