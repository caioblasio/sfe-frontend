import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import {
  ExperimentalDataSelectors,
  ExtractionDataSelectors,
  ResultsActions,
  StatusSelectors,
} from "providers";

import ResultsProvider from "providers/Results";
//import useStyles from "./styles";
import Page from "pages";
import { modelsURL } from "configs/urls";
import Loading from "components/Loading";

const Results = ({ selectedModels, isLoading }) => {
  //const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    if (!!!selectedModels.length) {
      history.push(modelsURL());
    }
  }, []);

  return (
    <>
      <Loading open={isLoading} />
      <Page>
        <ResultsProvider />
      </Page>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  selectedModels: ExperimentalDataSelectors.getModels(),
  isLoading: StatusSelectors.isLoading(),
});

const mapDispatchToProps = (dispatch) => ({
  fetchResults: (models, data) =>
    dispatch(ResultsActions.fetchResults(models, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
