import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: JSON.parse(localStorage.getItem('user')),
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
      localStorage.removeItem('user')
      localStorage.removeItem('auth')
      state.isLoading = false
      state.error = action.payload
      state.user = {}
    },
    loginSuccess: (state, action) => {
      localStorage.setItem('user', JSON.stringify(action.payload.user))
      localStorage.setItem('auth', JSON.stringify(action.payload.auth))
      state.user = action.payload.user,
      state.isLoading = false
    },
    loadUserSuccess: (state, action) => {
      localStorage.setItem('user', JSON.stringify(action.payload))
      state.isLoading = false
      state.user = action.payload
      state.error = ''
    },
    loadUserFailure: (state) => {
      localStorage.removeItem('user')
      localStorage.removeItem('auth')
      state.isLoading = false
      state.error = ''
    },
    logout: (state) => {
      localStorage.removeItem('user')
      localStorage.removeItem('auth')
      state.isLoading = false
      state.error = ''
      state.user = {}
    },
  },
})

export const {
  loginStart,
  loginFailure,
  loginSuccess,
  loadUserSuccess,
  loadUserFailure,
  logout,
} = authSlice.actions

export default authSlice.reducer
