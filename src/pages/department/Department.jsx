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
import { useEffect, useState } from 'react'
import EditDepartment from '../../components/EditDepartment/EditDepartment'

const Department = () => {
  const { departmentID } = useParams()
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [nameOfDepartment, setNameOfDepartment] = useState('')
  const [hodID, setHodID] = useState('')

  const {
    data: department,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['department', departmentID],
    queryFn: () =>
      authCall
        .get(`departments/get_department/${departmentID}`)
        .then((res) => res.data),
  })

  useEffect(() => {
    if (department) {
      setNameOfDepartment(department.department.name)
      if (department.department.hod_id) {
        setHodID(department.department.hod_id)
      } else {
        if (department.teachers.length !== 0) {
          setHodID(department.teachers[0].id)
        }
      }
    }
  }, [department])

  const updateMutation = useMutation({
    mutationFn: (updateData) =>
      authCall
        .put(
          `departments/update_department/${departmentID}`,
          JSON.stringify(updateData)
        )
        .then((res) => res.data),
    onSuccess: (data) => {
      const ID = data.department.hod_id
      queryClient.refetchQueries({ queryKey: ['teacher', ID.toString()] })
      queryClient.setQueryData(['department', departmentID], data)
      queryClient.refetchQueries({ queryKey: ['teachers'] })
      queryClient.refetchQueries({ queryKey: ['departments'] })
      setOpen(false)
    },
  })

  const mutation = useMutation({
    mutationFn: () =>
      authCall.delete(`departments/delete_department/${departmentID}`),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['departments'] })
      queryClient.refetchQueries({ queryKey: ['dashboard'] })
      queryClient.refetchQueries({ queryKey: ['departmentsIDsAndNames'] })
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
    let data
    if (hodID) {
      data = {
        name: nameOfDepartment,
        hod_id: hodID,
      }
    } else {
      data = { name: nameOfDepartment }
    }
    updateMutation.mutate(data)
  }

  const handleDelete = (e) => {
    e.preventDefault()
    mutation.mutate()
  }

  return (
    <>
      {open && (
        <EditDepartment
          setOpen={setOpen}
          titleOfDepartment={department.department.name}
          setNameOfDepartment={setNameOfDepartment}
          nameOfDepartment={nameOfDepartment}
          teachers={department.teachers}
          hodID={hodID}
          setHodID={setHodID}
          handleEdit={handleEdit}
          mutation={updateMutation}
        />
      )}
      <div className="department">
        <div className="mainDepartmentContainer">
          <section className="upSection">
            <h1 className="departmentName">
              {department.department.name} Department
            </h1>
            <div className="actions">
              <button
                className="edit"
                title="Edit Department"
                disabled={mutation.isLoading}
                onClick={() => setOpen(true)}
              >
                <BorderColorIcon />
                <span>Edit Department</span>
              </button>

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
    </>
  )
}

export default Department
