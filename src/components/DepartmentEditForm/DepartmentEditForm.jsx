import './DepartmentEditForm.scss'
import CircularProgress from '@mui/material/CircularProgress'

const DepartmentEditForm = ({
  DName,
  HODName,
  setHODName,
  setDepartmentName,
  teachers,
  setEditMode,
  handleEdit,
  isLoading,
  isError,
  error,
}) => {
  return (
    <form onSubmit={handleEdit} className="departmentEditForm">
      <div className="name">
        <label>Department Name</label>
        <div>
          <input
            required
            type="text"
            value={DName}
            placeholder="e.g Economics"
            onChange={(e) => setDepartmentName(e.target.value)}
            disabled={isLoading}
            className={isError && 'classError'}
          />
          {isError && <span>{error.response.data?.name[0]}</span>}
        </div>
      </div>
      {HODName && (
        <div className="hod">
          <label>Select HOD</label>
          <select
            disabled={isLoading}
            value={HODName}
            onChange={(e) => setHODName(e.target.value)}
          >
            {teachers.map((teacher) => (
              <option key={teacher.id}>{teacher.name}</option>
            ))}
          </select>
        </div>
      )}
      <div className="buttons">
        <button
          disabled={isLoading}
          onClick={() => setEditMode(false)}
          type="button"
        >
          Cancel
        </button>
        <button disabled={isLoading} type="submit">
          {isLoading ? <CircularProgress size={13} color="inherit" /> : 'Save'}
        </button>
      </div>
    </form>
  )
}

export default DepartmentEditForm
