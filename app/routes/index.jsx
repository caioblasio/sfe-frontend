import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "pages/Home";
import Models from "pages/Models";
import Experimental from "pages/Experimental";
import About from "pages/institutional/About";
import Background from "pages/institutional/Background";

import {
  welcomeURL,
  modelsURL,
  experimentalURL,
  instructionsURL,
  backgroundURL,
  aboutURL,
} from "configs/urls";

const Navigation = () => {
  let location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Switch location={location}>
          <Route path={welcomeURL()} component={Home} />
          <Route path={modelsURL()} component={Models} />
          <Route path={experimentalURL()} component={Experimental} />
          <Route path={aboutURL()} component={About} />
          <Route path={backgroundURL()} component={Background} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Navigation;