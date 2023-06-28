import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material'
import './Login.scss'
import { useState } from 'react'
import { CircularProgress } from '@mui/material'
import { apiCalls } from '../../apiCalls/index'
import { loginStart, loginFailure, loginSuccess } from '../../redux/authSlice'
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {
  const [visible, setVisible] = useState(false)
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const { isLoading, error } = useSelector((state) => state)

  const handleLogin = async (e) => {
    e.preventDefault()
    dispatch(loginStart)
    try {
      const data = JSON.stringify({ phone, password })
      const response = await apiCalls.post('accounts/sign_in', data)
      if (response.data.user.isAdmin) {
        dispatch(loginSuccess(response.data))
      } else {
        const msg = 'You are not authorized to view this site. Admins only!'
        dispatch(loginFailure(msg))
      }
    } catch (err) {
      if (err.response.data.phone) {
        dispatch(loginFailure(err.response.data.phone[0]))
      } else if (err.response.data.non_field_errors) {
        dispatch(loginFailure(err.response.data.non_field_errors[0]))
      } else {
        dispatch(loginFailure('Something went wrong'))
      }
    }
  }

  return (
    <div className="login">
      <div className="loginCard">
        <div className="left">
          <img
            src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/04/attachment_70879158-e1491506349597.jpg?auto=format&q=60&fit=max&w=930"
            alt=""
            className="logo"
          />
        </div>
        <div className="right">
          <div className="container">
            <h1>Administration Login</h1>
            <form className="form" onSubmit={handleLogin}>
              <input
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                placeholder="Phone e.g 650813187"
                required
                value={phone}
                disabled={isLoading}
              />
              <input
                type={visible ? 'text' : 'password'}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
                value={password}
                disabled={isLoading}
              />
              {visible ? (
                <VisibilityOutlined
                  className="visible"
                  onClick={() => setVisible(false)}
                />
              ) : (
                <VisibilityOffOutlined
                  className="visible"
                  onClick={() => setVisible(true)}
                />
              )}
              <button disabled={isLoading} type="submit">
                {isLoading ? <CircularProgress size={20} /> : 'Login'}
              </button>
            </form>
            {error && <p className="error">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
