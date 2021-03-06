import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { useForm } from "react-hook-form";
import { Grid, TextField } from "@material-ui/core";
import { ExperimentalDataActions, ExperimentalDataSelectors } from "providers";
import { modelsURL, extractionURL } from "configs/urls";
import Stepper from "components/Stepper";
import Navigator from "components/Navigator";
import Page from "pages";
import useStyles from "./styles";

const Experimental = ({
  values,
  selectedModels,
  changeValues,
  resetValues,
}) => {
  const classes = useStyles();
  const history = useHistory();

  const fields = (() => {
    let requiredFields = [];
    selectedModels.forEach((selectedModel) => {
      requiredFields = [...requiredFields, ...MODELS[selectedModel].fields];
    });
    return [...new Set(requiredFields)];
  })();

  useEffect(() => {
    if (!!!selectedModels.length) {
      history.push(modelsURL());
    }
  }, []);

  const { register, errors, handleSubmit } = useForm();

  const content = !!fields.length ? (
    fields.map((field) => (
      <Grid key={field} item sm={4}>
        <TextField
          error={!!errors[field]}
          name={field}
          inputRef={register({
            required: "This field is required",
            pattern: {
              value: /^[+-]?([0-9]*[.])?[0-9]+$/,
              message: "Must be a number (use . as separator)",
            },
          })}
          label={FIELDS.extraction[field].label}
          variant="outlined"
          defaultValue={values[field]}
          helperText={errors[field]?.message}
          className={classes.field}
        />
      </Grid>
    ))
  ) : (
    <Grid item sm={12}>
      <Typography variant="body1" color="textSecondary" component="h2">
        Your model selection does not require any experimental data
      </Typography>
    </Grid>
  );

  const onSubmit = (data) => {
    //TODO: improve this (will cause bug when a model has only some of the fields enabled)
    //TODO: improve when choose model with fields, go back and choose model with no fields. Will not overwrite previous.
    resetValues();
    if (!!Object.keys(data).length) {
      changeValues(data);
    }
    history.push(extractionURL());
  };

  return (
    <Page>
      <Stepper activeStep={1} />
      <Navigator
        onBack={() => {
          history.goBack();
        }}
        onNext={handleSubmit(onSubmit)}
      />
      <Grid container spacing={4} className={classes.root}>
        <Grid item xs={12}>
          <Typography variant="h5" component="h1">
            Please fill in all the physical data
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <form>
            <Grid container item spacing={6}>
              {content}
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Page>
  );
};

const mapStateToProps = createStructuredSelector({
  values: ExperimentalDataSelectors.getValues(),
  selectedModels: ExperimentalDataSelectors.getModels(),
});

const mapDispatchToProps = (dispatch) => ({
  changeValues: (values) =>
    dispatch(ExperimentalDataActions.changeValues(values)),
  resetValues: () => dispatch(ExperimentalDataActions.resetValues()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Experimental);
