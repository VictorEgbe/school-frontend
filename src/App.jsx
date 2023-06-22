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
import Terms from './pages/terms/Terms'
import Departments from './pages/departments/Departments'
import Department from './pages/department/Department'
import School from './pages/school/School'
import Reports from './pages/reports/Reports'
import Sequences from './pages/sequences/Sequences'
import Years from './pages/years/Years'
import Statistics from './pages/statistics/Statistics'
import Profile from './pages/profile/Profile'
import Login from './pages/login/Login'
import Absences from './pages/absences/Absences'
import ClassAbsences from './pages/class_absences/ClassAbsences'
import ClassMarks from './pages/class_marks/ClassMarks'

const user = { isAdmin: true, isAuthenticated: true }

const AdminAuthRoutes = ({ children }) => {
  if (user.isAuthenticated && user.isAdmin) {
    return children
  } else {
    return <Navigate to="/admin/login" replace />
  }
}

const AdminLoginRoute = ({ children }) => {
  if (!user.isAuthenticated || !user.isAdmin) {
    return children
  } else {
    return <Navigate to="/" replace />
  }
}

const Layout = () => {
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

const router = createBrowserRouter([
  {
    element: (
      <AdminAuthRoutes>
        <Layout />
      </AdminAuthRoutes>
    ),
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/teachers',
        element: <Teachers />,
      },
      {
        path: '/teachers/:id',
        element: <Teacher />,
      },
      {
        path: '/classes',
        element: <Classes />,
      },
      {
        path: '/classes/:id',
        element: <Class />,
      },
      {
        path: '/students',
        element: <Students />,
      },
      {
        path: '/students/:id',
        element: <Student />,
      },
      {
        path: '/subjects',
        element: <Subjects />,
      },
      {
        path: '/subjects/:classID',
        element: <ClassSubject />,
      },
      {
        path: '/marks',
        element: <Marks />,
      },
      {
        path: '/marks/:classID',
        element: <ClassMarks />,
      },
      {
        path: '/terms',
        element: <Terms />,
      },
      {
        path: '/sequences',
        element: <Sequences />,
      },
      {
        path: '/years',
        element: <Years />,
      },
      {
        path: '/statistics',
        element: <Statistics />,
      },
      {
        path: '/reports',
        element: <Reports />,
      },
      {
        path: '/departments',
        element: <Departments />,
      },
      {
        path: '/departments/:id',
        element: <Department />,
      },
      {
        path: '/my-school',
        element: <School />,
      },
      {
        path: '/admin/profile',
        element: <Profile />,
      },
      {
        path: '/absences',
        element: <Absences />,
      },
      {
        path: '/absences/:classID',
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
