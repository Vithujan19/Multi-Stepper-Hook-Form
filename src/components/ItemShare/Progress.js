import React from "react";
import { Grid, Paper } from '@material-ui/core';

const Submit = (props) => {
  const { data,handleSubmit } = props;
  const listItems = Object.entries(data).map(([key, value]) => (
    <li>
      <strong>{key}:</strong> {value}
    </li>
  ));
  return (
    <Grid container className="create_product">
      <Grid xs={false} sm={3}></Grid>
      <Grid xs={false} sm={6}>
        <Paper elevation={3}>
          <form onSubmit={handleSubmit}>
            <ul>{listItems}</ul>
            <button >Submit</button>
          </form>
        </Paper>
      </Grid>
      <Grid xs={false} sm={3}></Grid>
    </Grid>
  );
};
export default Submit;