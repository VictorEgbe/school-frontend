import './Dashboard.scss'
import Card from '../../components/Card/Card'
import { data } from './data'
import BarChart from '../../components/BarChart/BarChart'
import PieChart from '../../components/PieChart/PieChart'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="container">
        <div className="overview">
          <div className="current">Current Year: 2023 - 2024</div>
          <div className="current">Current Term: Second Term</div>
          <div className="current">Current Sequence: First Sequence</div>
        </div>

        <div className="basic">
          <div className="top">
            {data.map((item) => (
              <Card
                key={item.id}
                name={item.name}
                icon={item.icon}
                value={item.value}
                bg={item.bg}
              />
            ))}
          </div>
          <div className="bottom">
            <div className="item">
              <BarChart />
            </div>
            <div className="item">
              <PieChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
