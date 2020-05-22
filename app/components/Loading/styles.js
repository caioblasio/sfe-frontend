import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      zIndex: theme.zIndex.drawer + 1,
      color: theme.palette.common.white,
    },
  };
});

export default useStyles;
