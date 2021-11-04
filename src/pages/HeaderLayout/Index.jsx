import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const HeaderLayout = () => {
  const useStyles = makeStyles({
    text: {
      color: "rgba(0, 0, 0, 0.87)",
      fontWeight: "400",
      fontFamily: "Roboto,Helvetica,Arial,sans-serif",
      fontSize: "20px",
    },
  });
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#f5f5f5" }}>
        <Toolbar variant="regular">
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            className={classes.text}
          >
            Company name
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderLayout;
