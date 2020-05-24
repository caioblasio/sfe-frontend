import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { ExperimentalDataSelectors, StatusSelectors } from "providers";
import useStyles from "./styles";
import ResultsProvider from "providers/Results";
import Page from "pages";
import { modelsURL } from "configs/urls";
import Loading from "components/Loading";

const Results = ({ selectedModels, isLoading }) => {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    if (!!!selectedModels.length) {
      history.push(modelsURL());
    }
  }, []);

  return (
    <>
      <Loading open={isLoading} />
      <Page className={classes.root}>
        <ResultsProvider />
      </Page>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  selectedModels: ExperimentalDataSelectors.getModels(),
  isLoading: StatusSelectors.isLoading(),
});

export default connect(mapStateToProps)(Results);
