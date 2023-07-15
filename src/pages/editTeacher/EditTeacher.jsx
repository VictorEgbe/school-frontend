import './EditTeacher.scss'
import noImage from '../../assets/noImage.webp'
import Folder from '@mui/icons-material/Folder'
import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query'
import { authCall } from '../../apiCalls/index'
import Error from '../../components/Error/Error'
import Spinner from '../../components/loadingSpinner/Spinner'
import { useEffect } from 'react'
import AddIcon from '@mui/icons-material/Add'
import AddDepartment from '../newTeacher/AddDepartment/AddDepartment'
import { CircularProgress } from '@mui/material'

const EditTeacher = () => {
  const [image, setImage] = useState(null)
  const [gender, setGender] = useState('')
  const [departmentID, setDepartmentID] = useState(undefined)
  const [inputInfo, setInputInfo] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    address: '',
    email: '',
    username: '',
    date_of_birth: '',
  })
  const [open, setOpen] = useState(false)
  const [newImage, setNewImage] = useState(null)
  const { teacherID } = useParams()
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const departmentQuery = useQuery({
    queryKey: ['departmentsIDsAndNames'],
    queryFn: () =>
      authCall
        .get('others/get_departments_ids_and_names')
        .then((res) => res.data),
  })

  const query = useQuery({
    queryKey: ['updateTeacher', teacherID],
    queryFn: () =>
      authCall
        .get(`others/get_teacher_update_info/${teacherID}`)
        .then((res) => res.data),
    retry: 2,
  })

  useEffect(() => {
    if (departmentQuery.data) {
      departmentQuery.data.length !== 0 &&
        setDepartmentID(departmentQuery.data[0].id)
    }
  }, [departmentQuery.data])

  useEffect(() => {
    if (query.data) {
      const { image, gender, department, ...others } = query.data
      setImage(image)
      setGender(gender)
      setInputInfo({ ...others })
      setDepartmentID(department.id)
    }
  }, [query.data])

  const { isError, error, mutate, isLoading } = useMutation({
    mutationFn: (apiData) =>
      authCall
        .put(`teachers/update_teacher/${teacherID}/${departmentID}`, apiData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then((res) => res.data),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['teacher', teacherID] })
      queryClient.refetchQueries({ queryKey: ['dashboard'] })
      queryClient.refetchQueries({ queryKey: ['departments'] })
      queryClient.refetchQueries({ queryKey: ['teachers'] })
      queryClient.refetchQueries({ queryKey: ['updateTeacher', teacherID] })
      navigate(`/teachers/${teacherID}`)
    },
  })

  if (query.isLoading) {
    return <Spinner />
  }

  if (query.isError) {
    const errorMsg = 'Something went wrong. Please reload page.'
    return <Error errorMsg={errorMsg} />
  }

  const handleChange = (e) => {
    setInputInfo({ ...inputInfo, [e.target.name]: e.target.value })
  }

  const handleImageChange = (e) => {
    setImage(null)
    setNewImage(e.target.files[0])
  }

  const handleClearImage = () => {
    setImage(null)
    setNewImage(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let formData = new FormData()

    if (newImage) {
      formData.append('image', newImage, newImage.name)
    }
    formData.append('gender', gender)
    formData.append('first_name', inputInfo.first_name)
    formData.append('last_name', inputInfo.last_name)
    formData.append('phone', inputInfo.phone)
    formData.append('address', inputInfo.address)
    formData.append('email', inputInfo.email)
    formData.append('username', inputInfo.username)
    formData.append('date_of_birth', inputInfo.date_of_birth)
    mutate(formData)
  }

  return (
    <>
      {open && <AddDepartment setOpen={setOpen} />}
      <div className="editTeacher">
        <div className="container">
          <h1>Edit {"Teacher's"} information</h1>
          <form onSubmit={handleSubmit}>
            <div className="left">
              {image ? (
                <img src={image} alt="" />
              ) : (
                <img
                  src={newImage ? URL.createObjectURL(newImage) : noImage}
                  alt=""
                />
              )}

              <div>
                <label className="folder" htmlFor="image">
                  Select an image: <Folder />
                </label>
                <input
                  id="image"
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  style={{ display: 'none' }}
                  onChange={handleImageChange}
                />
              </div>
              {(image || newImage) && (
                <button onClick={handleClearImage} type="button">
                  Remove image
                </button>
              )}
            </div>

            <div className="right">
              <div className="formGroup">
                <label htmlFor="first_name">First Name</label>
                <input
                  onChange={handleChange}
                  id="first_name"
                  type="text"
                  placeholder="e.g John"
                  value={inputInfo.first_name}
                  disabled={isLoading}
                  name="first_name"
                  required
                  className={
                    isError
                      ? error.response.data?.first_name
                        ? 'errorMsg'
                        : ''
                      : ''
                  }
                />
                {error?.response.data?.first_name && (
                  <span>{error.response.data?.first_name[0]}</span>
                )}
              </div>

              <div className="formGroup">
                <label htmlFor="last_name">Last Name</label>
                <input
                  onChange={handleChange}
                  id="last_name"
                  type="text"
                  placeholder="e.g Doe"
                  value={inputInfo.last_name}
                  disabled={isLoading}
                  name="last_name"
                  required
                  className={
                    isError
                      ? error.response.data?.last_name
                        ? 'errorMsg'
                        : ''
                      : ''
                  }
                />
                {error?.response.data?.last_name && (
                  <span>{error.response.data?.last_name[0]}</span>
                )}
              </div>

              <div className="formGroup">
                <label htmlFor="phone">Phone Number</label>
                <input
                  onChange={handleChange}
                  id="phone"
                  type="text"
                  placeholder="e.g 666777888"
                  value={inputInfo.phone}
                  disabled={isLoading}
                  name="phone"
                  required
                  className={
                    isError
                      ? error.response.data?.phone
                        ? 'errorMsg'
                        : ''
                      : ''
                  }
                />
                {error?.response.data?.phone && (
                  <span>{error.response.data?.phone[0]}</span>
                )}
              </div>

              <div className="formGroup">
                <label htmlFor="address">Address</label>
                <input
                  onChange={handleChange}
                  id="address"
                  type="text"
                  placeholder="e.g TKC, Yaounde"
                  value={inputInfo.address}
                  disabled={isLoading}
                  name="address"
                  required
                  className={
                    isError
                      ? error.response.data?.address
                        ? 'errorMsg'
                        : ''
                      : ''
                  }
                />
                {error?.response.data?.address && (
                  <span>{error.response.data?.address[0]}</span>
                )}
              </div>

              <div className="formGroup">
                <label htmlFor="email">Email</label>
                <input
                  onChange={handleChange}
                  id="email"
                  type="email"
                  placeholder="jdoe@company.com"
                  value={inputInfo.email}
                  disabled={isLoading}
                  name="email"
                  required
                  className={
                    isError
                      ? error.response.data?.email
                        ? 'errorMsg'
                        : ''
                      : ''
                  }
                />
                {error?.response.data?.email && (
                  <span>{error.response.data?.email[0]}</span>
                )}
              </div>

              <div className="formGroup">
                <label htmlFor="username">Username</label>
                <input
                  onChange={handleChange}
                  id="username"
                  type="text"
                  placeholder="JohnDoe"
                  value={inputInfo.username}
                  disabled={isLoading}
                  name="username"
                  required
                  className={
                    isError
                      ? error.response.data?.username
                        ? 'errorMsg'
                        : ''
                      : ''
                  }
                />
                {error?.response.data?.username && (
                  <span>{error.response.data?.username[0]}</span>
                )}
              </div>

              <div className="formGroup">
                <label htmlFor="dob">Date of birth</label>
                <input
                  onChange={handleChange}
                  id="dob"
                  type="date"
                  value={inputInfo.date_of_birth}
                  disabled={isLoading}
                  name="date_of_birth"
                  required
                  className={
                    isError
                      ? error.response.data?.date_of_birth
                        ? 'errorMsg'
                        : ''
                      : ''
                  }
                />
                {error?.response.data?.date_of_birth && (
                  <span>{error.response.data?.date_of_birth[0]}</span>
                )}
              </div>

              <div className="formGroup">
                <label htmlFor="gender">Gender: </label>
                <select
                  required
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

              <div className="departmentSelect">
                <label htmlFor="department">Department: </label>
                <div>
                  <select
                    required
                    value={departmentID}
                    onChange={(e) => setDepartmentID(e.target.value)}
                    disabled={isLoading}
                    className="select"
                  >
                    {departmentQuery.data.map((depart) => (
                      <option value={depart.id} key={depart.id}>
                        {depart.name}
                      </option>
                    ))}
                  </select>
                  <div
                    onClick={() => setOpen(true)}
                    title="Add a department"
                    className="add"
                  >
                    <AddIcon className="addIcon" />
                  </div>
                </div>
              </div>

              <div className="button">
                <Link
                  to={`/teachers/${teacherID}`}
                  className="btn link"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <CircularProgress size={22} color="inherit" />
                  ) : (
                    'Cancel'
                  )}
                </Link>

                <button className="btn" type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <CircularProgress size={22} color="inherit" />
                  ) : (
                    'Update'
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default EditTeacher
