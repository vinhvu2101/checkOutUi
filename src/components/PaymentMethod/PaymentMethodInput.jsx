import * as React from "react";
import { Grid, TextField } from "@mui/material";

const PaymentMethodInput = (props) => {
  const { paymentMethod } = props;
  return (
    <Grid xs={5.7}>
      <TextField
        id="standard-basic"
        label={`${paymentMethod.name}`}
        variant="standard"
        required
        fullWidth
        helperText={`${paymentMethod.helperText}`}
      />
    </Grid>
  );
};

export default PaymentMethodInput;
