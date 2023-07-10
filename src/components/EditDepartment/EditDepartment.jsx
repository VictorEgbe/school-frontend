import './EditDepartment.scss'
import CircularProgress from '@mui/material/CircularProgress'

const EditDepartment = ({
  setOpen,
  nameOfDepartment,
  setNameOfDepartment,
  titleOfDepartment,
  teachers,
  setHodID,
  hodID,
  handleEdit,
  mutation,
}) => {
  return (
    <div className="updateDepartment">
      <div className="wrapper">
        <h1>{titleOfDepartment} Department</h1>

        <form onSubmit={handleEdit}>
          <div className="input">
            <label htmlFor="departmentName">Name</label>
            <input
              type="text"
              id="departmentName"
              placeholder="e.g Economics"
              value={nameOfDepartment}
              onChange={(e) => setNameOfDepartment(e.target.value)}
              required
              disabled={mutation.isLoading}
              className={mutation.isError ? 'nameError' : ''}
            />
            {mutation.isError && <p>{mutation.error.response.data.name}</p>}
          </div>

          {teachers.length !== 0 ? (
            <div className="input">
              <label htmlFor="departmentHOD">H.O.D</label>
              <select
                value={hodID}
                onChange={(e) => setHodID(e.target.value)}
                disabled={mutation.isLoading}
              >
                {teachers.map((teacher) => (
                  <option key={teacher.id} value={teacher.id}>
                    {teacher.name}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <h3>No Teacher in {titleOfDepartment} department</h3>
          )}
          <div className="formActions">
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

export default EditDepartment
