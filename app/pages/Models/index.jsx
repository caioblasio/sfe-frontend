import React from "react";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import Page from "pages";
import Stepper from "components/Stepper";
import { getModels } from "providers/ExperimentalData/selectors";
import { addModel } from "providers/ExperimentalData/actions";
import { experimentalURL } from "configs/urls";
import useStyles from "./styles";

const Models = ({ selectedModels, addModels }) => {
  const classes = useStyles();
  const history = useHistory();

  const getInitialState = () => {
    let initialState = { ...MODELS };
    Object.keys(initialState).forEach((key, _index) => {
      if (selectedModels.includes(key)) {
        initialState[key] = true;
      } else {
        initialState[key] = false;
      }
    });
    return Object.values(initialState);
  };

  const { register, errors, handleSubmit, getValues, control } = useForm({
    defaultValues: {
      models: getInitialState(),
    },
  });

  const validate = () => {
    const values = getValues({ nest: true });
    return (
      values.models.filter((v) => Boolean(v)).length >= 1 ||
      "You have to select at least 1 Model"
    );
  };

  const onSubmit = ({ models }) => {
    let modelsChosenKeys = [];
    models.forEach((value, index) => {
      if (value) {
        modelsChosenKeys.push(Object.keys(MODELS)[index]);
      }
    });
    addModels(modelsChosenKeys);
    history.push(experimentalURL());
  };

  return (
    <Page>
      <Stepper activeStep={0} />
      <Grid container spacing={4} className={classes.root}>
        <Grid item xs={12}>
          <Typography variant="h5" component="h1">
            Please choose all models you want to apply to your calculation
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <FormControl fullWidth component="fieldset" margin="normal">
                  <FormGroup>
                    <Grid container spacing={1}>
                      {Object.keys(MODELS).map((key, index) => (
                        <Grid item xs={12} key={MODELS[key].id}>
                          <FormControlLabel
                            control={
                              <Controller
                                as={<Switch />}
                                control={control}
                                name={`models[${index}]`}
                                inputRef={register({
                                  validate,
                                })}
                              />
                            }
                            label={`${MODELS[key].name} (${MODELS[key].year})`}
                          />
                        </Grid>
                      ))}
                    </Grid>
                    <FormHelperText error={!!errors?.models}>
                      {errors?.models?.[0]?.message}
                    </FormHelperText>
                  </FormGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button
                  size="large"
                  color="primary"
                  variant="contained"
                  type="submit"
                >
                  Alright, let's proceed!
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Page>
  );
};

const mapStateToProps = createStructuredSelector({
  selectedModels: getModels(),
});

const mapDispatchToProps = (dispatch) => ({
  addModels: (models) => dispatch(addModel(models)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Models);
