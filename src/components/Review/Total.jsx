import * as React from "react";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const Total = (props) => {
  const useStyles = makeStyles({
    name: {
      marginTop: 10,
      justifyContent: "space-between",
    },
    price: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  });
  const classes = useStyles();
  const { total } = props;
  return (
    <Grid container className={classes.name}>
      <Grid xs={10.5}>
        <Typography>{total.name}</Typography>
      </Grid>

      <Grid xs={1.5} className={classes.price}>
        <Typography>{`$${total.price}`}</Typography>
      </Grid>
    </Grid>
  );
};

export default Total;
