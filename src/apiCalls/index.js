import axios from 'axios'

const token = localStorage.getItem('auth')
  ? JSON.parse(localStorage.getItem('auth')).token
  : null

export const authCall = axios.create({
  baseURL: 'http://localhost:8000/api/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Token ${token}`,
  },
})
