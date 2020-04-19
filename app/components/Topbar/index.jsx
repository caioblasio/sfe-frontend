import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
import AtomIcon from "assets/atom-icon.svg";

const Topbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <img src={AtomIcon} alt="sfe" width="45" />
          <Typography variant="h6" color="textPrimary" component="span">
            SFE
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
