import './Student.scss'
import { student } from './data'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import DeleteIcon from '@mui/icons-material/Delete'
import WomanIcon from '@mui/icons-material/Woman'
import ElderlyWomanIcon from '@mui/icons-material/ElderlyWoman'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import Class from '@mui/icons-material/Class'
import HomeIcon from '@mui/icons-material/Home'
import Subject from '@mui/icons-material/Subject'
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { Link } from 'react-router-dom'

const Student = () => {
  return (
    <div className="student">
      <div className="mainStudentContainer">
        <div className="actions">
          <div className="edit" title={`Edit ${student.name}`}>
            <BorderColorIcon />
          </div>
          <div className="delete" title={`Delete ${student.name}`}>
            <DeleteIcon />
          </div>
        </div>
        <div className="studentInfo">
          <div className="avatar">
            <img src={student.image} alt="" />
          </div>
          <div className="others">
            <div className="othersContainer">
              <div className="studentName">{student.name}</div>
              <div className="item">
                <ElderlyWomanIcon />
                <span>{student.age} year old</span>
              </div>
              <div className="item">
                <LocalPhoneIcon />
                <span>{student.parentsPhone}</span>
              </div>
              <div className="item">
                <WomanIcon />
                <span>{student.gender}</span>
              </div>
              <div className="item">
                <Class />
                <Link className="link" to={`/admin/classes/${1}`}>
                  {student.studentClass}
                </Link>
              </div>
              <div className="item">
                <Subject />
                <span>{student.dateOfBirth}</span>
              </div>
              <div className="item">
                <HomeIcon />
                <span>{student.address}</span>
              </div>

              <div className="item">
                <SelfImprovementIcon />
                <span>{student.studentID}</span>
              </div>
              <div className="item">
                <CalendarMonthIcon />
                <span>{student.dateJoint}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Student
