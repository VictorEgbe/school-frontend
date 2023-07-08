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
import Years from './pages/years/Years'
import Statistics from './pages/statistics/Statistics'
import Profile from './pages/profile/Profile'
import Login from './pages/login/Login'
import Absences from './pages/absences/Absences'
import ClassAbsences from './pages/class_absences/ClassAbsences'
import ClassMarks from './pages/class_marks/ClassMarks'
import ClassStatistics from './pages/class_statistics/Statistics'
import Prints from './pages/prints/Prints'
import Admins from './pages/admins/Admins'
import NewDepartment from './pages/newDepartment/NewDepartment'
import NewTeacher from './pages/newTeacher/NewTeacher'
import EditTeacher from './pages/editTeacher/EditTeacher'
import EditDepartment from './pages/editDepartment/EditDepartment'

const user = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : {}
const isAuthenticated = JSON.parse(localStorage.getItem('auth'))?.token
  ? true
  : false

const AdminAuthRoutes = ({ children }) => {
  if (isAuthenticated && user.isAdmin) {
    return children
  } else {
    return <Navigate to="/login" replace />
  }
}

const AdminLoginRoute = ({ children }) => {
  if (!isAuthenticated || !user.isAdmin) {
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
        path: '/teachers/:teacherID',
        element: <Teacher />,
      },
      {
        path: '/teachers/create/new-teacher',
        element: <NewTeacher />,
      },
      {
        path: '/teachers/update/:teacherID',
        element: <EditTeacher />,
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
        path: '/years-terms-sequences',
        element: <Years />,
      },
      {
        path: '/statistics',
        element: <Statistics />,
      },
      {
        path: '/statistics/:classID',
        element: <ClassStatistics />,
      },
      {
        path: '/prints',
        element: <Prints />,
      },
      {
        path: '/departments',
        element: <Departments />,
      },
      {
        path: '/departments/update/:departmentID',
        element: <EditDepartment />,
      },
      {
        path: '/departments/:departmentID',
        element: <Department />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/absences',
        element: <Absences />,
      },
      {
        path: '/admins',
        element: <Admins />,
      },
      {
        path: '/departments/create/new-department',
        element: <NewDepartment />,
      },
      {
        path: 'admin/absences/:classID',
        element: <ClassAbsences />,
      },
    ],
  },
  {
    path: '/login',
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
