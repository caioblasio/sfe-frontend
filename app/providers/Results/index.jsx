import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  ExperimentalDataSelectors,
  ExtractionDataSelectors,
  ResultsActions,
  ResultsSelectors,
} from "providers";
//import useStyles from "./styles";
import ResultItem from "components/ResultItem";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ResultChart from "components/ResultChart";

const Provider = ({
  calculationValues,
  selectedModels,
  experimentalValues,
  points,
  fetchResults,
  results,
}) => {
  //const classes = useStyles();

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
    const experimentalChartData = results[Object.keys(results)[0]].data
      .map(({ time, experimental }) => ({
        time: Number(time),
        experimental: Number(experimental),
      }))
      .map((data) => Object.values(data));

    let result = [
      { label: "Experimental", data: experimentalChartData },
      ...Object.keys(results).map((key) => ({
        label: key,
        data: results[key].data
          .map(({ time, calculated }) => ({
            time: Number(time),
            calculated: Number(calculated),
          }))
          .map((data) => Object.values(data)),
      })),
    ];

    return result;
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h5" component="h1">
          Results of your simulation
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {Object.keys(results).length ? (
          <ResultChart data={getChartData()} />
        ) : null}
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
});

const mapDispatchToProps = (dispatch) => ({
  fetchResults: (models, data) =>
    dispatch(ResultsActions.fetchResults(models, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Provider);
