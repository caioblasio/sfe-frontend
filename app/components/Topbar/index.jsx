import React from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import {
  homeURL,
  instructionsURL,
  backgroundURL,
  aboutURL,
} from "configs/urls";
import useStyles from "./styles";

import Logo from "assets/sfe-logo.png";

const Topbar = () => {
  const classes = useStyles();
  const history = useHistory();

  const onItemClick = (url) => () => {
    history.push(url);
  };

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Link
          to={homeURL()}
          component={RouterLink}
          color="inherit"
          className={classes.brand}
        >
          <img src={Logo} alt="sfe" width="175" />
        </Link>
        <Button color="textPrimary" onClick={onItemClick(backgroundURL())}>
          Background
        </Button>
        <Button color="textPrimary" onClick={onItemClick(instructionsURL())}>
          Instructions
        </Button>
        <Button color="textPrimary" onClick={onItemClick(aboutURL())}>
          About
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
