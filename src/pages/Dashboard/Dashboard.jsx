import './Dashboard.scss'
import Card from '../../components/Card/Card'
import Groups from '@mui/icons-material/Groups'
import People from '@mui/icons-material/People'
import Diversity3 from '@mui/icons-material/Diversity3'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import BarChart from '../../components/BarChart/BarChart'
import PieChart from '../../components/PieChart/PieChart'
import { useQuery } from '@tanstack/react-query'
import { authCall } from '../../apiCalls/index'

const Dashboard = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['dashboard'],
    queryFn: () => authCall.get('others/dashboard').then((res) => res.data),
  })

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (isError) {
    return <h1>{error}</h1>
  }

  return (
    <div className="dashboard">
      <div className="container">
        <div className="overview">
          <div className="current">Current Year: {data?.currentYear}</div>
          <div className="current">Current Term: {data?.currentTerm}</div>
          <div className="current">
            Current Sequence: {data?.currentSequence}
          </div>
        </div>

        <div className="basic">
          <div className="top">
            <Card
              name="students"
              value={data.students}
              icon={<Groups sx={{ fontSize: '40px' }} />}
            />
            <Card
              name="departments"
              value={data.departments}
              icon={<Diversity3 sx={{ fontSize: '40px' }} />}
            />
            <Card
              name="teachers"
              value={data.teachers}
              icon={<People sx={{ fontSize: '40px' }} />}
            />
            <Card
              name="admins"
              value={data.admins}
              icon={<AdminPanelSettingsIcon sx={{ fontSize: '40px' }} />}
            />
          </div>
          <div className="bottom">
            <div className="item">
              <BarChart
                classStudents={data?.classStudents}
                currentYear={data.currentYear}
              />
            </div>
            <div className="item">
              <PieChart departmentsInfo={data.departmentsInfo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
