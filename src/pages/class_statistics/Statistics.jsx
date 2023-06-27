import './ClassStatistics.scss'
import { subjectsStatistics } from './data'
import StatisticsBar from './BarChart'

const ClassStatistics = () => {
  return (
    <div className="classStatistics">
      <div className="wrapper">
        <p className="className">Form One subjects statistics</p>
        <div className="statsWrapper">
          {subjectsStatistics.map((stats) => (
            <div className="stats" key={stats.id}>
              <div className="statsContainer">
                <StatisticsBar data={stats} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ClassStatistics
