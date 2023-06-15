import './Dashboard.scss'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="container">
        <div className="overview">
          <div className="current">Current Year: 2023 - 2024</div>
          <div className="current">
            Motto: Integrity, Discipline and Success
          </div>
        </div>

        <div className="basic">
          <div className="left">
            <div className="card">Card 1</div>
            <div className="card"> Card 2</div>
            <div className="card">Card 3</div>
          </div>
          <div className="right">
            <div className="table">Teachers table</div>
            <div className="table">Students table </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
