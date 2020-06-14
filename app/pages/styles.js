import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.mixins.gutters(),
    marginBottom: theme.spacing(8),
  },
}));

export default useStyles;
