import { configureStore } from '@reduxjs/toolkit'
import { backendApi } from '@/service/api/base'

export const store = configureStore({
  reducer: {
     
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(backendApi.middleware),
})