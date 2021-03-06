import React from "react";
import { Grid, Button } from "@material-ui/core";
import {
  NavigateNext as NavigateNextIcon,
  NavigateBefore as NavigateBeforeIcon,
} from "@material-ui/icons";
import useStyles from "./styles";

const Navigator = ({
  onBack,
  onNext,
  backText,
  backIcon,
  nextText,
  nextIcon,
}) => {
  const classes = useStyles();
  return (
    <Grid container item spacing={6}>
      <Grid item xs={6} classeName={classes.beforeButton}>
        <Button
          size="large"
          variant="outlined"
          color="default"
          startIcon={backIcon}
          onClick={onBack}
        >
          {backText}
        </Button>
      </Grid>
      <Grid item xs={6} className={classes.nextButton}>
        <Button
          size="large"
          variant="contained"
          color="primary"
          endIcon={nextIcon}
          onClick={onNext}
        >
          {nextText}
        </Button>
      </Grid>
    </Grid>
  );
};

Navigator.defaultProps = {
  backText: "Back",
  backIcon: <NavigateBeforeIcon />,
  nextText: "Next",
  nextIcon: <NavigateNextIcon />,
};

export default Navigator;
