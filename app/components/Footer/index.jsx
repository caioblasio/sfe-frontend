import React from "react";
import {
  Divider,
  Typography,
  Container,
  Grid,
  IconButton,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import Logo from "assets/sfe-logo.png";
import LapeaLogo from "assets/lapea-logo.png";
import useStyles from "./styles";
import { contactEmail } from "configs/constants";
import { externalGithubURL, externalLapeaURL } from "configs/urls";

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={2} className={classes.gridContainer}>
          <Grid item sm={12}>
            <img src={Logo} alt="sfe" width="175" className={classes.logo} />
            <a href={externalLapeaURL()} target="_blank">
              <img
                src={LapeaLogo}
                alt="lapea"
                width="175"
                className={classes.logo}
              />
            </a>
          </Grid>
          <Grid item sm={6}>
            <Typography variant="body2">
              This website is part of PhD project{" "}
              <strong>
                ‘A user-friendly tool for the mathematical modelling of
                compressed fluids extraction’
              </strong>
              , by Antonio Carlos da Silva Neto and Julian Martinez, School of
              Food Engineering, Food Engineering Department, University of
              Campinas, UNICAMP, 13083- 862, Campinas, SP, Brazil.
            </Typography>
          </Grid>
          <Grid item sm={6}>
            <Typography variant="body2">Contact:</Typography>
            <Typography variant="body2">
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </Typography>
          </Grid>
          <Grid item sm={12}>
            <Divider />
          </Grid>
          <Grid item sm={6}>
            ® 2020 Antonio Carlos da Silva Neto.
          </Grid>
          <Grid item sm={6}>
            <Typography variant="caption" component="span">
              Developed by Caio De Blasio
            </Typography>
            <IconButton href={externalGithubURL()} target="_blank">
              <GitHubIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
