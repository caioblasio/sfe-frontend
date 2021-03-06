import React from "react";
import { Stepper, Step, StepLabel } from "@material-ui/core";

const TopStepper = ({ activeStep }) => (
  <Stepper activeStep={activeStep}>
    {STEPS.map((label) => (
      <Step key={label}>
        <StepLabel>{label}</StepLabel>
      </Step>
    ))}
  </Stepper>
);

export default TopStepper;
