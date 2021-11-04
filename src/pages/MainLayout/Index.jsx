import * as React from "react";
import Container from "@mui/material/Container";
import { Grid, Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import ShippingLayout from "./ShippingLayout";
import PaymentLayout from "./PaymentLayout";
import ReviewLayouat from "./ReviewLayout";

const steps = ["Shipping address", "Payment details", "Review your order"];

const MainLayout = () => {
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
    text: {
      margin: 0,
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      fontweight: 400,
      fontSize: "1rem",
      lineHeight: 1.75,
      letterSpacing: "0.00938em",
    },
  });
  const classes = useStyles();

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  // const isStepOptional = (step) => {
  //   return step === 1;
  // };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  return (
    <Container fixed maxWidth="sm" className={classes.container}>
      <Box>
        <Grid container spacing={2} className={classes.grid}>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              component="div"
              textAlign="center"
            >
              Checkout
            </Typography>
          </Grid>

          <Grid>
            <Box sx={{ width: "100%" }}>
              <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  // if (isStepOptional(index)) {
                  //   labelProps.optional = (
                  //     <Typography variant="caption">Optional</Typography>
                  //   );
                  // }
                  if (isStepSkipped(index)) {
                    stepProps.completed = false;
                  }
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>

              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" sx={{ mt: 5, mb: 1 }}>
                    Thank you for your order.
                  </Typography>
                  <Typography variant="h6" className={classes.text}>
                    Your order number is #2001539. We have emailed your order
                    confirmation, and will send you an update when your order
                    has shipped.
                  </Typography>
                  {/* <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    <Box sx={{ flex: "1 1 auto" }} />
                    <Button onClick={handleReset} variant="contained">
                      Reset
                    </Button>
                  </Box> */}
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {(() => {
                    if (activeStep === 0) {
                      return <ShippingLayout />;
                    } else if (activeStep === 1) {
                      return <PaymentLayout />;
                    } else {
                      return <ReviewLayouat />;
                    }
                  })()}

                  <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    <Box sx={{ flex: "1 1 auto" }} />
                    <Button
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Back
                    </Button>
                    <Button onClick={handleNext} variant="contained">
                      {activeStep === steps.length - 1 ? "Place order" : "Next"}
                    </Button>
                  </Box>
                </React.Fragment>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default MainLayout;
