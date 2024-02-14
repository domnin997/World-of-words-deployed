import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthorized: false,
  name: null,
  isLoginOpened: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLoginOpened: (state, action) => {
      state.isLoginOpened = action.payload
    },
  }
})

export const {
  setLoginOpened,
} = authSlice.actions