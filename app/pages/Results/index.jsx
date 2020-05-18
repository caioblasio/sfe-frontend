import React, { useEffect, useCallback } from "react";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import {
  ExperimentalDataSelectors,
  ExtractionDataSelectors,
  ResultsActions,
} from "providers";
//import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Page from "pages";
import { modelsURL } from "configs/urls";

const Results = ({
  calculationValues,
  selectedModels,
  experimentalValues,
  points,
  fetchResults,
}) => {
  //const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    if (!!!selectedModels.length) {
      history.push(modelsURL());
    } else {
      let data = {
        values: {
          ...experimentalValues,
          ...calculationValues,
          nexxp: points.length,
        },
        points,
      };

      fetchResults(selectedModels, data);
    }
  }, []);

  return <Page></Page>;
};

const mapStateToProps = createStructuredSelector({
  calculationValues: ExperimentalDataSelectors.getCalculationValues(),
  experimentalValues: ExperimentalDataSelectors.getValues(),
  selectedModels: ExperimentalDataSelectors.getModels(),
  points: ExtractionDataSelectors.getPoints(),
});

const mapDispatchToProps = (dispatch) => ({
  fetchResults: (models, data) =>
    dispatch(ResultsActions.fetchResults(models, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
