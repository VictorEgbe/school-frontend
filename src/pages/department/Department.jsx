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
import { useState } from 'react'
import DepartmentEditForm from '../../components/DepartmentEditForm/DepartmentEditForm'

const Department = () => {
  const [editMode, setEditMode] = useState(false)
  const { departmentID } = useParams()
  const [departmentName, setDepartmentName] = useState('')
  const [HODName, setHODName] = useState('')
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
      authCall.get(`departments/get_department/${departmentID}`).then((res) => {
        if (res.data.department.HOD_name) {
          setHODName(res.data.department.HOD_name)
        } else {
          if (res.data.teachers.length !== 0) {
            setHODName(res.data.teachers[0].name)
          } else {
            setHODName('')
          }
        }
        setDepartmentName(res.data.department.name)
        return res.data
      }),
    retry: 1,
  })

  const {
    isError: updateIsError,
    isLoading: updateLoading,
    error: updateError,
    mutate,
  } = useMutation({
    mutationFn: (dataToUpdate) =>
      authCall
        .put(
          `departments/update_department/${departmentID}`,
          JSON.stringify(dataToUpdate)
        )
        .then((res) => res.data),
    onSuccess: (data) => {
      queryClient.invalidateQueries(['departments', departmentID])
      queryClient.setQueryData(['departments', departmentID], data)
      queryClient.refetchQueries({ queryKey: ['departments'] })
      queryClient.refetchQueries({ queryKey: ['departments', departmentID] })
      queryClient.refetchQueries({ queryKey: ['dashboard'] })
      queryClient.refetchQueries({ queryKey: ['teachers'] })
      setDepartmentName(data.department.name)
      setEditMode(false)
    },
  })

  const mutation = useMutation({
    mutationFn: () =>
      authCall.delete(`departments/delete_department/${departmentID}`),
    onSuccess: () => {
      queryClient.invalidateQueries(['departments'])
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

  const handleEdit = (e) => {
    e.preventDefault()
    const data = { name: departmentName, HOD_name: HODName }
    mutate(data)
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
            {!editMode && (
              <button
                onClick={() => setEditMode(true)}
                className="edit"
                title="Edit Department"
                disabled={mutation.isLoading}
              >
                <BorderColorIcon />
                <span>Edit Department</span>
              </button>
            )}
            <button
              onClick={handleDelete}
              className="delete"
              title="Delete Department"
              disabled={updateLoading || mutation.isLoading}
            >
              <DeleteIcon />
              <span>Delete Department</span>
            </button>
          </div>
        </section>
        <section className="lowerSection">
          {department.teachers.length === 0 && !editMode ? (
            <span className="noTeacher">No teacher in this department</span>
          ) : (
            <div className="members">
              {editMode && (
                <DepartmentEditForm
                  HODName={HODName}
                  setHODName={setHODName}
                  teachers={department.teachers}
                  DName={departmentName}
                  setDepartmentName={setDepartmentName}
                  setEditMode={setEditMode}
                  handleEdit={handleEdit}
                  isLoading={updateLoading}
                  isError={updateIsError}
                  error={updateError}
                />
              )}

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
