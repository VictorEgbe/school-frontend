import './EditTeacher.scss'
import Avatar from '../../assets/avatar.png'
import Folder from '@mui/icons-material/Folder'
import { Send } from '@mui/icons-material'
import { userInput } from './data'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query'
import { authCall } from '../../apiCalls/index'
import Error from '../../components/Error/Error'
import Spinner from '../../components/loadingSpinner/Spinner'

const EditTeacher = () => {
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

  const { teacherID } = useParams()
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const [department, setDepartment] = useState({})

  const query = useQuery({
    queryKey: ['teachers', teacherID],
    queryFn: () =>
      authCall.get(`teachers/get_teacher/${teacherID}`).then((res) => {
        // Extract information here and set it (useState)
        return res.data
      }),
    retry: 2,
  })

  const mutation = useMutation({
    mutationFn: (apiData) =>
      authCall
        .put(
          `update_teacher/${teacherID}/${department.id}`,
          JSON.stringify(apiData)
        )
        .then((res) => res.data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['teachers', teacherID] })
      navigate(`/teachers/${data.id}`)
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

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { ...inputInfo, gender, image }
    console.log(data)
    // Make api call here
  }

  return (
    <div className="editTeacher">
      <div className="container">
        <h1>Edit {"Teacher's"} information</h1>
        <form onSubmit={handleSubmit}>
          <div className="left">
            <img src={image ? URL.createObjectURL(image) : Avatar} alt="" />

            <div>
              <label className="folder" htmlFor="image">
                Select an image: <Folder />
              </label>
              <input
                required
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
                />
              </div>
            ))}

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

            <div className="button">
              <button type="submit">
                <Send /> Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditTeacher
