import { useLocation } from 'react-router-dom'
import './Teacher.scss'

const Teacher = () => {
  const { name } = useLocation().state

  return <div className="teacher">Teacher: {name}</div>
}

export default Teacher
