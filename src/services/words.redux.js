import { backendApi } from './base'
import { wordsService } from './words.service'

const extendedApi = backendApi.injectEndpoints({
  endpoints: (builder) => ({
    getWords: builder.query({
      queryFn: async ({ userId, dictionaryId }) => {
        const response = await wordsService.getUserWords(userId, dictionaryId)
        return new Promise((resolve) => setTimeout(() => resolve( {data: response }), 1500))
      },
      providesTags: ['Word'],
    })
  })
})

export const { 
  useGetWordsQuery,
} = extendedApi