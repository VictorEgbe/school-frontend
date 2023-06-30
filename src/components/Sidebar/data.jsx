import {
  Assessment,
  CalendarMonth,
  Class,
  CreditScore,
  Dashboard,
  Diversity3,
  Groups,
  People,
  Subject,
  Tab,
} from '@mui/icons-material'
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop'

export const data = [
  { icon: <Dashboard />, to: '/', content: 'Dashboard' },
  { icon: <Diversity3 />, to: '/departments', content: 'Departments' },
  { icon: <People />, to: '/teachers', content: 'Teachers' },
  { icon: <Class />, to: '/classes', content: 'Classes' },
  { icon: <Groups />, to: '/students', content: 'Students' },
  { icon: <Tab />, to: '/absences', content: 'Absences' },
  { icon: <Subject />, to: '/subjects', content: 'Subjects' },
  { icon: <CreditScore />, to: '/marks', content: 'Marks' },
  { icon: <Assessment />, to: '/admins', content: 'Admins' },
  { icon: <Assessment />, to: '/statistics', content: 'Statistics' },
  { icon: <LocalPrintshopIcon />, to: '/prints', content: 'Prints' },
  { icon: <CalendarMonth />, to: '/years-terms-sequences', content: 'Years' },
]
