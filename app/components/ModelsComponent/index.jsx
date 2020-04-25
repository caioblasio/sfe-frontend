import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import useStyles from "./styles";

const ModelsComponent = ({ selectedModels, addModel }) => {
  const classes = useStyles();

  const [state, setState] = useState(() => {
    let initialState = { ...MODELS };
    Object.keys(initialState).forEach((key, _index) => {
      if (selectedModels.includes(key)) {
        initialState[key] = true;
      } else {
        initialState[key] = false;
      }
    });
    return initialState;
  });

  console.log(MODELS);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <FormGroup>
            <Grid container spacing={1}>
              {Object.keys(MODELS).map((key) => (
                <Grid item xs={12} key={MODELS[key].id}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={state[key]}
                        onChange={handleChange}
                        name={key}
                      />
                    }
                    label={`${MODELS[key].name} (${MODELS[key].year})`}
                  />
                </Grid>
              ))}
            </Grid>
          </FormGroup>
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
  );
};
export default ModelsComponent;
