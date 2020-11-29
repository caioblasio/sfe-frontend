import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => {
  return {
    cardActions: {
      justifyContent: "space-between",
    },
    cardActionsButton: {
      fontSize: "0.75rem",
      fontWeight: "400",
    },
  };
});

export default useStyles;
