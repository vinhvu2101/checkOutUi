import * as React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Product from "../../components/Review/Product";
import Total from "../../components/Review/Total";

const ReviewLayout = () => {
  const useStyles = makeStyles({
    container: {
      marginTop: "48px",
    },
    grid: {
      // border: "1px solid rgba(0, 0, 0, 0.12)",
      padding: "24px",
      justifyContent: "center",
      flexDirection: "column",
    },
    name: {
      justifyContent: "space-between",
      marginTop: 3,
    },
    price: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    shipping: {
      margin: "16px 0 7px 0 ",
      color: "black",
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      fontWeight: "bolder",
    },
  });
  const classes = useStyles();
  const product = [
    { name: "Product 1", description: "A nice thing", price: 9.99 },
    { name: "Product 2", description: "Another thing", price: 3.45 },
    { name: "Product 3", description: "Something else", price: 6.51 },
    { name: "Product 4", description: "Best thing of all", price: 14.11 },
  ];
  const paymentDetails = [
    { name: "Card type" },
    { name: "Visa" },
    { name: "Card holder" },
    { name: "Mr John Smith" },
    { name: "Card number" },
    { name: "xxxx-xxxx-xxxx-1234" },
    { name: "Expiry date" },
    { name: "04/2024" },
  ];

  const sumPrice = () => {
    let sum = 0;
    product.map((value) => {
      return (sum += value.price);
    });
    return sum;
  };
  const total = [
    { name: "Shipping", price: "Free" },
    { name: "Total", price: sumPrice() },
  ];

  return (
    <Box>
      <Grid container spacing={2} className={classes.grid}>
        <Grid sx={{ mt: 5, mb: 2 }}>
          <Typography variant="h6" fontWeight="bolder" textAlign="left">
            Order summary
          </Typography>
        </Grid>

        {product.map((product, index) => (
          <Product key={index} product={product} />
        ))}
        {total.map((total, index) => (
          <Total key={index} total={total} />
        ))}
        {/* <Total total={shipping} /> */}
        {/* <Total total={total} /> */}

        <Grid container className={classes.name}>
          <Grid xs={6}>
            <Typography className={classes.shipping} variant="h6">
              Shipping
            </Typography>
            <Typography gutterBottom>John Smith</Typography>
            <Typography gutterBottom>
              1 MUI Drive, Reactville, Anytown, 99999, USA
            </Typography>
          </Grid>

          <Grid xs={6} container item>
            <Grid>
              <Typography variant="h6" className={classes.shipping}>
                Payment details
              </Typography>
            </Grid>

            {paymentDetails.map((x, index) => (
              <Grid key={index} item xs={6}>
                <Typography>{x.name}</Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReviewLayout;
