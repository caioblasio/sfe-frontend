import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Navigation from "routes";
import Topbar from "components/Topbar";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#fff",
    },
  },
});

const Main = () => {
  return (
    <main className="main">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Topbar />
          <Switch>
            <Route exact path="/">
              <Redirect to="/welcome" />
            </Route>
            <Route path="*">
              <Navigation />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </main>
  );
};

export default Main;
