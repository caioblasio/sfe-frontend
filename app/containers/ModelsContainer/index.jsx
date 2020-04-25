import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getModels } from "providers/ExperimentalData/selectors";
import ModelsComponent from "components/ModelsComponent";

const ModelsContainer = (props) => <ModelsComponent {...props} />;

const mapStateToProps = createStructuredSelector({
  selectedModels: getModels(),
});

const mapDispatchToProps = (dispatch) => ({
  addModel: (models) => dispatch(deleteContact(models)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModelsContainer);
