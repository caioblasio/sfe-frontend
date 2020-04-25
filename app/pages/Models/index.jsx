import React from "react";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import ModelsContainer from "containers/ModelsContainer";
import Stepper from "components/Stepper";

const Models = () => {
  const classes = useStyles();

  return (
    <>
      <Stepper activeStep={0} />
      <Grid container spacing={4} className={classes.root} component="section">
        <Grid item xs={12}>
          <Typography variant="h5" component="h1">
            Please choose all models you want to apply to your calculation
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <ModelsContainer />
        </Grid>
      </Grid>
    </>
  );
};
export default Models;
