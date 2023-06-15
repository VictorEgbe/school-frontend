import {
  Search,
  MailOutline,
  Notifications,
  MenuOutlined,
} from '@mui/icons-material'
import { Badge } from '@mui/material'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = async (e) => {
    e.preventDefault()
    console.log(searchTerm)
  }

  return (
    <nav className="navbar">
      <div className="left">
        <div className="menu">
          <MenuOutlined className="icon" />
        </div>
        <img
          className="logo"
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <Link className="school" to="/">
          Quality International School
        </Link>
      </div>
      <form className="center" onSubmit={handleSearch}>
        <Search className="search" />
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Search for student. e.g QIS1234"
        />
      </form>
      <div className="right">
        <span className="link">Logout</span>
        <span className="link">About</span>
        <Badge
          className="badge"
          badgeContent={2}
          sx={{
            '& .MuiBadge-badge': {
              color: 'white',
              backgroundColor: 'maroon',
            },
          }}
        >
          <MailOutline color="action" />
        </Badge>
        <Badge
          className="badge"
          badgeContent={1}
          sx={{
            '& .MuiBadge-badge': {
              color: 'white',
              backgroundColor: 'maroon',
            },
          }}
        >
          <Notifications color="action" />
        </Badge>

        <Link to="admin/profile" className="link">
          <div className="user">
            <img
              className="avatar"
              src="https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
            />
            <span>EGBE Victor Junior</span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
