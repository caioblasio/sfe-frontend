import React from "react";
import { Chart } from "react-charts";
//import useStyles from "./styles";

const ResultChart = ({ data }) => {
  //const classes = useStyles();

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );
  return (
    <div
      style={{
        width: "400px",
        height: "300px",
      }}
    >
      <Chart data={data} axes={axes} />
    </div>
  );
};

export default ResultChart;
