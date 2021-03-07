import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import useStyles from "./styles";
import InstitutionalPage from "pages/institutional";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import figure1 from "assets/background-page-figure-1.png";
import figure2 from "assets/background-page-figure-2.png";
import figure3 from "assets/background-page-figure-3.png";
import figure4 from "assets/background-page-figure-4.png";
import sovovaEq1 from "assets/background-page-sovova-1.png";
import sovovaEq2 from "assets/background-page-sovova-2.png";
import sovovaEq3 from "assets/background-page-sovova-3.png";
import sovovaEq4 from "assets/background-page-sovova-4.png";
import reverchonEq1 from "assets/background-page-reverchon-1.png";
import esquivelEq1 from "assets/background-page-esquivel-1.png";
import zekovicEq1 from "assets/background-page-zekovic-1.png";
import nguyenEq1 from "assets/background-page-nguyen-1.png";
import veljkovicEq1 from "assets/background-page-veljkovic-1.png";
import pkmEq1 from "assets/background-page-pkm-1.png";
import splineEq1 from "assets/background-page-spline-1.png";

import { useQuery } from "hooks";

const Background = () => {
  const classes = useStyles();
  const initialTab = useQuery().get("tab");
  const [value, setValue] = useState(initialTab ? Number(initialTab) : 0);

  return (
    <InstitutionalPage>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Tabs
            value={value}
            onChange={(_, newValue) => setValue(newValue)}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="About Compressed Fluid Technologies (PLE & SFE) " />
            <Tab label="SFE: Kinetic Models Available in this Modelling Tool" />
            <Tab label="Mathematical Modelling: main concepts & definitions" />
          </Tabs>
        </Grid>
        <Grid item xs={12}>
          {value === 0 && (
            <Grid container spacing={5} className={classes.root}>
              <Grid item xs={12}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12}>
                    <Typography>
                      The two main medium to high-pressure extraction methods
                      that can be found in the literature are SFE (Supercritical
                      Fluid Extraction) and PLE (Pressurized Liquid Extraction).
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>
                      SFE (Supercritical Fluid Extraction) is an extraction
                      method based upon the use of fluids in their supercritical
                      state as solvents. SFE has several advantages against
                      conventional extraction methods, such as: allowing the use
                      of eco-friendly, non-toxic and non-flammable solvents,
                      process flexibility in terms of solute-solvent affinity by
                      changes on the physical process conditions (temperature,
                      pressure) and easy extract isolation (no residual solvent
                      amounts in the final extract) (De La Fuente et al., 2005;
                      Reverchon & De Marco, 2006).
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>
                      PLE (Pressurized Liquid Extraction), on other hand, takes
                      advantage of elevated pressures to keep the liquid state
                      of solvents despite the temperature levels above their
                      regular boiling point. Hence, this technique can be
                      interpreted as an alternative to the classic Sohxlet
                      solvent extraction (Herrero et al., 2013; Wianowska & Gil,
                      2019).
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>
                      In both processes, the solvent is pumped up and flows
                      axially at flow-rate q and superficial velocity V
                      <small>&infin;</small> in the extraction column of height
                      <i> h</i> and radius <i> r</i>, getting in touch with the
                      bed of porous solid particles (where the solute will be
                      initially present with concentration X
                      <small>A,z (t=0)</small>), as presented in Figure 1.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.imgContainer}>
                    <img src={figure1} width={600} />
                  </Grid>
                  <Divider />
                  <Grid item xs={12}>
                    <Typography>
                      A closer look to the control volume shows the
                      mass-transfer interface between the solid (i) and fluid
                      (ii) phases, as presented in Figure 2: the solvent flows
                      through the column percolating the solid and hence
                      creating an interface where the solute will dissolve
                      (equilibrium) and then be dragged up along with the
                      convective fluid flow up to the top of the column before
                      the fluid phase is depressurized and the final extract is
                      collected.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.imgContainer}>
                    <img src={figure2} width={600} />
                  </Grid>
                  <Divider />
                  <Grid item xs={12}>
                    <Typography>
                      Solute A, initially inside each particle that composes the
                      solid bed at height <i>z</i> with concentration X
                      <small>A,z(t)</small> migrates internally towards the
                      surface, where a thermodynamic equilibrium will be reached
                      in the interface (2) with concentration Y
                      <small>A2,z*(t)</small> (solubility) in the fluid-side
                      (Treybal, 1955). Due to the concentration gradient between
                      this layer and the concentration Y<small>A3(t)</small> in
                      the fluid phase, mass-transfer will take place due to
                      diffusive and convective effects towards the moving
                      solvent so it increases its concentration and solute is
                      dragged up along with the solvent current that flows with
                      superficial velocity v<small>&infin;</small>, temperature
                      T and pressure P (Bird et al., 1960). Extraction yield and
                      equilibrium are dependent of the aforementioned variables.
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>
                      The phenomena kinetics are mainly regulated by both the
                      solid and fluid phase resistances, as well as the
                      equilibrium state upon the solid particles surface
                      (solid-liquid interface). Hence, the concentration profile
                      along the radial axis decreases with radius r, as
                      illustrated in Figure 3.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.imgContainer}>
                    <img src={figure3} width={600} />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>
                      In the axial coordinate, pure solvent enters the column at
                      the bottom z=0 with concentration Y<small>A3(t,0)</small>{" "}
                      and, as it percolates the solid bed, solute is gradually
                      transferred to the fluid phase until it exits the column
                      at the top z=h with concentration yA3(t,h). At a specific
                      time <i>t</i>, the higher the <i>h</i> coordinate, the
                      lower the gradient between the fluid and solid phase and
                      hence, the slower the mass-transfer ratio. The higher the
                      axial coordinate, As the process evolves, the solute at
                      higher <i>h</i> is gradually removed by the solvent, until
                      the column is completely exhausted.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.imgContainer}>
                    <img src={figure4} width={600} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
          {value === 1 && (
            <Grid container spacing={5} className={classes.root}>
              <Grid item xs={12}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12}>
                    <Typography>
                      There are several kinetic models presented in the
                      literature. In the current version, this tool allows the
                      users to use up to 6 of them simultaneously on fitting a
                      specific dataset. As a standard, all <i>i</i> adjustable
                      parameters for each model are presented as k
                      <small>i</small>:
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6" component="h2">
                      Sovova (1994)
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>
                      Also known as ‘Broken and Intact Cells’ model, it assumes
                      that the initial solute concentration x<small>0</small> is
                      distributed in two fractions: an easily accessible and
                      another one that remains inside the solid particles, (1-k
                      <small>1</small>) and k<small>1</small>
                      respectively. The kinetics are divided in three
                      consecutive phases: constant extraction rate (CER),
                      falling extraction rate (FER) and diffusive. The model is
                      based upon differential mass balances on the fluid and
                      solid phases, as presented respectively by Equations 2 and
                      3.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.imgContainer}>
                    <img src={sovovaEq1} width={600} />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>
                      This model assumes that both the axial dispersion in the
                      fluid phase and the axial diffusion in the solid phase, as
                      well as the fluid phase concentration variation with time,
                      are neglectable. Besides, it is assumed that, at time
                      zero, the solute is evenly distributed throughout the
                      column (initial condition – Equation 4), and that the
                      fluid constantly feeds the column with concentration zero
                      (boundary condition – Equation 5).
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.imgContainer}>
                    <img src={sovovaEq2} width={600} />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>
                      As proposed by author, the mass-transfer flux is dependent
                      on the solid concentration inside the particles, whether
                      it is above or below the critical concentration k
                      <small>1</small>. While the solid concentration is above k
                      <small>1</small>, the process is regulated by the
                      fluid-phase mass transfer coefficient k<small>3</small>,
                      whereas once lower concentrations are reached, the process
                      is mainly regulated by the solid-phase mass transfer
                      coefficient k<small>2</small>, as presented in Equations 6
                      and 7.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.imgContainer}>
                    <img src={sovovaEq3} width={600} />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>
                      The mass balance equations (Equations 2 and 3) are solved
                      numerically using the finite difference method and the
                      accumulated extracted yield is obtained by integrating the
                      solute extracted at the top of the column, as presented in
                      Equation 8.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.imgContainer}>
                    <img src={sovovaEq4} width={600} />
                  </Grid>
                  <Divider />
                  <Grid item xs={12}>
                    <Typography variant="h6" component="h2">
                      Reverchon (1993)
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>
                      Empirical model with a single adjustable parameter k
                      <small>1</small>, as presented in Equation 9
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.imgContainer}>
                    <img src={reverchonEq1} width={600} />
                  </Grid>
                  <Divider />
                  <Grid item xs={12}>
                    <Typography variant="h6" component="h2">
                      Esquivel (1999)
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>
                      Empirical model with a single adjustable parameter k
                      <small>1</small>, as presented in Equation 10
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.imgContainer}>
                    <img src={esquivelEq1} width={600} />
                  </Grid>
                  <Divider />
                  <Grid item xs={12}>
                    <Typography variant="h6" component="h2">
                      Zekovic (2003)
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>
                      Empirical model with two adjustable parameters k
                      <small>1</small> and k<small>2</small>, as presented in
                      Equation 11
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.imgContainer}>
                    <img src={zekovicEq1} width={600} />
                  </Grid>
                  <Divider />
                  <Grid item xs={12}>
                    <Typography variant="h6" component="h2">
                      Nguyen (1991)
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>
                      Empirical model that assumes that all mass-transfer
                      phenomena is regulated by the resistance inside the solid
                      k<small>1</small>, as presented in Equation 12
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.imgContainer}>
                    <img src={nguyenEq1} width={600} />
                  </Grid>
                  <Divider />
                  <Grid item xs={12}>
                    <Typography variant="h6" component="h2">
                      Veljkovic and Milenovic (2002)
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>
                      Empirical model that assumes that SFE takes place in two
                      phases: (i) leakage, where the easily accessible solute
                      fraction k<small>3</small> will have its extraction ruled
                      by the mass-transfer coefficient k<small>1</small> in the
                      fluid phase; and (ii) diffusion, where the non-easily
                      accessible solute fraction (1-k<small>3</small>) will have
                      its extraction regulated by the mass-transfer coefficient
                      k<small>2</small> inside the particles, as presented in
                      Equation 13
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.imgContainer}>
                    <img src={veljkovicEq1} width={600} />
                  </Grid>
                  <Divider />
                  <Grid item xs={12}>
                    <Typography variant="h6" component="h2">
                      PKM (2012)
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>
                      Model that interprets the extraction process as a series
                      of chemical reactions. As in Sovová (1994), the solid is
                      divided is two portions k<small>3</small> and (1-k
                      <small>3</small>). The mass-transfer is regulated by
                      coefficients k<small>2</small> in the fluid phase and k
                      <small>1</small>
                      in e solid phase, respectively, as presented in Equation
                      14
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.imgContainer}>
                    <img src={pkmEq1} width={600} />
                  </Grid>
                  <Divider />
                  <Grid item xs={12}>
                    <Typography variant="h6" component="h2">
                      Spline Model (2002)
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>
                      Model that fits the curve with three lines, each one for
                      the different extraction phases: constant extraction rate
                      (CER), falling extraction rate (FER), and
                      diffusion-controlled periods (DC).
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.imgContainer}>
                    <img src={splineEq1} width={600} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
          {value === 2 && (
            <Grid container spacing={5} className={classes.root}>
              <Grid item xs={12}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12}>
                    <Typography>
                      Below, you will find the definition of several concepts
                      regarding mathematical modelling that will be crucial when
                      using this tool.
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6" component="h2">
                      Extraction Curve
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>
                      extracted mass versus time dataset and/or graphical plot
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6" component="h2">
                      Minimization Strategy
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>
                      in an iterative method, strategy that will be chosen in
                      order to move forward in defining the following step after
                      each calculation cycle
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6" component="h2">
                      Minimization Criteria
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>
                      mathematical evaluation after each step that will be used
                      to determine the goodness of the calculated solution
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6" component="h2">
                      Modelling Parameter
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>
                      variable present in the model equation and that may have a
                      physical meaning or just be empirical, and that are varied
                      throughout the modelling process so the best solution can
                      be found
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6" component="h2">
                      Objective function
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>
                      mathematical function that defines the quality of the
                      adjustment by expressing somehow the difference between
                      the goal and the estimated values
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </InstitutionalPage>
  );
};

export default Background;
