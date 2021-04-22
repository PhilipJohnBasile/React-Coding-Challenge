import { Grid, Box } from "@material-ui/core";

export const MessageButtonContainer = ({ children }) => {
  return (
    <Grid container item justify="center">
      <Grid item>
        <Box m={2} width="100px">
          {children[0]}
        </Box>
      </Grid>
      <Grid>
        <Box m={2} width="100px">
          {children[1]}
        </Box>
      </Grid>
    </Grid>
  );
};
