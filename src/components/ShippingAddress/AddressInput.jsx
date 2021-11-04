import * as React from "react";
import { TextField } from "@mui/material";

const AddressInput = (props) => {
  const { lableCity } = props;
  return (
    <TextField
      id="standard-basic"
      label={`${lableCity.label}`}
      variant="standard"
      required
      fullWidth
    />
  );
};

export default AddressInput;
