import './Card.scss'

const Card = ({ name, icon, value, bg }) => {
  return (
    <div className="card">
      <div className="up" style={{ backgroundColor: bg }}>
        {name}
      </div>
      <div className="down" style={{ color: bg }}>
        {icon}
        <span>{value}</span>
      </div>
    </div>
  )
}

export default Card
