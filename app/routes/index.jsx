import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "pages/Home";
import Models from "pages/Models";
import Experimental from "pages/Experimental";
import Extraction from "pages/Extraction";
import Calculation from "pages/Calculation";
import Preview from "pages/Preview";
import Results from "pages/Results";
import About from "pages/institutional/About";
import Background from "pages/institutional/Background";
import Instructions from "pages/institutional/Instructions";

import {
  welcomeURL,
  modelsURL,
  experimentalURL,
  instructionsURL,
  extractionURL,
  calculationURL,
  previewURL,
  resultsURL,
  backgroundURL,
  aboutURL,
} from "configs/urls";

const Navigation = () => {
  let location = useLocation();

  return (
    <Switch location={location}>
      <Route path={welcomeURL()} component={Home} />
      <Route path={modelsURL()} component={Models} />
      <Route path={experimentalURL()} component={Experimental} />
      <Route path={extractionURL()} component={Extraction} />
      <Route path={calculationURL()} component={Calculation} />
      <Route path={previewURL()} component={Preview} />
      <Route path={resultsURL()} component={Results} />
      <Route path={aboutURL()} component={About} />
      <Route path={backgroundURL()} component={Background} />
      <Route path={instructionsURL()} component={Instructions} />
    </Switch>
  );
};

export default Navigation;
