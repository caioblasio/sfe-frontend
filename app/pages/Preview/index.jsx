import React, { useEffect, useCallback } from "react";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { ExperimentalDataSelectors, ExtractionDataSelectors } from "providers";
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Page from "pages";
import {
  modelsURL,
  experimentalURL,
  extractionURL,
  calculationURL,
  resultsURL,
} from "configs/urls";

const Preview = ({
  calculationValues,
  selectedModels,
  experimentalValues,
  points,
}) => {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    if (!!!selectedModels.length) {
      //history.push(modelsURL());
    }
  }, []);

  return (
    <Page>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h5" component="h1">
            Your simulation data
          </Typography>
          <Button
            size="large"
            color="primary"
            variant="contained"
            onClick={() => history.push(resultsURL())}
          >
            Next
          </Button>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Card variant="outlined">
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Models Selected
                </Typography>
                <Typography variant="h5" component="h2">
                  {selectedModels.map((model) => MODELS[model].name).join(", ")}
                </Typography>
              </CardContent>
              <CardActions className={classes.cardActions}>
                <Button size="small" onClick={() => history.push(modelsURL())}>
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6} className={classes.flexGrid}>
            <Card variant="outlined" className={classes.flexCard}>
              <CardContent className={classes.flexCardContent}>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Experimental Data
                </Typography>
                <div>
                  {Object.keys(experimentalValues).map((value) => (
                    <Typography>
                      <Typography component="span">{`${FIELDS.extraction[value].label}: `}</Typography>
                      <Typography
                        variant="body1"
                        color="textSecondary"
                        component="span"
                      >
                        {experimentalValues[value]}
                      </Typography>
                    </Typography>
                  ))}
                </div>
              </CardContent>
              <CardActions className={classes.cardActions}>
                <Button
                  size="small"
                  onClick={() => history.push(experimentalURL())}
                >
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6} className={classes.flexGrid}>
            <Card variant="outlined" className={classes.flexCard}>
              <CardContent className={classes.flexCardContent}>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Extraction Data
                </Typography>
                <div>
                  {points.map((point) => (
                    <Grid container>
                      <Grid item xs={6}>
                        <Typography component="span">{"X:        "}</Typography>
                        <Typography
                          variant="body1"
                          color="textSecondary"
                          component="span"
                        >
                          {point.x}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography component="span">{"Y:        "}</Typography>
                        <Typography
                          variant="body1"
                          color="textSecondary"
                          component="span"
                        >
                          {point.y}
                        </Typography>
                      </Grid>
                    </Grid>
                  ))}
                </div>
              </CardContent>
              <CardActions className={classes.cardActions}>
                <Button
                  size="small"
                  onClick={() => history.push(extractionURL())}
                >
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card variant="outlined">
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Calculation Data
                </Typography>
                <div>
                  {Object.keys(calculationValues).map((value) => (
                    <Typography>
                      <Typography component="span">{`${FIELDS.calculation[value].label}: `}</Typography>
                      <Typography
                        variant="body1"
                        color="textSecondary"
                        component="span"
                      >
                        {calculationValues[value]}
                      </Typography>
                    </Typography>
                  ))}
                </div>
              </CardContent>
              <CardActions className={classes.cardActions}>
                <Button
                  size="small"
                  onClick={() => history.push(calculationURL())}
                >
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Page>
  );
};

const mapStateToProps = createStructuredSelector({
  calculationValues: ExperimentalDataSelectors.getCalculationValues(),
  experimentalValues: ExperimentalDataSelectors.getValues(),
  selectedModels: ExperimentalDataSelectors.getModels(),
  points: ExtractionDataSelectors.getPoints(),
});

export default connect(mapStateToProps)(Preview);
