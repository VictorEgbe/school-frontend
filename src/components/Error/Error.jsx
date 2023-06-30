import './Error.scss'
import sadFace from './sadFace.webp'

const Error = ({ errorMsg }) => {
  return (
    <div className="error">
      <div className="container">
        <img src={sadFace} alt="" />
        {errorMsg}
      </div>
    </div>
  )
}

export default Error
