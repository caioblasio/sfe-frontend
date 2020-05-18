import React, { useEffect, useCallback } from "react";
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
import Stepper from "components/Stepper";
import Page from "pages";
import { modelsURL, extractionURL } from "configs/urls";

const Experimental = ({ values, selectedModels, changeValues }) => {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    if (!!!selectedModels.length) {
      history.push(modelsURL());
    }
  }, []);

  const { register, errors, handleSubmit } = useForm();

  const getRequiredFields = () => {
    let requiredFields = [];
    selectedModels.forEach((selectedModel) => {
      requiredFields = [...requiredFields, ...MODELS[selectedModel].fields];
    });
    return [...new Set(requiredFields)];
  };

  const onSubmit = (data) => {
    changeValues(data);
    history.push(extractionURL());
  };

  return (
    <Page>
      <Stepper activeStep={1} />
      <Grid container spacing={4} className={classes.root}>
        <Grid item xs={12}>
          <Typography variant="h5" component="h1">
            Please fill in all the experimental data
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Container maxWidth="md">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={4}>
                {getRequiredFields().map((field) => (
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
                ))}
                <Grid item xs={12}>
                  <Button
                    size="large"
                    color="primary"
                    variant="contained"
                    type="submit"
                  >
                    Next
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Container>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Experimental);
