import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { useForm } from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Stepper from "components/Stepper";
import Paper from "@material-ui/core/Paper";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import Page from "pages";
import {
  ExtractionDataActions,
  ExtractionDataSelectors,
  ExperimentalDataSelectors,
} from "providers";
import useStyles from "./styles";
import { modelsURL, calculationURL } from "configs/urls";

const Extraction = ({ points, selectedModels, addPoints }) => {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    if (!!!selectedModels.length) {
      history.push(modelsURL());
    }
  }, []);

  const { register, errors, handleSubmit } = useForm();
  const [tableRows, setTableRows] = useState(points.length || 1);

  const onSubmit = (data) => {
    const points = data.x.map((xCoord, index) => ({
      x: xCoord,
      y: data.y[index],
    }));
    addPoints(points);
    history.push(calculationURL());
  };

  const generateRows = () => {
    let result = [];
    for (let i = 0; i < tableRows; i++) {
      result.push(
        <TableRow key={i}>
          <TableCell align="center">
            <TextField
              error={!!errors?.x?.[i]}
              variant="outlined"
              name={`x[${i}]`}
              inputRef={register({
                required: "This field is required",
                pattern: {
                  value: /^[+-]?([0-9]*[.])?[0-9]+$/,
                  message: "Must be a number",
                },
              })}
              defaultValue={points[i]?.x || ""}
              helperText={errors?.x?.[i]?.message}
            />
          </TableCell>
          <TableCell align="center">
            <TextField
              error={!!errors?.y?.[i]}
              variant="outlined"
              name={`y[${i}]`}
              inputRef={register({
                required: "This field is required",
                pattern: {
                  value: /^[+-]?([0-9]*[.])?[0-9]+$/,
                  message: "Must be a number",
                },
              })}
              defaultValue={points[i]?.y || ""}
              helperText={errors?.y?.[i]?.message}
            />
          </TableCell>
        </TableRow>
      );
    }
    return result;
  };

  return (
    <Page>
      <Stepper activeStep={2} />
      <Grid container spacing={4} className={classes.root}>
        <Grid item xs={12}>
          <Typography variant="h5" component="h1">
            Please fill in all the extraction data
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Container maxWidth="md">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Grid
                    container
                    spacing={4}
                    className={classes.tableContainer}
                  >
                    <Grid item xs={12}>
                      <TableContainer component={Paper}>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell align="center">
                                Extraction Time (min)
                              </TableCell>
                              <TableCell align="center">
                                Extracted Mass (g)
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>{generateRows()}</TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                    <Grid item xs={12} className={classes.buttonContainer}>
                      <Button
                        color="default"
                        variant="outlined"
                        onClick={() => {
                          setTableRows((state) => state - 1);
                        }}
                      >
                        Remove Row
                      </Button>
                      <Button
                        color="default"
                        variant="outlined"
                        onClick={() => {
                          setTableRows((state) => state + 1);
                        }}
                      >
                        Add Row
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    size="large"
                    variant="contained"
                    color="default"
                    startIcon={<NavigateBeforeIcon />}
                    onClick={() => {
                      history.goBack();
                    }}
                  >
                    Back
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    size="large"
                    variant="contained"
                    color="primary"
                    endIcon={<NavigateNextIcon />}
                    type="submit"
                  >
                    Next
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Container>
        </Grid>
      </Grid>
    </Page>
  );
};

const mapStateToProps = createStructuredSelector({
  points: ExtractionDataSelectors.getPoints(),
  selectedModels: ExperimentalDataSelectors.getModels(),
});

const mapDispatchToProps = (dispatch) => ({
  addPoints: (values) => dispatch(ExtractionDataActions.addPoints(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Extraction);
