import './DepartmentEditForm.scss'

const DepartmentEditForm = ({ DName, HODName, teachers, setEditMode }) => {
  return (
    <form className="departmentEditForm">
      <div className="name">
        <label>Department Name</label>
        <input
          required
          type="text"
          value={DName}
          placeholder="Department Name"
        />
      </div>
      <div className="hod">
        <label>Select HOD</label>
        <select required>
          {teachers.map((teacher) => (
            <option key={teacher.id}>{teacher.name}</option>
          ))}
        </select>
      </div>
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
