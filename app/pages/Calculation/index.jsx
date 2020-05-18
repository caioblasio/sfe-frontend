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
import { modelsURL, previewURL } from "configs/urls";

const Calculation = ({
  calculationValues,
  selectedModels,
  changeCalculationValues,
}) => {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    if (!!!selectedModels.length) {
      history.push(modelsURL());
    }
  }, []);

  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    changeCalculationValues(data);
    history.push(previewURL());
  };

  return (
    <Page>
      <Stepper activeStep={3} />
      <Grid container spacing={4} className={classes.root}>
        <Grid item xs={12}>
          <Typography variant="h5" component="h1">
            Please fill the parameters for calculation
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Container maxWidth="md">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={4}>
                {Object.keys(FIELDS.calculation).map((field) => (
                  <Grid key={field} item sm={3}>
                    <TextField
                      error={!!errors[field]}
                      name={FIELDS.calculation[field].name}
                      inputRef={register({
                        required: "This field is required",
                        pattern: {
                          value: /^[1-9]\d*$/,
                          message: "Must be a positive number",
                        },
                      })}
                      label={FIELDS.calculation[field].label}
                      variant="outlined"
                      defaultValue={calculationValues[field]}
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
  calculationValues: ExperimentalDataSelectors.getCalculationValues(),
  selectedModels: ExperimentalDataSelectors.getModels(),
});

const mapDispatchToProps = (dispatch) => ({
  changeCalculationValues: (values) =>
    dispatch(ExperimentalDataActions.changeCalculationValues(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Calculation);
