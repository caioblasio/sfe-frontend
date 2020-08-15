import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
  tableContainer: {
    maxWidth: 600,
    margin: "0 auto",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-around",
  },
  buttonFile: {
    margin: theme.spacing(1),
  },
}));

export default useStyles;
