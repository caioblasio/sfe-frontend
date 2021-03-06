import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export default useStyles;
