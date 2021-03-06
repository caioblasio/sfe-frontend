import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { useForm } from "react-hook-form";
import csv from "csvtojson";
import {
  Grid,
  Button,
  TextField,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import Stepper from "components/Stepper";
import Page from "pages";
import {
  ExtractionDataActions,
  ExtractionDataSelectors,
  ExperimentalDataSelectors,
} from "providers";
import { modelsURL, calculationURL } from "configs/urls";
import Navigator from "components/Navigator";
import useStyles from "./styles";

const Extraction = ({ points, selectedModels, addPoints }) => {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    if (!!!selectedModels.length) {
      history.push(modelsURL());
    }
  }, []);

  const { register, errors, handleSubmit } = useForm();

  const [coordinates, setCoordinates] = useState(points);

  const onSubmit = (data) => {
    const points = data.x.map((xCoord, index) => ({
      x: xCoord,
      y: data.y[index],
    }));
    addPoints(points);
    history.push(calculationURL());
  };

  const readFile = (event) => {
    const reader = new FileReader();
    reader.onload = function () {
      const result = reader.result;
      const csvStr = `x,y
      ${result}`;
      (async () => {
        const jsonObj = await csv().fromString(csvStr);
        setCoordinates(jsonObj);
      })();
    };
    // start reading the file. When it is done, calls the onload event defined above.
    reader.readAsText(event.target.files[0]);
  };

  const generateRows = () => {
    let result = [];
    for (let i = 0; i < coordinates.length; i++) {
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
              onChange={(event) => {
                const newCoordinates = [...coordinates];
                newCoordinates[i].x = event.target.value;
                setCoordinates(newCoordinates);
              }}
              value={coordinates[i]?.x || ""}
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
              onChange={(event) => {
                const newCoordinates = [...coordinates];
                newCoordinates[i].y = event.target.value;
                setCoordinates(newCoordinates);
              }}
              value={coordinates[i]?.y || ""}
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
      <Navigator
        onBack={() => {
          history.goBack();
        }}
        onNext={handleSubmit(onSubmit)}
      />
      <Grid container spacing={4} className={classes.root}>
        <Grid item xs={12}>
          <Typography variant="h5" component="h1">
            Please fill in all the extraction data
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" color="textSecondary" component="h2">
            You can either enter your experimental data manually or using a CSV
            file. The dataset must be: (1) written separated by comma
            (time,mass); (2) each experimental pair must be entered in a
            separate line; (3) decimal numbers must use a point (.) as decimal
            separator
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" color="textSecondary">
            Example of file:
            <Typography
              variant="caption"
              display="block"
              component="span"
              gutterBottom
            >
              0,0
            </Typography>
            <Typography
              variant="caption"
              display="block"
              component="span"
              gutterBottom
            >
              5,0.015
            </Typography>
            <Typography
              variant="caption"
              display="block"
              component="span"
              gutterBottom
            >
              10,0.018
            </Typography>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <input
            accept=".csv"
            id="upload-file"
            multiple
            hidden
            type="file"
            onChange={readFile}
          />
          <label htmlFor="upload-file">
            <Button
              component="span"
              variant="outlined"
              className={classes.buttonFile}
            >
              Upload CSV
            </Button>
          </label>
        </Grid>
        <Grid item xs={12}>
          <Container maxWidth="md">
            <form>
              <Grid container spacing={4} className={classes.tableContainer}>
                <Grid item xs={12}>
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell align="center">
                            Extraction Time (s)
                          </TableCell>
                          <TableCell align="center">
                            Extracted Mass (kg)
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
                      const newCoordinates = [...coordinates];
                      newCoordinates.pop();
                      setCoordinates(newCoordinates);
                    }}
                  >
                    Remove Row
                  </Button>
                  <Button
                    color="default"
                    variant="outlined"
                    onClick={() => {
                      setCoordinates([...coordinates, {}]);
                    }}
                  >
                    Add Row
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
