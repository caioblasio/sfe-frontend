import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "pages/Home";
import Experimental from "pages/Experimental";

const Navigation = () => {
  let location = useLocation();
  console.log(location);
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Switch location={location}>
          <Route path="/welcome" component={Home} />
          <Route path="/experimental" component={Experimental} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Navigation;
