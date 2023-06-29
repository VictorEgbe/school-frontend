import { Chart } from 'react-google-charts'

const PieChart = ({ departmentsInfo }) => {
  const constructedData = [['Department', 'Number of teachers']]

  let data

  if (departmentsInfo.length < 1) {
    data = constructedData
  } else {
    for (let i = 0; i < departmentsInfo.length; i++) {
      let info = departmentsInfo[i]
      constructedData.push([info.name, info.numberOfTeachers])
    }
    data = constructedData
  }

  const options = {
    title: 'NUMBER OF TEACHER PER DEPARTMENT',
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
