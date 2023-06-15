import { Chart } from 'react-google-charts'

const PieChart = () => {
  const data = [
    ['Department', 'Number of teachers'],
    ['Mathematics', 5],
    ['Economics', 3],
    ['Biology', 4],
    ['History', 6],
    ['English Language/Literature', 7],
    ['Chemistry', 7],
  ]

  const options = {
    title: 'PERCENTAGE OF EACH DEPARTMENT',
    is3D: true,
  }

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={'100%'}
      height={'400px'}
    />
  )
}

export default PieChart
