import './Card.scss'

const Card = ({ name, icon, value }) => {
  return (
    <div className="card">
      <div className="up">{name}</div>
      <div className="down">
        {icon}
        <span>{value}</span>
      </div>
    </div>
  )
}

export default Card
