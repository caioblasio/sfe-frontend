import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& hr": {
      width: "100%",
    },
  },
  imgContainer: {
    textAlign: "center",
    "& img": {
      maxWidth: "100%",
    },
  },
  imgBig: {
    width: "600px",
  },
  imgNormal: {
    width: "400px",
  },
  imgSmall: {
    width: "200px",
  },
}));

export default useStyles;
