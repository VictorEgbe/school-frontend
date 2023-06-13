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
  Tab,
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

        <NavLink to="/my-school" className="link">
          <div className="menuItem">
            <School />
            <span>My School</span>
          </div>
        </NavLink>

        <NavLink to="/departments" className="link">
          <div className="menuItem">
            <Diversity3 />
            <span>Departments</span>
          </div>
        </NavLink>

        <NavLink to="/teachers" className="link">
          <div className="menuItem">
            <People />
            <span>Teacher</span>
          </div>
        </NavLink>

        <NavLink to="/classes" className="link">
          <div className="menuItem">
            <Class />
            <span>Classes</span>
          </div>
        </NavLink>

        <NavLink to="/students" className="link">
          <div className="menuItem">
            <Groups />
            <span>Students</span>
          </div>
        </NavLink>

        <NavLink to="/absences" className="link">
          <div className="menuItem">
            <Tab />
            <span>Students Absences</span>
          </div>
        </NavLink>

        <NavLink to="/subjects" className="link">
          <div className="menuItem">
            <Subject />
            <span>Subjects</span>
          </div>
        </NavLink>

        <NavLink to="/marks" className="link">
          <div className="menuItem">
            <CreditScore />
            <span>Marks</span>
          </div>
        </NavLink>

        <NavLink to="/statistics" className="link">
          <div className="menuItem">
            <Assessment />
            <span>Statistics</span>
          </div>
        </NavLink>

        <NavLink to="/reports" className="link">
          <div className="menuItem">
            <Article />
            <span>Reports</span>
          </div>
        </NavLink>

        <NavLink to="/years" className="link">
          <div className="menuItem">
            <CalendarMonth />
            <span>Years</span>
          </div>
        </NavLink>

        <NavLink to="/terms" className="link">
          <div className="menuItem">
            <Gavel />
            <span>Term</span>
          </div>
        </NavLink>
        <NavLink to="/sequences" className="link">
          <div className="menuItem">
            <AnimationSharp />
            <span>Sequences</span>
          </div>
        </NavLink>
      </div>
    </aside>
  )
}

export default Sidebar
