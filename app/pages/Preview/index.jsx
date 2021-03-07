import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { ExperimentalDataSelectors, ExtractionDataSelectors } from "providers";
import {
  Grid,
  Button,
  Card,
  CardActions,
  CardContent,
} from "@material-ui/core";
import { PlayArrow as PlayArrowIcon } from "@material-ui/icons";
import Page from "pages";
import {
  modelsURL,
  experimentalURL,
  extractionURL,
  calculationURL,
  resultsURL,
} from "configs/urls";
import Navigator from "components/Navigator";
import useStyles from "./styles";

const Preview = ({
  calculationValues,
  selectedModels,
  experimentalValues,
  points,
}) => {
  const classes = useStyles();
  const history = useHistory();

  const hasPhysicalData = !Object.values(experimentalValues).every(
    (value) => value === ""
  );

  useEffect(() => {
    if (!!!selectedModels.length) {
      history.push(modelsURL());
    }
  }, []);

  return (
    <Page>
      <Navigator
        onBack={() => {
          history.goBack();
        }}
        onNext={() => {
          history.push(resultsURL());
        }}
        nextIcon={<PlayArrowIcon />}
        nextText="Calculate"
      />
      <Grid container spacing={4} className={classes.root}>
        <Grid item xs={12}>
          <Grid container spacing={4} className={classes.navigation}>
            <Grid item xs={12}>
              <Typography variant="h5" component="h1">
                Your simulation data
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
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
                    {selectedModels
                      .map((model) => MODELS[model].name)
                      .join(", ")}
                  </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <Button
                    size="small"
                    onClick={() => history.push(modelsURL())}
                  >
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            {hasPhysicalData && (
              <Grid item xs={6} className={classes.flexGrid}>
                <Card variant="outlined" className={classes.flexCard}>
                  <CardContent className={classes.flexCardContent}>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      Physical Data
                    </Typography>
                    <div>
                      {Object.keys(experimentalValues).map(
                        (value) =>
                          experimentalValues[value] && (
                            <Typography key={value}>
                              <Typography component="span">{`${FIELDS.extraction[value].label}: `}</Typography>
                              <Typography
                                variant="body1"
                                color="textSecondary"
                                component="span"
                              >
                                {experimentalValues[value]}
                              </Typography>
                            </Typography>
                          )
                      )}
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
            )}
            <Grid
              item
              xs={hasPhysicalData ? 6 : 12}
              className={classes.flexGrid}
            >
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
                    {points.map((point, index) => (
                      <Grid container key={index}>
                        <Grid item xs={6}>
                          <Typography component="span">
                            t<small>({index})</small>:{"        "}
                          </Typography>
                          <Typography
                            variant="body1"
                            color="textSecondary"
                            component="span"
                          >
                            {point.x}
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography component="span">
                            m<small>({index})</small>:{"        "}
                          </Typography>
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
                      <Typography key={value}>
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
