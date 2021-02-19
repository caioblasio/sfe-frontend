import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  ExperimentalDataSelectors,
  ExtractionDataSelectors,
  ResultsActions,
  ResultsSelectors,
  StatusSelectors,
} from "providers";
import ResultItem from "components/ResultItem";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ResultChart from "components/ResultChart";

import useStyles from "./styles";

import { convertToExponential } from "utils/formatter";

const Provider = ({
  calculationValues,
  selectedModels,
  experimentalValues,
  points,
  fetchResults,
  results,
  isLoading,
}) => {
  const classes = useStyles();

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
});

export default connect(mapStateToProps, mapDispatchToProps)(Provider);
