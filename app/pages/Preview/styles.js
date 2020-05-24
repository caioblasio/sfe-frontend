import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  navigation: {
    textAlign: "center",
  },
  cardActions: {
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  flexGrid: {
    display: "flex",
  },
  flexCard: {
    display: "flex",
    flex: "1 0 auto",
    flexDirection: "column",
  },
  flexCardContent: {
    flex: "1 0 auto",
  },
}));

export default useStyles;
