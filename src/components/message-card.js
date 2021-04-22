import {
  Typography,
  makeStyles,
  Card,
  Grid,
  Button,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles({
  error: {
    backgroundColor: "#F56236",
  },
  warning: {
    backgroundColor: "#FCE788"
  },
  info: {
    backgroundColor: "#88FCA3"
  }
});

const priorityStyleMap = {
  "1": "error",
  "2": "warning",
  "3": "info",
};

export const MessageCard = ({ messageParams, handleClearMessage }) => {
  const classes = useStyles();
  const priorityStyle = priorityStyleMap[messageParams.priority];
  const onClearClick = handleClearMessage(messageParams.id);

  return (
    <Card className={`${classes[priorityStyle]}`}>
      <Box p={2}>
        <Grid container>
          <Grid item xs>
            <Typography>{messageParams.message}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Button onClick={onClearClick}>Clear</Button>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};
