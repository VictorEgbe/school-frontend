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
    to: '/admin/dashboard',
    content: 'Dashboard',
  },
  {
    id: 2,
    icon: <School />,
    to: '/admin/my-school',
    content: 'My School',
  },
  {
    id: 3,
    icon: <Diversity3 />,
    to: '/admin/departments',
    content: 'Departments',
  },
  {
    id: 4,
    icon: <People />,
    to: '/admin/teachers',
    content: 'Teachers',
  },
  {
    id: 5,
    icon: <Class />,
    to: '/admin/classes',
    content: 'Classes',
  },
  {
    id: 6,
    icon: <Groups />,
    to: '/admin/students',
    content: 'Students',
  },
  {
    id: 7,
    icon: <Tab />,
    to: '/admin/absences',
    content: 'Absences',
  },
  {
    id: 8,
    icon: <Subject />,
    to: '/admin/subjects',
    content: 'Subjects',
  },
  {
    id: 9,
    icon: <CreditScore />,
    to: '/admin/marks',
    content: 'Marks',
  },
  {
    id: 10,
    icon: <Assessment />,
    to: '/admin/statistics',
    content: 'Statistics',
  },

  {
    id: 12,
    icon: <CalendarMonth />,
    to: '/admin/years-terms-sequences',
    content: 'Years/Terms/Sequences',
  },

  {
    id: 13,
    icon: <LocalPrintshopIcon />,
    to: '/admin/prints',
    content: 'Prints',
  },
]
