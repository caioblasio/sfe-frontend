import { combineReducers } from "redux";
import resultsReducer from "providers/Results/reducer";
import experimentalDataReducer from "providers/ExperimentalData/reducer";
import extractionDataReducer from "providers/ExtractionData/reducer";
import statusReducer from "providers/Status/reducer";

export default combineReducers({
  experimentalData: experimentalDataReducer,
  extractionData: extractionDataReducer,
  results: resultsReducer,
  status: statusReducer,
});
