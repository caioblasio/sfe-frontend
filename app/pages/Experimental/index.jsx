import React from "react";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const Home = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={5} className={classes.root} component="section">
      <Grid item xs={12}>
        <Typography variant="h4" component="h1">
          Experimental Data
        </Typography>
      </Grid>
    </Grid>
  );
};
export default Home;
