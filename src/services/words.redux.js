import { backendApi } from './base'
import { wordsService } from './words.service'

const extendedApi = backendApi.injectEndpoints({
  endpoints: (builder) => ({
    getWords: builder.query({
      queryFn: async ({ userId, entityId }) => {
        const response = await wordsService.getUserWords(userId, entityId)
        return new Promise((resolve) => setTimeout(() => resolve( {data: response }), 1500))
      },
      providesTags: ['Word'],
    }),
    addWord: builder.mutation({
      queryFn: async ({userId, newWord}) => {
        await wordsService.addUserWord(userId, newWord)
        return new Promise((resolve) => setTimeout(() => resolve( {data: 'ok' }), 1500))
      },
      invalidatesTags: ['Word'],
    })
  })
})

export const { 
  useGetWordsQuery,
  useAddWordMutation,
} = extendedApi