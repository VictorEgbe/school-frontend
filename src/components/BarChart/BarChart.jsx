import { Chart } from 'react-google-charts'

const BarChart = ({ classStudents, currentYear }) => {
  const constructedData = [['Classes', 'Boys', 'Girls', 'Total']]

  for (let i = 0; i < classStudents.length; i++) {
    let info = classStudents[i]
    constructedData.push([info.name, info.boys, info.girls, info.total])
  }

  const options = {
    chart: {
      title: 'Enrolment',
      subtitle: `Students per class for the year ${currentYear}`,
    },
  }

  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="360px"
      data={constructedData}
      options={options}
    />
  )
}

export default BarChart
