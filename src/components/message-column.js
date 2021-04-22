import { Grid, Typography, makeStyles } from "@material-ui/core";
import { MessageCard } from "./message-card";

const useStyles = makeStyles({
  messageType: {
    fontWeight: 700,
  },
});

export const MessageColumn = ({ title, messages, handleClearMessage }) => {
  const classes = useStyles();

  const mapMessages = messageParams => (
    <Grid item key={messageParams.id}>
      <MessageCard
        messageParams={messageParams}
        handleClearMessage={handleClearMessage}
      />
    </Grid>
  );

  return (
    <Grid container item direction="column" xs={12} md={3} spacing={1}>
      <Grid item container direction="column">
        <Grid item>
          <Typography variant="h6" className={classes.messageType}>
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">{`Count ${messages.length}`}</Typography>
        </Grid>
      </Grid>
      <Grid item container direction="column" spacing={2}>
        {messages.map(mapMessages)}
      </Grid>
    </Grid>
  );
};
