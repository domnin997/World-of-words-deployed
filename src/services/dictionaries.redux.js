import { backendApi } from './base'
import { wordsService } from './words.service'

const extendedApi = backendApi.injectEndpoints({
  endpoints: (builder) => ({
    getDictionaries: builder.query({
      queryFn: async ({userId}) => {
        const response = await wordsService.getUserDictionaries(userId)
        return new Promise((resolve) => setTimeout(() => resolve( {data: response.dictionaries }), 2500))
      },
      providesTags: ['Dictionaries'],
    }),
    getDictionary: builder.query({
      queryFn: async ({userId, dictionaryId}) => {
        const response = await wordsService.getUserDictionary(userId, dictionaryId)
        return new Promise((resolve) => setTimeout(() => resolve({data: response}), 1500))
      },
      providesTags: ['Dictionaries'],
    }),
    addDictionary: builder.mutation({
      queryFn: async (payload) => {
        const {userId, dictionaryData} = payload;
        const response = await wordsService.addUserDictionary(userId, dictionaryData)
        return new Promise((resolve) => setTimeout(() => resolve( {data: response }), 1000))
      },
      invalidatesTags: ['Dictionaries'],
    }),
    amendDictionary: builder.mutation({
      queryFn: async (payload) => {
        const {userId, dictionaryData} = payload
        await wordsService.amendUserDictionary(userId, dictionaryData)
        return new Promise((resolve) => setTimeout(() => resolve( {data: 'ok' }), 1000))
      },
      invalidatesTags: ['Dictionaries'],
    }),
    deleteDictionary: builder.mutation({
      queryFn: async (payload) => {
        const {userId, dictionaryId} = payload
        const response = await wordsService.deleteUserDictionary(userId, dictionaryId)
        return new Promise((resolve) => setTimeout(() => resolve( {data: response }), 1000))
      },
      invalidatesTags: ['Dictionaries'],
    })
  })
})

export const { 
  useGetDictionariesQuery,
  useGetDictionaryQuery,
  useAddDictionaryMutation,
  useDeleteDictionaryMutation,
  useAmendDictionaryMutation,
} = extendedApi