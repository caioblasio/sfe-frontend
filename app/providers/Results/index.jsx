import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { Grid, Typography, Button } from "@material-ui/core";
import {
  ExperimentalDataSelectors,
  ExtractionDataSelectors,
  ResultsActions,
  ResultsSelectors,
  StatusSelectors,
} from "providers";
import ResultItem from "components/ResultItem";
import ResultChart from "components/ResultChart";
import { modelsURL } from "configs/urls";
import useStyles from "./styles";

const Provider = ({
  calculationValues,
  selectedModels,
  experimentalValues,
  points,
  fetchResults,
  results,
  isLoading,
  resetResults,
}) => {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    const data = {
      values: {
        ...experimentalValues,
        ...calculationValues,
        nexxp: points.length,
      },
      points,
    };

    fetchResults(selectedModels, data);
  }, [selectedModels, experimentalValues, calculationValues]);

  const getChartData = () => {
    let data = [];
    Object.keys(results).forEach((key) => {
      results[key].data
        .map(({ time, experimental, calculated }) => ({
          time: Number(time),
          experimental: Number(experimental),
          [`${key}`]: Number(calculated),
        }))
        .forEach((set, index) => {
          data[index] = { ...data[index], ...set };
        });
    });

    return data;
  };

  if (isLoading) {
    return null;
  }

  return (
    <Grid container spacing={4} className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h5" component="h1">
          Results of your simulation
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.new}>
        <Button
          color="default"
          variant="outlined"
          onClick={() => {
            resetResults();
            history.push(modelsURL());
          }}
        >
          Click here to start a new simulation
        </Button>
      </Grid>
      <Grid item xs={12}>
        <ResultChart data={getChartData()} />
      </Grid>
      {Object.keys(results).map((model) => (
        <Grid item xs={12}>
          <ResultItem
            model={model}
            data={results[model].data}
            values={results[model].values}
          />
        </Grid>
      ))}
    </Grid>
  );
};

const mapStateToProps = createStructuredSelector({
  calculationValues: ExperimentalDataSelectors.getCalculationValues(),
  experimentalValues: ExperimentalDataSelectors.getValues(),
  selectedModels: ExperimentalDataSelectors.getModels(),
  points: ExtractionDataSelectors.getPoints(),
  results: ResultsSelectors.getResults(),
  isLoading: StatusSelectors.isLoading(),
});

const mapDispatchToProps = (dispatch) => ({
  fetchResults: (models, data) =>
    dispatch(ResultsActions.fetchResults(models, data)),
  resetResults: () => {
    dispatch(ResultsActions.resetResults());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Provider);
