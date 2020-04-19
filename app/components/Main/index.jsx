import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "pages/Home";
import Topbar from "components/Topbar";

export const Main = () => {
  return (
    <main className="main">
      <CssBaseline />
      <Topbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </main>
  );
};

export default Main;
