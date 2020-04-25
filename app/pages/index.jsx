import React from "react";
import useStyles from "./styles";
import Container from "@material-ui/core/Container";

const Page = ({ children }) => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="lg">
      {children}
    </Container>
  );
};
export default Page;
