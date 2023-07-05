import './Department.scss'
import { Link } from 'react-router-dom'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import DeleteIcon from '@mui/icons-material/Delete'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { authCall } from '../../apiCalls/index'
import Spinner from '../../components/loadingSpinner/Spinner'
import Error from '../../components/Error/Error'
import noAvatar from '../../assets/avatar.png'
import { useState } from 'react'
import DepartmentEditForm from '../../components/DepartmentEditForm/DepartmentEditForm'

const Department = () => {
  const [editMode, setEditMode] = useState(false)
  const { departmentID } = useParams()

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
    retry: 1,
  })

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    const errorMsg = error?.response.data.error
    return <Error errorMsg={errorMsg} />
  }

  return (
    <div className="department">
      <div className="mainDepartmentContainer">
        <section className="upSection">
          <h1 className="departmentName">
            {department.department.name} Department
          </h1>
          <div className="actions">
            <button
              onClick={() => setEditMode(true)}
              className="edit"
              title="Edit Department"
            >
              <BorderColorIcon />
              <span>Edit Department</span>
            </button>
            <button className="delete" title="Delete Department">
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
              {editMode && <DepartmentEditForm />}

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
                    <div className="name">{teacher.name}</div>
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
