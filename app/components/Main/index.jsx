import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Navigation from "routes";
import Topbar from "components/Topbar";
import Footer from "components/Footer";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#fff",
    },
    primary: {
      main: "#9a0000",
    },
  },
  typography: {
    fontFamily: '"Oswald", "Roboto", "sans-serif"',
  },
});

const Main = () => {
  return (
    <main className="main">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ minHeight: "100vh" }}>
          <Router basename={URL_PREFIX}>
            <Topbar />
            <Navigation />
          </Router>
        </div>
        <Footer />
      </ThemeProvider>
    </main>
  );
};

export default Main;
