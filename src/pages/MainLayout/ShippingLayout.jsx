import * as React from "react";
import {
  Grid,
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import AddressInput from "../../components/ShippingAddress/AddressInput";

const ShippingLayout = () => {
  const useStyles = makeStyles({
    container: {
      marginTop: "48px",
    },
    grid: {
      border: "1px solid rgba(0, 0, 0, 0.12)",
      padding: "24px",
      justifyContent: "center",
      flexDirection: "column",
    },
    name: {
      justifyContent: "space-between",
    },
  });
  const classes = useStyles();
  const labelName = [{ label: "First name" }, { label: "Last name" }];
  const labelAddress = [
    { label: "Address line 1" },
    { label: "Address line 2" },
  ];
  const lableCity = [
    { label: "City" },
    { label: "State/Province/Region" },
    { label: "Zip / Postal code" },
    { label: "Country" },
  ];
  return (
    <Box>
      <Grid item sx={{ mt: 7 }}>
        <Typography variant="h6" fontWeight="bolder" textAlign="left">
          Shipping address
        </Typography>
      </Grid>

      <Grid container item className={classes.name}>
        {labelName.map((x) => (
          <Grid xs={5.7}>
            <AddressInput lableCity={x} />
          </Grid>
        ))}
      </Grid>
      <Grid item>
        {labelAddress.map((x) => (
          <AddressInput lableCity={x} />
        ))}
      </Grid>

      <Grid container item className={classes.name}>
        {lableCity.map((lableCity) => (
          <Grid xs={5.7}>
            <AddressInput lableCity={lableCity} />
          </Grid>
        ))}
      </Grid>

      <Grid item>
        <FormControlLabel
          control={<Checkbox />}
          label="Use this address for payment details"
        />
      </Grid>
    </Box>
  );
};

export default ShippingLayout;
