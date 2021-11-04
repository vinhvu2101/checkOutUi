import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";

const Product = (props) => {
  const { product } = props;
  const useStyles = makeStyles({
    name: {
      justifyContent: "space-between",
      margin: 5,
    },
    price: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    decriptions: {
      margin: 0,
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      fontWeight: 400,
      color: "rgba(0, 0, 0, 0.6)",
      display: "block",
    },
  });
  const classes = useStyles();
  return (
    <Grid container className={classes.name}>
      <Grid xs={10.5}>
        <Typography>{product.name}</Typography>
        <Typography className={classes.decriptions}>
          {product.description}
        </Typography>
      </Grid>
      <Grid xs={1.5} className={classes.price}>
        <Typography>{`$${product.price}`}</Typography>
      </Grid>
    </Grid>
  );
};

export default Product;
