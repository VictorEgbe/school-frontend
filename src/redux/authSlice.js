import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
  isLoading: false,
  error: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true
    },
    loginFailure: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    loginSuccess: (state, action) => {
      state.isLoading = false
      state.user = action.payload
    },
  },
})

export const { loginStart, loginFailure, loginSuccess } = authSlice.actions

export default authSlice.reducer
