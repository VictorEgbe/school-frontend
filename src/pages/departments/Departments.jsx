import './Departments.scss'
import { Link } from 'react-router-dom'
import CreateIcon from '@mui/icons-material/Create'
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
    const errorMsg = 'Something went wrong'
    return <Error errorMsg={errorMsg} />
  }

  return (
    <div className="departments">
      <div className="mainContainer">
        <div className="create" title="Create New Department">
          <h1>All departments in school</h1>
          <div className="createBtn">
            <CreateIcon />
            <span>Create New Department</span>
          </div>
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
              {department.teachers.map((teacher, index) => (
                <Link
                  to={`/teachers/${teacher.id}`}
                  className="member link"
                  key={index}
                  state={{ id: teacher.id }}
                >
                  <img src={teacher.image ? teacher.image : noAvatar} alt="" />
                  <span>{teacher.fullName}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Departments
