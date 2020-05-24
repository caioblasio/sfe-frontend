import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { useForm } from "react-hook-form";
import { ExperimentalDataActions, ExperimentalDataSelectors } from "providers";
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import Stepper from "components/Stepper";
import Page from "pages";
import { modelsURL, extractionURL } from "configs/urls";

const Experimental = ({
  values,
  selectedModels,
  changeValues,
  resetValues,
}) => {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    if (!!!selectedModels.length) {
      history.push(modelsURL());
    }
  }, []);

  const { register, errors, handleSubmit } = useForm();

  const fields = (() => {
    let requiredFields = [];
    selectedModels.forEach((selectedModel) => {
      requiredFields = [...requiredFields, ...MODELS[selectedModel].fields];
    });
    return [...new Set(requiredFields)];
  })();

  const content = !!fields.length ? (
    fields.map((field) => (
      <Grid key={field} item sm={3}>
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
      <Grid container spacing={4} className={classes.root}>
        <Grid item xs={12}>
          <Typography variant="h5" component="h1">
            Please fill in all the physical data
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Container maxWidth="md">
              <Grid container spacing={6}>
                {content}
                <Grid item xs={6}>
                  <Button
                    size="large"
                    variant="contained"
                    color="default"
                    startIcon={<NavigateBeforeIcon />}
                    onClick={() => {
                      history.goBack();
                    }}
                  >
                    Back
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    size="large"
                    variant="contained"
                    color="primary"
                    endIcon={<NavigateNextIcon />}
                    type="submit"
                  >
                    Next
                  </Button>
                </Grid>
              </Grid>
            </Container>
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
