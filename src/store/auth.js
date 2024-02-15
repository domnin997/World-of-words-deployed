import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthorized: false,
  name: null,
  userId: null,
  isLoginOpened: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLoginOpened: (state, action) => {
      state.isLoginOpened = action.payload
    },
    setLoggedUser: (state, action) => {
      if (action.payload != null) {
        state.isAuthorized = true,
        state.name = action.payload.name,
        state.userId = action.payload.userId
      } else {
        state.isAuthorized = false,
        state.name = null,
        state.userId = null
      }
    },
  }
})

export const {
  setIsLoginOpened,
  setLoggedUser,
} = authSlice.actions