import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";
import { contactEmail } from "configs/constants";
import InstitutionalPage from "pages/institutional";

const About = () => {
  const classes = useStyles();

  return (
    <InstitutionalPage>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1">
            LAPEA SFE & PLE Online Data Modelling Tool
          </Typography>
          <Typography
            className={classes.subtitle}
            variant="subtitle1"
            component="h2"
          >
            Version beta 0.9. Released on Aug 24th, 2020
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>
                The main goal is to create a software that enables the general
                public to apply mathematical models which are vastly spread on
                literature to SFE experimental data, with no need of any
                programming knowledge. On the next website version, a feedback
                tab will be added in order to allow the user to provide us with
                any comments, suggestions or complaints.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                This website has been under development as part of the project
                “A USER FRIENDLY SOFTWARE FOR MATHEMATICAL MODELING OF
                SUPERCRITICAL FLUID EXTRACTION”, by Antonio Carlos da Silva Neto
                and supervised by Prof. Dr. Julian Martinez, both from
                Universidade Estadual de Campinas (UNICAMP).
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                In the meanwhile, should you have any queries, please feel
                welcome to contact us through{" "}
                <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. We hope
                you enjoy our software and wish you get outstanding results!
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </InstitutionalPage>
  );
};

export default About;
