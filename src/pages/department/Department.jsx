import { Link } from 'react-router-dom'
import './Department.scss'
import { department } from './data'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import DeleteIcon from '@mui/icons-material/Delete'

const Department = () => {
  return (
    <div className="department">
      <div className="mainDepartmentContainer">
        <div className="actions">
          <div className="edit" title="Edit Department">
            <BorderColorIcon />
          </div>
          <div className="departmentName">{department.name} Department</div>
          <div className="delete" title="Delete Department">
            <DeleteIcon />
          </div>
        </div>
        <div className="departmentMembers">
          {department.members.map((member) => (
            <Link
              to={`/teachers/${member.id}`}
              state={{ name: member.firstName }}
              className="memberCard link"
              key={member.id}
            >
              <img src={member.image} alt="" />
              <div className="name">
                {member.firstName} {member.lastName}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Department
