import './Department.scss'
import { Link, useNavigate } from 'react-router-dom'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import DeleteIcon from '@mui/icons-material/Delete'
import { useParams } from 'react-router-dom'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { authCall } from '../../apiCalls/index'
import Spinner from '../../components/loadingSpinner/Spinner'
import Error from '../../components/Error/Error'
import noAvatar from '../../assets/avatar.png'

const Department = () => {
  const { departmentID } = useParams()
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const {
    data: department,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['departments', departmentID],
    queryFn: () =>
      authCall
        .get(`departments/get_department/${departmentID}`)
        .then((res) => res.data),
  })

  const mutation = useMutation({
    mutationFn: () =>
      authCall.delete(`departments/delete_department/${departmentID}`),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['departments'] })
      navigate('/departments')
    },
  })

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    const errorMsg =
      error?.response.data.error ||
      'Something went wrong. Please reload the page.'
    return <Error errorMsg={errorMsg} />
  }

  const handleDelete = (e) => {
    e.preventDefault()
    mutation.mutate()
  }

  return (
    <div className="department">
      <div className="mainDepartmentContainer">
        <section className="upSection">
          <h1 className="departmentName">
            {department.department.name} Department
          </h1>
          <div className="actions">
            <Link
              className="edit link"
              title="Edit Department"
              disabled={mutation.isLoading}
              to={`/departments/update/${departmentID}`}
              state={{ id: departmentID }}
            >
              <BorderColorIcon />
              <span>Edit Department</span>
            </Link>

            <button
              onClick={handleDelete}
              className="delete"
              title="Delete Department"
              disabled={mutation.isLoading}
            >
              <DeleteIcon />
              <span>Delete Department</span>
            </button>
          </div>
        </section>
        <section className="lowerSection">
          {department.teachers.length === 0 ? (
            <span className="noTeacher">No teacher in this department</span>
          ) : (
            <div className="members">
              <div className="departmentMembers">
                {department.teachers.map((teacher) => (
                  <Link
                    to={`/teachers/${teacher.id}`}
                    className="memberCard link"
                    key={teacher.id}
                  >
                    <img
                      src={teacher.image ? teacher.image : noAvatar}
                      alt=""
                    />
                    <div className="name">
                      {teacher.name}
                      {teacher.isHOD && <p>(H.O.D)</p>}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default Department
