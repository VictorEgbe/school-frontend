import { Chart } from 'react-google-charts'

const BarChart = () => {
  const data = [
    ['Class', 'Boys', 'Girls', 'Total'],
    ['Form1', 28, 30, 58],
    ['Form2', 20, 30, 50],
    ['Form3', 12, 28, 10],
    ['Form4', 30, 5, 35],
    ['Form5', 30, 5, 35],
    ['LSS/LSA', 40, 25, 55],
    ['USS/USA', 12, 15, 27],
  ]

  const options = {
    chart: {
      title: 'Enrolment',
      subtitle: 'Students per class for the year 2023-2024',
    },
  }

  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="360px"
      data={data}
      options={options}
    />
  )
}

export default BarChart
