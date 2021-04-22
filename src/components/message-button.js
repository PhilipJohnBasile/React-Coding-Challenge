import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  button: {
    backgroundColor: "#20ddbb",
    width: "100%",
    height: "100%",
    marginTop: "32px",
    marginBottom: "48px",
    fontWeight: '800',
  },
});

export const MessageButton = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <Button {...props} className={classes.button}>
      {children}
    </Button>
  );
};
