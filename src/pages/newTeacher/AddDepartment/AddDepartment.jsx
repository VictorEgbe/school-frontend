import './AddDepartment.scss'
import { useEffect, useRef } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { authCall } from '../../../apiCalls/index'

const AddDepartment = ({ setOpen }) => {
  const departmentNameRef = useRef()
  const queryClient = useQueryClient()

  const { isLoading, mutate, isError, error } = useMutation({
    mutationFn: (name) =>
      authCall
        .post('departments/create_department', JSON.stringify({ name }))
        .then((res) => res.data),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['departments'] })
      queryClient.refetchQueries({ queryKey: ['dashboard'] })
      queryClient.refetchQueries({ queryKey: ['departmentsIDsAndNames'] })
      setOpen(false)
    },
  })

  useEffect(() => departmentNameRef.current.focus(), [])

  const handleSubmit = (e) => {
    e.preventDefault()
    mutate(departmentNameRef.current.value)
  }

  return (
    <div className="addDepartment">
      <div className="wrapper">
        <h1>Add Department</h1>
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

          <div className="buttons">
            <button
              onClick={() => setOpen(false)}
              type="button"
              disabled={isLoading}
            >
              {isLoading ? (
                <CircularProgress size={16} color="inherit" />
              ) : (
                'Cancel'
              )}
            </button>
            <button type="submit" disabled={isLoading}>
              {isLoading ? (
                <CircularProgress size={16} color="inherit" />
              ) : (
                'Create'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddDepartment
