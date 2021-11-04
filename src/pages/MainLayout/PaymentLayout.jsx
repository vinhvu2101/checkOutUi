import * as React from "react";
import {
  Grid,
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import PaymentMethodInput from "../../components/PaymentMethod/PaymentMethodInput";

const PaymentLayout = () => {
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
    },
  });
  const classes = useStyles();
  const paymentMethod = [
    { name: "Name on card", helperText: "" },
    { name: "Card number", helperText: "" },
    { name: "Expiry date", helperText: "" },
    { name: "CVV", helperText: "Last three digits on signature stri" },
  ];
  return (
    <Box>
      <Grid item sx={{ mt: 7 }}>
        <Typography variant="h6" fontWeight="bolder" textAlign="left">
          Payment method
        </Typography>
      </Grid>

      <Grid container item className={classes.name}>
        {paymentMethod.map((paymentMethod) => (
          <PaymentMethodInput paymentMethod={paymentMethod} />
        ))}
      </Grid>

      <Grid item>
        <FormControlLabel
          control={<Checkbox />}
          label="Remember credit card details for next time"
        />
      </Grid>
    </Box>
  );
};

export default PaymentLayout;
