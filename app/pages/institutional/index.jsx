import React from "react";
import useStyles from "./styles";
import Box from "@material-ui/core/Box";
import Page from "pages";

const InstitutionalPage = ({ children }) => {
  const classes = useStyles();

  return (
    <Page>
      <Box className={classes.root}>{children}</Box>
    </Page>
  );
};
export default InstitutionalPage;
