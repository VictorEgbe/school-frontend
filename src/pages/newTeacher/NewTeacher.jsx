import './NewTeacher.scss'
import noImage from '../../assets/noImage.webp'
import Folder from '@mui/icons-material/Folder'
import { userInput } from './data'
import { useState } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { authCall } from '../../apiCalls'
import { useNavigate } from 'react-router-dom'
import Error from '../../components/Error/Error'
import Spinner from '../../components/loadingSpinner/Spinner'
import CircularProgress from '@mui/material/CircularProgress'

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

  const [departmentID, setDepartmentID] = useState(null)
  const navigate = useNavigate()

  const query = useQuery({
    queryKey: ['departmentsIDsAndNames'],
    queryFn: () =>
      authCall.get('others/get_departments_ids_and_names').then((res) => {
        setDepartmentID(res.data[0].id)
        return res.data
      }),
    retry: 2,
    enabled: false,
  })

  const mutation = useMutation({
    mutationFn: (apiData) =>
      authCall
        .post(`teachers/create_teacher/${departmentID}`, apiData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then((res) => res.data),
    onSuccess: (data) => {
      navigate(`/teachers/${data.id}`)
    },
  })

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
    mutation.mutate(formData)
  }

  if (query.isLoading) {
    return <Spinner />
  }

  if (query.isError) {
    const errorMsg = 'Something went wrong. Please reload page.'
    return <Error errorMsg={errorMsg} />
  }

  return (
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
                  disabled={mutation.isLoading}
                />
              </div>
            ))}

            <div className="formGroup">
              <label htmlFor="gender">Gender: </label>
              <select
                required
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                disabled={mutation.isLoading}
              >
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div className="formGroup">
              <label htmlFor="department">Department: </label>
              <select
                required
                value={departmentID}
                onChange={(e) => setDepartmentID(e.target.value)}
                disabled={mutation.isLoading}
              >
                {query.data.map((depart) => (
                  <option value={depart.id} key={depart.id}>
                    {depart.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="button">
              <button type="submit" disabled={mutation.isLoading}>
                {mutation.isLoading ? (
                  <CircularProgress size={22} color="inherit" />
                ) : (
                  'Create teacher'
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewTeacher
