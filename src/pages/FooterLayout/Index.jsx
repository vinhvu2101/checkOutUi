import { Typography, Link, Box } from "@mui/material";
import React from "react";

const FooterLayout = () => {
  return (
    <Box sx={{ textAlign: "center", m: 5, color: "rgba(0, 0, 0, 0.6)" }}>
      <Typography>
        Copyright &copy;{" "}
        <Link href="#" underline="always" color="rgba(0, 0, 0, 0.6)">
          {"Your Website"}
        </Link>{" "}
        2021
      </Typography>
    </Box>
  );
};

export default FooterLayout;
