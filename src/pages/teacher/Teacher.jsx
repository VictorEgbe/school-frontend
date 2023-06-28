import './Teacher.scss'
import { teacher } from './data'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import DeleteIcon from '@mui/icons-material/Delete'
import WomanIcon from '@mui/icons-material/Woman'
import ElderlyWomanIcon from '@mui/icons-material/ElderlyWoman'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import Diversity3 from '@mui/icons-material/Diversity3'
import HomeIcon from '@mui/icons-material/Home'
import Subject from '@mui/icons-material/Subject'
import EmailIcon from '@mui/icons-material/Email'
import PersonIcon from '@mui/icons-material/Person'
import CheckIcon from '@mui/icons-material/Check'
import ClearIcon from '@mui/icons-material/Clear'
import { Link } from 'react-router-dom'

const Teacher = () => {
  return (
    <div className="teacher">
      <div className="mainTeacherContainer">
        <div className="actions">
          <div
            className="edit"
            title={`Edit ${teacher.firstName} ${teacher.lastName}`}
          >
            <BorderColorIcon />
          </div>
          <div
            className="delete"
            title={`Delete ${teacher.firstName} ${teacher.lastName}`}
          >
            <DeleteIcon />
          </div>
        </div>
        <div className="teacherInfo">
          <div className="avatar">
            <img src={teacher.image} alt="" />
          </div>
          <div className="others">
            <div className="othersContainer">
              <div className="teacherName">
                {teacher.firstName} {teacher.lastName}
              </div>
              <div className="item">
                <ElderlyWomanIcon />
                <span>{teacher.age} year old</span>
              </div>
              <div className="item">
                <LocalPhoneIcon />
                <span>{teacher.phone}</span>
              </div>
              <div className="item">
                <WomanIcon />
                <span>{teacher.gender}</span>
              </div>
              <div className="item">
                <Diversity3 />
                <Link className="link" to={`/admin/departments/mathematics`}>
                  {teacher.department}
                </Link>
              </div>
              <div className="item">
                <Subject />
                <span>{teacher.subject}</span>
              </div>
              <div className="item">
                <HomeIcon />
                <span>{teacher.address}</span>
              </div>
              <div className="item">
                <EmailIcon />
                <span>{teacher.email}</span>
              </div>
              <div className="item">
                <PersonIcon />
                <span>{teacher.username}</span>
              </div>
              <div className="item">
                {teacher.is_hod === 'No' ? <ClearIcon /> : <CheckIcon />}
                <span>Head of Department: {teacher.is_hod}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teacher
