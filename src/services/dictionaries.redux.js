import { backendApi } from './base'
import { wordsService } from './words.service'

const extendedApi = backendApi.injectEndpoints({
  endpoints: (builder) => ({
    getDictionaries: builder.query({
      queryFn: async (userId) => {
        const response = await wordsService.getUserDictionaries(userId)
        return new Promise((resolve) => setTimeout(() => resolve( {data: response.dictionaries }), 2500))
      },
      providesTags: ['Dictionaries'],
    }),
    addDictionary: builder.mutation({
      queryFn: async (payload) => {
        const {userId, newDictionary} = payload;
        const response = await wordsService.addUserDictionary(userId, newDictionary)
        return new Promise((resolve) => setTimeout(() => resolve( {data: response }), 1000))
      },
      invalidatesTags: ['Dictionaries'],
    })
  })
})

export const { 
  useGetDictionariesQuery,
  useAddDictionaryMutation,
} = extendedApi