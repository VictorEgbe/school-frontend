import { Link } from 'react-router-dom'
import './Class.scss'
import { _class } from './data'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import DeleteIcon from '@mui/icons-material/Delete'

const Class = () => {
  return (
    <div className="class">
      <div className="mainClassContainer">
        <div className="actions">
          <div className="edit" title="Edit Class">
            <BorderColorIcon />
          </div>
          <div className="className">Class: {_class.name}</div>
          <div className="delete" title="Delete Class">
            <DeleteIcon />
          </div>
        </div>

        <div className="classMembers">
          {_class.students.map((student) => (
            <Link
              to={`/students/${student.id}`}
              className="studentClassCard link"
              key={student.id}
            >
              <img src={student.image} alt="" />
              <div className="name">
                {student.name} ({student.mat})
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Class
