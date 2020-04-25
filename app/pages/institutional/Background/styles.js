import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& img": {
      maxWidth: "100%",
    },
    "& hr": {
      width: "100%",
    },
  },
}));

export default useStyles;
