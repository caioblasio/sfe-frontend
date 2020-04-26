import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import useStyles from "./styles";
import InstitutionalPage from "pages/institutional";
import figure1 from "assets/background-page-figure-1.jpg";
import figure2 from "assets/background-page-figure-2.jpg";
import figure3 from "assets/background-page-figure-3.jpg";

const Background = () => {
  const classes = useStyles();

  return (
    <InstitutionalPage>
      <Grid container spacing={5} className={classes.root}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1">
            About Supercritical Fluid Extraction
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <Typography>
                SFE (Supercritical Fluid Extraction) is an extraction method
                based upon the use of fluids in their supercritical state as
                solvents. SFE has several advantages against conventional
                extraction methods, such as: allowing the use of eco-friendly,
                non-toxic and non-flammable solvents, process flexibility in
                terms of solute-solvent affinity by changes on the physical
                process conditions (temperature, pressure) and easy extract
                isolation (no residual solvent amounts in the final extract).
              </Typography>
            </Grid>
            <Grid item sm={6}>
              <Typography>
                SFE is illustrated in Figure 1: the solvent is pumped up to the
                extraction column where it will get in touch with the bed of
                solid particles (where the solute will be initially present).
                The solvent flows through the column creating an interface with
                the solid particle, where the solute will dissolve (equilibrium)
                and then be dragged up along with the convective fluid flow up
                to the top of the column. Finally, the fluid phase is
                depressurized, and the final extract is collected.
              </Typography>
            </Grid>

            <Grid item sm={6}>
              <img src={figure1} />
              <Typography variant="caption" component="p" align="center">
                Figure 1
              </Typography>
            </Grid>
            <Divider />
            <Grid item sm={6}>
              <Typography>
                As per illustrated in figure 2, solute A, initially present
                inside each particle that composes the solid bed with
                concentration migrates internally towards the surface, where a
                thermodynamic equilibrium will be reached in the interface (2)
                with concentration (solubility) in the fluid-side. Due to the
                concentration gradient between this layer and the concentration
                in the fluid phase, mass-transfer will take place due to
                diffusive and convective effects towards the moving solvent so
                it increases its concentration and solute is dragged up along
                with the solvent current that flows with superficial velocity ,
                temperature T and pressure P. Extraction yield and equilibrium
                are dependent of the aforementioned variables.
              </Typography>
            </Grid>
            <Grid item sm={6}>
              <img src={figure2} />
              <Typography variant="caption" component="p" align="center">
                Figure 2
              </Typography>
            </Grid>
            <Divider />
            <Grid item sm={6}>
              <Typography>
                The phenomena kinetics are mainly regulated by both the solid
                and fluid phase resistances, as well as the equilibrium state
                upon the solid particles surface (solid-liquid interface).
                Hence, the concentration profile along the radial axis decreases
                with the radius r, as illustrated in Figure 3.
              </Typography>
            </Grid>
            <Grid item sm={6}>
              <img src={figure3} />
              <Typography variant="caption" component="p" align="center">
                Figure 3
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </InstitutionalPage>
  );
};

export default Background;
