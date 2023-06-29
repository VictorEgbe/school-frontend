import './App.scss'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Navigate,
} from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Teachers from './pages/teachers/Teachers'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Teacher from './pages/teacher/Teacher'
import Classes from './pages/classes/Classes'
import Class from './pages/class/Class'
import Students from './pages/students/Students'
import Student from './pages/student/Student'
import Subjects from './pages/subjects/Subjects'
import ClassSubject from './pages/class_subjects/ClassSubject'
import Marks from './pages/marks/Marks'
import Departments from './pages/departments/Departments'
import Department from './pages/department/Department'
import School from './pages/school/School'
import Years from './pages/years/Years'
import Statistics from './pages/statistics/Statistics'
import Profile from './pages/profile/Profile'
import Login from './pages/login/Login'
import Absences from './pages/absences/Absences'
import ClassAbsences from './pages/class_absences/ClassAbsences'
import ClassMarks from './pages/class_marks/ClassMarks'
import ClassStatistics from './pages/class_statistics/Statistics'
import Prints from './pages/prints/Prints'
import Home from './pages/teachersPages/home/Home'
import TeacherNavbar from './pages/teachersPages/navbar/TeacherNavbar'
import TeacherLogin from './pages/teachersPages/Login/Login'

const user = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : {}
const isAuthenticated = JSON.parse(localStorage.getItem('auth'))?.token
  ? true
  : false

// ADMIN ROUTES START
const AdminAuthRoutes = ({ children }) => {
  if (isAuthenticated && user.isAdmin) {
    return children
  } else {
    return <Navigate to="/admin/login" replace />
  }
}

const AdminLoginRoute = ({ children }) => {
  if (!isAuthenticated || !user.isAdmin) {
    return children
  } else {
    return <Navigate to="/admin/dashboard" replace />
  }
}
// ADMIN ROUTES ENDS

// TEACHER ROUTES START
const TeacherAuthRoutes = ({ children }) => {
  if (isAuthenticated) {
    if (user.isAdmin) {
      return <Navigate to="/admin/dashboard" />
    } else {
      return children
    }
  } else {
    return <Navigate to="/login" replace />
  }
}

const TeacherLoginRoute = ({ children }) => {
  if (!isAuthenticated) {
    return children
  } else {
    return <Navigate to="/" replace />
  }
}
// TEACHER ROUTES ENDS

const AdminLayout = () => {
  return (
    <>
      <Navbar />
      <div className="app">
        <Sidebar />
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </>
  )
}

const TeacherLayout = () => {
  return (
    <>
      <TeacherNavbar />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: (
      <TeacherAuthRoutes>
        <TeacherLayout />
      </TeacherAuthRoutes>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },

  {
    element: (
      <TeacherLoginRoute>
        <TeacherLogin />
      </TeacherLoginRoute>
    ),
    path: '/login',
  },

  {
    element: (
      <AdminAuthRoutes>
        <AdminLayout />
      </AdminAuthRoutes>
    ),
    children: [
      {
        path: '/admin/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/admin/teachers',
        element: <Teachers />,
      },
      {
        path: '/admin/teachers/:id',
        element: <Teacher />,
      },
      {
        path: '/admin/classes',
        element: <Classes />,
      },
      {
        path: '/admin/classes/:id',
        element: <Class />,
      },
      {
        path: '/admin/students',
        element: <Students />,
      },
      {
        path: '/admin/students/:id',
        element: <Student />,
      },
      {
        path: '/admin/subjects',
        element: <Subjects />,
      },
      {
        path: '/admin/subjects/:classID',
        element: <ClassSubject />,
      },
      {
        path: '/admin/marks',
        element: <Marks />,
      },
      {
        path: '/admin/marks/:classID',
        element: <ClassMarks />,
      },
      {
        path: '/admin/years-terms-sequences',
        element: <Years />,
      },
      {
        path: '/admin/statistics',
        element: <Statistics />,
      },
      {
        path: '/admin/statistics/:classID',
        element: <ClassStatistics />,
      },
      {
        path: '/admin/prints',
        element: <Prints />,
      },
      {
        path: '/admin/departments',
        element: <Departments />,
      },
      {
        path: '/admin/departments/:id',
        element: <Department />,
      },
      {
        path: '/admin/my-school',
        element: <School />,
      },
      {
        path: '/admin/profile',
        element: <Profile />,
      },
      {
        path: '/admin/absences',
        element: <Absences />,
      },
      {
        path: 'admin/absences/:classID',
        element: <ClassAbsences />,
      },
    ],
  },
  {
    path: '/admin/login',
    element: (
      <AdminLoginRoute>
        <Login />
      </AdminLoginRoute>
    ),
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
