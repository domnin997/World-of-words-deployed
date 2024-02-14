import { configureStore } from '@reduxjs/toolkit'
import { backendApi } from '../services/base'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authSlice } from './auth'

export const store = configureStore({
  reducer: {
    [backendApi.reducerPath]: backendApi.reducer,
    auth: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(backendApi.middleware),
})

setupListeners(store.dispatch)