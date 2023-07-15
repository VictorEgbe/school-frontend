import { Link } from 'react-router-dom'
import './Teachers.scss'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { useQuery } from '@tanstack/react-query'
import { authCall } from '../../apiCalls/index'
import Avatar from '../../assets/avatar.png'
import Spinner from '../../components/loadingSpinner/Spinner'
import Error from '../../components/Error/Error'

const Teachers = () => {
  const query = useQuery({
    queryKey: ['teachers'],
    queryFn: () => authCall.get('teachers').then((res) => res.data),
  })

  if (query.isLoading) {
    return <Spinner />
  }

  if (query.isError) {
    const errorMsg = 'Something went wrong. Please reload the page.'
    return <Error errorMsg={errorMsg} />
  }

  return (
    <div className="teachers">
      <div className="teachersContainer">
        <section className="header">
          <h1>Teaching Staff</h1>
          <Link
            className="button link"
            to={'/teachers/create/new-teacher'}
            title="Add Teacher"
          >
            <AddCircleIcon /> <span>Add a teacher</span>
          </Link>
        </section>

        <section className="allTeachers">
          {query?.data?.map((teacher) => (
            <Link
              to={`/teachers/${teacher.id}`}
              className="teacherCard link"
              key={teacher.id}
            >
              <img src={teacher.image ? teacher.image : Avatar} alt="" />
              <div className="name">
                {teacher.fullName} {teacher.isHOD && <span>(H.O.D)</span>}{' '}
              </div>
              <div className="teacherSubject">{teacher.department}</div>
            </Link>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Teachers
