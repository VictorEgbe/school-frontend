import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material'
import './Login.scss'
import { useState } from 'react'
import { CircularProgress } from '@mui/material'

const Login = () => {
  const [visible, setVisible] = useState(false)
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    const data = JSON.stringify({ phone, password })
    console.log(data)
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
            <h1>QIS Administration</h1>
            <form className="form" onSubmit={handleLogin}>
              <input
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                placeholder="Phone e.g 650813187"
              />
              <input
                type={visible ? 'text' : 'password'}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
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
              <button disabled={loading} type="submit">
                {loading ? <CircularProgress size={20} /> : 'Login'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
