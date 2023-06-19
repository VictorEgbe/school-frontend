import './Departments.scss'
import { departments } from '../departments/data'
import { Link } from 'react-router-dom'
import CreateIcon from '@mui/icons-material/Create'

const Departments = () => {
  return (
    <div className="departments">
      <div className="mainContainer">
        <div className="create" title="Create New Department">
          <CreateIcon />
        </div>
        {departments.map((department) => (
          <div className="departmentContainer" key={department.id}>
            <Link className="link" to={`/departments/${department.name}`}>
              <div className="departmentName">{department.name} Department</div>
            </Link>
            <div className="members">
              {department.members.map((member) => (
                <Link
                  to={`/teachers/${member.id}`}
                  className="member link"
                  key={member.id}
                >
                  <img src={member.image} alt="" />
                  <span>
                    {member.firstName} {member.lastName}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Departments
