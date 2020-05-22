import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import useStyles from "./styles";

const Loading = ({ open }) => {
  const classes = useStyles();
  return (
    <Backdrop className={classes.root} open={open}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loading;
