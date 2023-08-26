import { Chart } from "react-google-charts";

const BarChart = ({ enrollment }) => {
  const { boys, girls, total } = enrollment;
  const constructedData = [
    [`CLASS ENROLLMENT (${total})`, "Boys", "Girls", "Total"],
    [" ", boys, girls, total],
  ];

  return (
    <Chart
      chartType="Bar"
      data={constructedData}
      width={"95%"}
      height={"150px"}
    />
  );
};

export default BarChart;
