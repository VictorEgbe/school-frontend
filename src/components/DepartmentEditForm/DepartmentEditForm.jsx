import './DepartmentEditForm.scss'

const DepartmentEditForm = ({
  DName,
  HODName,
  setHODName,
  setDepartmentName,
  teachers,
  setEditMode,
  handleEdit,
}) => {
  return (
    <form onSubmit={handleEdit} className="departmentEditForm">
      <div className="name">
        <label>Department Name</label>
        <input
          required
          type="text"
          value={DName}
          placeholder="Department Name"
          onChange={(e) => setDepartmentName(e.target.value)}
        />
      </div>
      {HODName && (
        <div className="hod">
          <label>Select HOD</label>
          <select value={HODName} onChange={(e) => setHODName(e.target.value)}>
            {teachers.map((teacher) => (
              <option key={teacher.id}>{teacher.name}</option>
            ))}
          </select>
        </div>
      )}
      <div className="buttons">
        <button onClick={() => setEditMode(false)} type="button">
          Cancel
        </button>
        <button type="submit">Save</button>
      </div>
    </form>
  )
}

export default DepartmentEditForm
