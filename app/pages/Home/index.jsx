import React from "react";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const Home = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid container spacing={5} className={classes.root} component="section">
      <Grid item xs={12}>
        <Typography variant="h4" component="h1">
          Welcome to the SFE Modelling Tool
        </Typography>
        <Typography variant="h6" color="textSecondary" component="h2">
          The easiest tool to make calculations for SFE
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          size="large"
          color="primary"
          variant="contained"
          onClick={() => {
            history.push("/experimental");
          }}
        >
          Let's get started!
        </Button>
      </Grid>
    </Grid>
  );
};
export default Home;
