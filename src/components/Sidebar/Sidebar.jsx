import './Sidebar.scss'
import { NavLink } from 'react-router-dom'
import { data } from './data'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="menu">
        {data.map((item) => (
          <NavLink to={item.to} className="link" key={item.id}>
            <div className="menuItem">
              {item.icon}
              <span>{item.content}</span>
            </div>
          </NavLink>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
