import './NewTeacher.scss'
import noImage from '../../assets/noImage.webp'
import Folder from '@mui/icons-material/Folder'
import { userInput } from './data'
import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { authCall } from '../../apiCalls'
import { useNavigate } from 'react-router-dom'
import Error from '../../components/Error/Error'
import Spinner from '../../components/loadingSpinner/Spinner'
import CircularProgress from '@mui/material/CircularProgress'
import { useEffect } from 'react'
import AddIcon from '@mui/icons-material/Add'
import AddDepartment from './AddDepartment/AddDepartment'

const NewTeacher = () => {
  const [image, setImage] = useState(null)
  const [gender, setGender] = useState('Male')
  const [inputInfo, setInputInfo] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    address: '',
    email: '',
    username: '',
    date_of_birth: '',
    password: '',
    password2: '',
  })

  const [departmentID, setDepartmentID] = useState(0)
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const [open, setOpen] = useState(false)

  const query = useQuery({
    queryKey: ['departmentsIDsAndNames'],
    queryFn: () =>
      authCall
        .get('others/get_departments_ids_and_names')
        .then((res) => res.data),
  })

  const { isError, error, mutate, isLoading } = useMutation({
    mutationFn: (apiData) =>
      authCall
        .post(`teachers/create_teacher/${departmentID}`, apiData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then((res) => res.data),
    onSuccess: (data) => {
      queryClient.refetchQueries({ queryKey: ['teachers'] })
      queryClient.refetchQueries({ queryKey: ['dashboard'] })
      queryClient.refetchQueries({ queryKey: ['departments'] })
      navigate(`/teachers/${data.id}`)
    },
  })

  useEffect(() => {
    if (query.data) {
      query.data.length !== 0 && setDepartmentID(query.data[0].id)
    }
  }, [query.data])

  const handleChange = (e) => {
    setInputInfo({ ...inputInfo, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let formData = new FormData()
    if (image) {
      formData.append('image', image, image.name)
    }
    formData.append('gender', gender)
    formData.append('first_name', inputInfo.first_name)
    formData.append('last_name', inputInfo.last_name)
    formData.append('phone', inputInfo.phone)
    formData.append('address', inputInfo.address)
    formData.append('email', inputInfo.email)
    formData.append('username', inputInfo.username)
    formData.append('date_of_birth', inputInfo.date_of_birth)
    formData.append('password', inputInfo.password)
    formData.append('password2', inputInfo.password2)
    mutate(formData)
  }

  if (query.isLoading) {
    return <Spinner />
  }

  if (query.isError) {
    const errorMsg = 'Something went wrong. Please reload page.'
    return <Error errorMsg={errorMsg} />
  }

  return (
    <>
      {open && <AddDepartment setOpen={setOpen} />}
      <div className="newTeacher">
        <div className="container">
          <h1>Add A New Teacher</h1>
          <form onSubmit={handleSubmit}>
            <div className="left">
              <img src={image ? URL.createObjectURL(image) : noImage} alt="" />

              <div>
                <label className="folder" htmlFor="image">
                  Select an image: <Folder />
                </label>
                <input
                  id="image"
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  style={{ display: 'none' }}
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
              {image && (
                <button onClick={() => setImage(null)} type="button">
                  Remove image
                </button>
              )}
            </div>
            <div className="right">
              {userInput.map((input, index) => (
                <div className="formGroup" key={index}>
                  <label htmlFor={input.id}>{input.label}</label>
                  <input
                    required
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleChange}
                    name={input.id}
                    disabled={isLoading}
                    className={
                      !isError
                        ? ''
                        : error.response.data?.email && input.id === 'email'
                        ? 'errorMsg'
                        : error.response.data?.username &&
                          input.id === 'username'
                        ? 'errorMsg'
                        : error.response.data?.phone && input.id === 'phone'
                        ? 'errorMsg'
                        : error.response.data?.password2 &&
                          input.id === 'password2'
                        ? 'errorMsg'
                        : ''
                    }
                  />
                  {error?.response.data?.email && input.id === 'email' && (
                    <span>{error.response.data?.email[0]}</span>
                  )}
                  {error?.response.data?.phone && input.id === 'phone' && (
                    <span>{error.response.data?.phone[0]}</span>
                  )}
                  {error?.response.data?.password2 &&
                    input.id === 'password2' && (
                      <span>{error.response.data?.password2[0]}</span>
                    )}
                  {error?.response.data?.username &&
                    input.id === 'username' && (
                      <span>{error.response.data?.username[0]}</span>
                    )}
                </div>
              ))}

              <div className="formGroup">
                <label htmlFor="gender">Gender: </label>
                <select
                  required
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  disabled={isLoading}
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
                    {query.data.map((depart) => (
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
                <button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <CircularProgress size={22} color="inherit" />
                  ) : (
                    'Create'
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

export default NewTeacher
