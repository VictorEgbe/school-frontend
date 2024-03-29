import './NewDepartment.scss'
import { useEffect, useRef } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { authCall } from '../../apiCalls/index'
import { useNavigate } from 'react-router-dom'

const NewDepartment = () => {
  const departmentNameRef = useRef()
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const { isLoading, mutate, isError, error } = useMutation({
    mutationFn: (name) =>
      authCall
        .post('departments/create_department', JSON.stringify({ name }))
        .then((res) => res.data),
    onSuccess: (data) => {
      queryClient.refetchQueries({ queryKey: ['departments'] })
      queryClient.refetchQueries({ queryKey: ['dashboard'] })
      queryClient.refetchQueries({ queryKey: ['dashboard', data.id] })
      navigate(`/departments/${data.id}`)
    },
  })

  useEffect(() => departmentNameRef.current.focus(), [])

  const handleSubmit = (e) => {
    e.preventDefault()
    mutate(departmentNameRef.current.value)
  }

  return (
    <div className="newDepartment">
      <div className="container">
        <h1>Create New Department</h1>
        <form onSubmit={handleSubmit}>
          <div className="formGroup">
            <label htmlFor="departmentName">Department Name</label>
            <input
              id="departmentName"
              type="text"
              placeholder="e.g Mathematics"
              ref={departmentNameRef}
              required
              disabled={isLoading}
              className={error && 'errorStyle'}
            />
            {isError && <span>{error?.response?.data?.name[0]}</span>}
          </div>

          <button type="submit" disabled={isLoading}>
            {isLoading ? (
              <CircularProgress size={16} color="inherit" />
            ) : (
              'Create'
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default NewDepartment
