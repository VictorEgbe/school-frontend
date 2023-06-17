import People from '@mui/icons-material/People'
import Diversity3 from '@mui/icons-material/Diversity3'
import Groups from '@mui/icons-material/Groups'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'

export const data = [
  {
    id: 1,
    name: 'Students',
    icon: <Groups sx={{ fontSize: '40px' }} />,
    value: 455,
  },
  {
    id: 2,
    name: 'Departments',
    icon: <Diversity3 sx={{ fontSize: '40px' }} />,
    value: 12,
  },
  {
    id: 3,
    name: 'Teachers',
    icon: <People sx={{ fontSize: '40px' }} />,
    value: 62,
  },
  {
    id: 4,
    name: 'Admins',
    icon: <AdminPanelSettingsIcon sx={{ fontSize: '40px' }} />,
    value: 4,
  },
]
