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
            <ResponsiveContainer width="100%" height={400}>
              <ComposedChart
                data={data}
                margin={{ top: 5, right: 30, left: 30, bottom: 5 }}
              >
                <XAxis dataKey="time">
                  <Label
                    value="Time (s)"
                    position="insideBottomRight"
                    offset={0}
                  />
                </XAxis>
                <YAxis
                  tickFormatter={(tick) => {
                    return tick.toExponential(2);
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
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ResultChart;
