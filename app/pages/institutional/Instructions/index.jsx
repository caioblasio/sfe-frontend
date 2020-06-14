import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import InstitutionalPage from "pages/institutional";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const Instructions = () => (
  <InstitutionalPage>
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h1">
          How to use the tool?
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12}>
            <Typography>
              In order to use this tool, you will be required to fill the data
              presented below as you navigate through each page:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">1. Model Selection</Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="a. In this page, you should choose which of the available models
                    will be used oncalculation"
                  primaryTypographyProps={{ color: "textSecondary" }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="b. Please make sure at least one model is selected"
                  primaryTypographyProps={{ color: "textSecondary" }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="c. You can choose either one or multiple models (simultaneous calculation)"
                  primaryTypographyProps={{ color: "textSecondary" }}
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">2. Physical Data</Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="a. In this section, you should enter any physical data required by the chosen
                    model(s) (e.g. density, solubility)"
                  primaryTypographyProps={{ color: "textSecondary" }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="b. Please fill all available slots with strings using (.) as decimal separator"
                  primaryTypographyProps={{ color: "textSecondary" }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="c. No available slot can be left empty"
                  primaryTypographyProps={{ color: "textSecondary" }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="d. If multiple models are chosen, this section will present all slots that fulfil all
                    models. That does not mean all data will be used for all chosen models"
                  primaryTypographyProps={{ color: "textSecondary" }}
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">3. Experimental Data</Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="a. In this section, you should enter the experimental extraction curve dataset
                    (time x extracted mass)"
                  primaryTypographyProps={{ color: "textSecondary" }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="b. Time must be entered in minutes"
                  primaryTypographyProps={{ color: "textSecondary" }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="c. Accumulated extracted mass must be entered in grams"
                  primaryTypographyProps={{ color: "textSecondary" }}
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">4. Calculation Data</Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="a. In this section, you should enter all mathematical parameters that will be
                    considered upon applying the finite differences method"
                  primaryTypographyProps={{ color: "textSecondary" }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="b. The higher the ‘maximum number of steps’, the better the result achieved but
                    the longer the calculation time"
                  primaryTypographyProps={{ color: "textSecondary" }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="c. Watch out with time and space steps! In theory, the higher the number of
                    divisions, the better the result, but ‘too tiny’ time and space divisions may
                    cause mathematical instability, so results diverge"
                  primaryTypographyProps={{ color: "textSecondary" }}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </InstitutionalPage>
);

export default Instructions;
