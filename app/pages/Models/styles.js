import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.mixins.gutters(),
    marginTop: theme.spacing(1),
    textAlign: "center",
  },
}));

export default useStyles;
