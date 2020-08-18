import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
  ScatterSeries,
  Legend,
  Title,
} from "@devexpress/dx-react-chart-material-ui";
import {} from "@devexpress/dx-react-chart";

// const data = [
//   { time: 60, experimental: 0.54, sovova: 0.43, reverchon: 0.965 },
//   { time: 40, experimental: 1.5, sovova: 1.62, reverchon: 2.435 },
//   { time: 120, experimental: 1.24, sovova: 1.34, reverchon: 2.4536 },
// ];

const ResultChart = ({ data }) => {
  if (!data.length) {
    return null;
  }

  return (
    <Paper>
      <Chart data={data}>
        <ArgumentAxis />
        <ValueAxis />
        <ScatterSeries
          valueField="experimental"
          argumentField="time"
          name="Experimental Data"
        />
        {Object.keys(data[0])
          .filter((key) => key !== "time" && key !== "experimental")
          .map((key) => (
            <LineSeries
              valueField={key}
              argumentField="time"
              name={MODELS[key].name}
            />
          ))}
        <Legend />
        <Title text="Results Chart" />
      </Chart>
    </Paper>
  );
};

export default ResultChart;
