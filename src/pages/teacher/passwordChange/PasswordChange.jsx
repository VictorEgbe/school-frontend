import { useState } from 'react'
import './PasswordChange.scss'
import { CircularProgress } from '@mui/material'

const PasswordChange = ({ setOpen, mutation, teacher }) => {
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [passwordsError, setPasswordsError] = useState(false)

  const handlePasswordChange = (e) => {
    e.preventDefault()
    if (password !== passwordConfirm) {
      setPasswordsError(true)
    } else {
      const apiData = {
        password1: password,
        password2: passwordConfirm,
      }
      mutation.mutate(apiData)
    }
  }

  return (
    <div className="passwordChange">
      <div className="wrapper">
        <form onSubmit={handlePasswordChange}>
          <h1>
            Change Password for <span>{teacher}</span>
          </h1>
          <div className="input">
            <label>Password</label>
            <input
              type="password"
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={mutation.isLoading}
              className={
                mutation.isError && mutation.error.response ? 'nameError' : ''
              }
            />
            {mutation.isError && mutation.error.response && (
              <p>{mutation.error.response?.data?.password1[0]}</p>
            )}
          </div>

          <div className="input">
            <label>Password Confirmation</label>
            <input
              type="password"
              value={passwordConfirm}
              placeholder="Enter password again"
              onChange={(e) => setPasswordConfirm(e.target.value)}
              required
              disabled={mutation.isLoading}
            />
          </div>

          {passwordsError && (
            <p className="matchError">
              Passwords did not match. Please make sure the passwords are
              exactly the same
            </p>
          )}

          {mutation.isError && !mutation.error.response?.data && (
            <p className="matchError">
              Something went wrong. Please reload the page or try again in a few
              minutes
            </p>
          )}

          <div className="formButtons">
            <button
              disabled={mutation.isLoading}
              onClick={() => setOpen(false)}
              type="button"
            >
              {mutation.isLoading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                'Cancel'
              )}
            </button>
            <button disabled={mutation.isLoading} type="submit">
              {mutation.isLoading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                'Save'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PasswordChange
