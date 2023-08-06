import axios from 'axios'

const BASEURL = 'http://localhost:8000/api/'

const token =  JSON.parse(localStorage.getItem('auth'))?.token

export const authCall = axios.create({
  baseURL: BASEURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Token ${token}`,
  },
})

export const authCallWithImage = axios.create({
  baseURL: BASEURL,
  headers: {
    'Content-Type': 'multipart/form-data',
    Authorization: `Token ${token}`,
  },
})
