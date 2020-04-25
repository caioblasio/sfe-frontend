import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    root: {
      background: theme.palette.background.default,
      boxShadow: "none",
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    brand: {
      flexGrow: 1,
    },
  };
});

export default useStyles;
