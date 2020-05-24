import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    padding: theme.spacing(4),
  },
  gridContainer: {
    alignItems: "center",
  },
  logo: {
    verticalAlign: "middle",
  },
}));

export default useStyles;
