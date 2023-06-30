import {
  Assessment,
  CalendarMonth,
  Class,
  CreditScore,
  Dashboard,
  Diversity3,
  Groups,
  People,
  School,
  Subject,
  Tab,
} from '@mui/icons-material'
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop'

export const data = [
  {
    id: 1,
    icon: <Dashboard />,
    to: '/',
    content: 'Dashboard',
  },
  {
    id: 2,
    icon: <School />,
    to: '/my-school',
    content: 'My School',
  },
  {
    id: 3,
    icon: <Diversity3 />,
    to: '/departments',
    content: 'Departments',
  },
  {
    id: 4,
    icon: <People />,
    to: '/teachers',
    content: 'Teachers',
  },
  {
    id: 5,
    icon: <Class />,
    to: '/classes',
    content: 'Classes',
  },
  {
    id: 6,
    icon: <Groups />,
    to: '/students',
    content: 'Students',
  },
  {
    id: 7,
    icon: <Tab />,
    to: '/absences',
    content: 'Absences',
  },
  {
    id: 8,
    icon: <Subject />,
    to: '/subjects',
    content: 'Subjects',
  },
  {
    id: 9,
    icon: <CreditScore />,
    to: '/marks',
    content: 'Marks',
  },
  {
    id: 10,
    icon: <Assessment />,
    to: '/statistics',
    content: 'Statistics',
  },

  {
    id: 12,
    icon: <CalendarMonth />,
    to: '/years-terms-sequences',
    content: 'Years',
  },

  {
    id: 13,
    icon: <LocalPrintshopIcon />,
    to: '/prints',
    content: 'Prints',
  },
]
