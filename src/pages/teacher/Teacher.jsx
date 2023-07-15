import './Teacher.scss'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { authCall } from '../../apiCalls/index'
import Error from '../../components/Error/Error'
import noAvatar from '../../assets/avatar.png'
import Spinner from '../../components/loadingSpinner/Spinner'
import CircularProgress from '@mui/material/CircularProgress'

const Teacher = () => {
  const { teacherID } = useParams()
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: () => authCall.delete(`teachers/delete_teacher/${teacherID}`),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['teachers'] })
      queryClient.refetchQueries({ queryKey: ['dashboard'] })
      queryClient.refetchQueries({ queryKey: ['departments'] })
      navigate('/teachers')
    },
  })

  const {
    isLoading,
    isError,
    data: teacher,
  } = useQuery({
    queryKey: ['teacher', teacherID],
    queryFn: () =>
      authCall.get(`teachers/get_teacher/${teacherID}`).then((res) => res.data),
  })

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    const errorMsg = 'Something went wrong. Please reload page.'
    return <Error errorMsg={errorMsg} />
  }

  const { teacherInfo, classes, similarTeachers } = teacher

  function truncate(str, maxlength) {
    return str.length > maxlength ? str.slice(0, maxlength - 1) + '…' : str
  }

  return (
    <div className="teacher">
      <div className="mainTeacherContainer">
        <section className="top">
          <div className="left">
            <div className="topLeft">
              <h1>{"Teacher's"} Information</h1>

              <div>
                <Link
                  className="editBtn link"
                  to={`/teachers/update/${teacherID}`}
                  title="Edit Teacher Info"
                  disabled={mutation.isLoading}
                >
                  {mutation.isLoading ? (
                    <CircularProgress size={16} color="inherit" />
                  ) : (
                    <EditIcon sx={{ fontSize: '16px' }} />
                  )}
                </Link>
                <button
                  disabled={mutation.isLoading}
                  onClick={() => mutation.mutate()}
                  title="Delete Teacher"
                  className="deleteBtn"
                >
                  {mutation.isLoading ? (
                    <CircularProgress size={16} color="inherit" />
                  ) : (
                    <DeleteIcon sx={{ fontSize: '16px' }} />
                  )}
                </button>
              </div>
            </div>
            <div className="bottomLeft">
              <div className="imageContainer">
                <img
                  src={teacherInfo.image ? teacherInfo.image : noAvatar}
                  alt=""
                />
              </div>
              <div className="otherInfos">
                <h1>{teacherInfo.full_name}</h1>

                <div className="others">
                  <p className="age">Age: {teacherInfo.age} years old</p>
                  <p>
                    Depart:{' '}
                    <Link
                      className="link"
                      to={`/departments/${teacherInfo.department.id}`}
                    >
                      {teacherInfo.department.name}
                    </Link>
                  </p>

                  <p className="gender">Gender: {teacherInfo.gender}</p>
                  <p className="gender">
                    H.O.D: {teacherInfo.isHOD ? 'Yes' : 'No'}{' '}
                  </p>
                  <p className="address">Address: {teacherInfo.address} </p>
                  <p className="DOB">D.O.B: {teacherInfo.date_of_birth}</p>
                  <p className="email">Email: {teacherInfo.email} </p>
                  <p className="tel">Phone: {teacherInfo.phone} </p>
                  {teacherInfo.username && (
                    <p className="username">Username: {teacherInfo.username}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="rightContainer">
              <h1>
                Classes assigned to <span>{teacherInfo.full_name}</span>{' '}
              </h1>
              {classes.length === 0 ? (
                <h2>None yet.</h2>
              ) : (
                <table>
                  <thead>
                    <tr>
                      <th>Class</th>
                      <th>Subject</th>
                    </tr>
                  </thead>
                  <tbody>
                    {classes.map((c, index) => (
                      <tr key={index}>
                        <td>{c.NameOfClass}</td>
                        <td>{c.subjectTaught}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </section>
        <section className="bottom">
          <h1>Teachers of the same department (Similar Teachers)</h1>
          {similarTeachers.length === 0 ? (
            <h2 className="noTeachers">No other teachers in the department</h2>
          ) : (
            <div className="similarContainer">
              {similarTeachers.map((t) => (
                <Link
                  to={`/teachers/${t.id}`}
                  className="similarCard link"
                  key={t.id}
                >
                  <img src={t.image ? t.image : noAvatar} alt="" />
                  <div>
                    {truncate(`${t.name}`, 15)}{' '}
                    {t.isHOD && <span>(H.O.D)</span>}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default Teacher
