import { Link } from 'react-router-dom'
import './Teachers.scss'
import { teachers } from './data'
import AddCircleIcon from '@mui/icons-material/AddCircle'

const Teachers = () => {
  const newTeachers = [...teachers].reverse()
  return (
    <div className="teachers">
      <div className="teachersContainer">
        <div className="action">
          <div className="add" title="Add Teacher">
            <AddCircleIcon />
          </div>
        </div>
        <div className="allTeachers">
          {newTeachers.map((teacher) => (
            <Link
              to={`/admin/teachers/${teacher.id}`}
              className="teacherCard link"
              key={teacher.id}
            >
              <img src={teacher.image} alt="" />
              <div className="name">
                {teacher.firstName} {teacher.lastName}
              </div>
              <div className="teacherSubject">{teacher.subject}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Teachers
