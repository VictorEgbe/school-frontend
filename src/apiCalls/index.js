import axios from 'axios'

const BASEURL = 'http://localhost:8000/api/'

const token = localStorage.getItem('auth')
  ? JSON.parse(localStorage.getItem('auth')).token
  : null

export const authCall = axios.create({
  baseURL: BASEURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Token ${token}`,
  },
})
