import { Chart } from 'react-google-charts'

const StatisticsBar = ({ data }) => {
  const options = {
    chart: {
      title: `${data.subjectName}`.toLocaleUpperCase(),
      subtitle: `Teacher(s): ${data.teacher}`,
    },
  }

  const dataFromProps = [
    ['Gender', 'Passed', 'Failed', 'Percentage Passed'],
    ['Boys', data.boysPassed, data.boys - data.boysPassed, data.percentageBoys],
    [
      'Girls',
      data.girlsPassed,
      data.girls - data.girlsPassed,
      data.percentageGirls,
    ],
    [
      'Overall',
      data.boysPassed + data.girlsPassed,
      data.total - (data.boysPassed + data.girlsPassed),
      data.percentageClass,
    ],
  ]
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={dataFromProps}
      options={options}
    />
  )
}

export default StatisticsBar
