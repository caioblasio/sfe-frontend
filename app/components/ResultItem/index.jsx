import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import useStyles from "./styles";

const ResultItem = ({ model, values, data }) => {
  const classes = useStyles();

  const createParamsTable = () => (
    <Table>
      <TableHead>
        <TableRow>
          {Object.values(MODELS[model].result).map((param) => (
            <TableCell align="right">{param}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          {Object.keys(MODELS[model].result).map((key) => (
            <TableCell align="right">{values[key]}</TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  );

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {MODELS[model].name}
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <TableContainer
              component={Paper}
              className={classes.tableContainer}
            >
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">Fmin</TableCell>
                    <TableCell align="right">tCER</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="right">{values["Fmin"]}</TableCell>
                    <TableCell align="right">{values["tCER"]}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12}>
            <TableContainer
              component={Paper}
              className={classes.tableContainer}
            >
              {createParamsTable()}
            </TableContainer>
          </Grid>
          <Grid item xs={12}>
            <TableContainer
              component={Paper}
              className={classes.tableContainer}
            >
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">Extraction Time</TableCell>
                    <TableCell align="right">
                      Extraction Mass (g) - Experimental
                    </TableCell>
                    <TableCell align="right">
                      Extraction Mass (g) - Calculated
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell align="right">{row.time}</TableCell>
                      <TableCell align="right">{row.experimental}</TableCell>
                      <TableCell align="right">{row.calculated}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ResultItem;
