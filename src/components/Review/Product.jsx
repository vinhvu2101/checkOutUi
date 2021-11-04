import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";

const Product = (props) => {
  const { product } = props;
  const useStyles = makeStyles({
    name: {
      justifyContent: "space-between",
    },
    price: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
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
        <Typography>{product.price}</Typography>
      </Grid>
    </Grid>
  );
};

export default Product;
