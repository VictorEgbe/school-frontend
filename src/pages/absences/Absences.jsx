import './Absences.scss'
import { classes } from './data'
import ManIcon from '@mui/icons-material/Man'
import WomanIcon from '@mui/icons-material/Woman'
import { Link } from 'react-router-dom'

const Absences = () => {
  return (
    <div className="absences">
      <div className="wrapper">
        <div className="info">
          <p className="select">Select a class to input the absences</p>
        </div>

        <div className="classesCardsContainer">
          {classes.map((c) => (
            <Link
              to={`/absences/${c.id}`}
              className="classCard link"
              key={c.id}
            >
              <div className="topClass">{c.name}</div>
              <div className="bottomClass">
                <span>
                  <ManIcon /> {c.boys}
                </span>
                <span>
                  <WomanIcon /> {c.girls}
                </span>
                <span>Total: {c.total}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Absences
