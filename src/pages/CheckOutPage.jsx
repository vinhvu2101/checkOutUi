import React from "react";
import HeaderLayout from "./HeaderLayout/Index";
import MainLayout from "./MainLayout/Index";
import { Box } from "@mui/system";
import FooterLayout from "./FooterLayout/Index";

const PageCheckOut = () => {
  return (
    <Box>
      <HeaderLayout />
      <MainLayout />
      <FooterLayout />
    </Box>
  );
};

export default PageCheckOut;
