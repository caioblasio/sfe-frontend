import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import useStyles from "./styles";

const Loading = ({ open, isFullScreen }) => {
  const classes = useStyles();
  return isFullScreen ? (
    <Backdrop className={classes.root} open={open}>
      <CircularProgress color="inherit" />
    </Backdrop>
  ) : (
    <CircularProgress color="inherit" />
  );
};

Loading.defaultProps = {
  isFullScreen: false,
};

export default Loading;
