import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.scss'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { loadUserFailure, loadUserSuccess } from './redux/authSlice'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

const token = JSON.parse(localStorage.getItem('auth'))
  ? JSON.parse(localStorage.getItem('auth')).token
  : null
if (token) {
  axios
    .get('http://localhost:8000/api/accounts/load_user', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
    })
    .then((response) => store.dispatch(loadUserSuccess(response.data)))
    .catch(() => {
      store.dispatch(loadUserFailure())
      return <Navigate to="/login" />
    })
} else {
  store.dispatch(loadUserFailure())
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 1 * 60 * 60 * 1000, //1 hours
      cacheTime: 2 * 60 * 60 * 1000,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
)
