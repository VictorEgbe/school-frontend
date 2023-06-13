import {
  Dashboard,
  School,
  Class,
  Groups,
  Subject,
  CreditScore,
  Gavel,
  AnimationSharp,
  CalendarMonth,
  Assessment,
  Article,
  Diversity3,
  People,
} from '@mui/icons-material'
import './Sidebar.scss'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="menu">
        <NavLink to="/" className="link">
          <div className="menuItem">
            <Dashboard />
            <span>Dashboard</span>
          </div>
        </NavLink>
        <NavLink to="/teachers" className="link">
          <div className="menuItem">
            <People />
            <span>Teacher</span>
          </div>
        </NavLink>
        <div className="menuItem">
          <Class />
          <span>Classes</span>
        </div>
        <div className="menuItem">
          <Groups />
          <span>Students</span>
        </div>
        <div className="menuItem">
          <Subject />
          <span>Subjects</span>
        </div>
        <div className="menuItem">
          <CreditScore />
          <span>Marks</span>
        </div>
        <div className="menuItem">
          <Gavel />
          <span>Term</span>
        </div>
        <div className="menuItem">
          <AnimationSharp />
          <span>Sequences</span>
        </div>
        <div className="menuItem">
          <CalendarMonth />
          <span>Years</span>
        </div>
        <div className="menuItem">
          <Assessment />
          <span>Statistics</span>
        </div>
        <div className="menuItem">
          <Article />
          <span>Reports</span>
        </div>
        <div className="menuItem">
          <Diversity3 />
          <span>Departments</span>
        </div>
        <div className="menuItem">
          <School />
          <span>School</span>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
