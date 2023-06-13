import './App.scss'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Teachers from './pages/Teachers/Teachers'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'

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
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/teachers',
        element: <Teachers />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
