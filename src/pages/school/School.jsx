import './School.scss'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import SchoolIcon from '@mui/icons-material/School'
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import LanguageIcon from '@mui/icons-material/Language'

const School = () => {
  return (
    <div className="school">
      <div className="container">
        <div className="edit">
          <div className="icon" title="Edit school info">
            <BorderColorIcon />
          </div>
        </div>
        <main>
          <div className="logo">
            <img
              src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/04/attachment_70879158-e1491506349597.jpg?auto=format&q=60&fit=max&w=930"
              alt=""
            />
          </div>
          <div className="info">
            <div className="infoContainer">
              <div className="infoItem">
                <SchoolIcon />
                <span>Quality International School</span>
              </div>
              <div className="infoItem">
                <AirportShuttleIcon />
                <span>Discipline, Integrity and Success</span>
              </div>
              <div className="infoItem">
                <LocationOnIcon />
                <span>T.K.C Yaounde, Cameroon</span>
              </div>
              <div className="infoItem">
                <EmailIcon />
                <span>qis@gmail.com</span>
              </div>
              <div className="infoItem">
                <LanguageIcon />
                <span>https://www.qis.com</span>
              </div>
              <div className="infoItem">
                <PhoneIcon />
                <span>+237 675725140 / 237 650813187</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default School
