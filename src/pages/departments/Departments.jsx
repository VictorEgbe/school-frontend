import './Departments.scss'
import { Link } from 'react-router-dom'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { useQuery } from '@tanstack/react-query'
import { authCall } from '../../apiCalls/index'
import Spinner from '../../components/loadingSpinner/Spinner'
import Error from '../../components/Error/Error'
import noAvatar from '../../assets/avatar.png'

const Departments = () => {
  const {
    data: departments,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['departments'],
    queryFn: () => authCall.get('departments').then((res) => res.data),
  })

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    const errorMsg = 'Something went wrong. Please reload page.'
    return <Error errorMsg={errorMsg} />
  }

  return (
    <div className="departments">
      <div className="mainContainer">
        <div className="create" title="Create New Department">
          <h1>All departments</h1>
          <Link
            to={'/departments/create/new-department'}
            className="createBtn link"
          >
            <AddCircleIcon />
            <span>Create New Department</span>
          </Link>
        </div>
        {departments.map((department, index) => (
          <div className="departmentContainer" key={index}>
            <Link
              className="link"
              state={{ id: department.id }}
              to={`/departments/${department.id}`}
            >
              <div className="departmentName">{department.name}</div>
            </Link>
            <div className="members">
              {department.teachers.length === 0 ? (
                <p className="noTeacher">
                  No Teacher in {department.name} Department yet
                </p>
              ) : (
                department.teachers.map((teacher, index) => (
                  <Link
                    to={`/teachers/${teacher.id}`}
                    className="member link"
                    key={index}
                    state={{ id: teacher.id }}
                  >
                    <img
                      src={teacher.image ? teacher.image : noAvatar}
                      alt=""
                    />
                    <div className="div">
                      <span>{teacher.fullName}</span>
                      {teacher.isHOD && <span>(H.O.D)</span>}
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Departments
