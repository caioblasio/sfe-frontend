import * as React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  Scatter,
} from "recharts";
import { Typography, Grid, Card, CardContent } from "@material-ui/core";
import { convertToExponential } from "utils/formatter";

const ResultChart = ({ data }) => {
  if (!data.length) {
    return null;
  }

  return (
    <Card variant="outlined">
      <CardContent>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h5" component="h2" gutterBottom>
              Extraction Curve
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <div style={{ height: "400px" }}>
              <ResponsiveContainer width="100%">
                <ComposedChart
                  data={data}
                  margin={{ top: 5, right: 30, left: 30, bottom: 5 }}
                >
                  <XAxis
                    dataKey="time"
                    type="number"
                    scale="time"
                    domain={[0, "dataMax"]}
                  >
                    <Label
                      value="Time (s)"
                      position="insideBottomRight"
                      offset={0}
                    />
                  </XAxis>
                  <YAxis
                    tickFormatter={(tick) => {
                      return convertToExponential(tick, 2);
                    }}
                  >
                    <Label
                      value="Mass (kg)"
                      position="left"
                      offset={10}
                      angle={-90}
                    />
                  </YAxis>
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  {Object.keys(data[0])
                    .filter((key) => key !== "time" && key !== "experimental")
                    .map((key) => (
                      <Line
                        key={key}
                        type="monotone"
                        dataKey={key}
                        name={MODELS[key].name}
                        stroke={MODELS[key].chartColor}
                      />
                    ))}
                  <Scatter
                    name="Experimental"
                    dataKey="experimental"
                    fill="#424242"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ResultChart;
