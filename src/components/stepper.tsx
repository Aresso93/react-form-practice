import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TravellerForm from "./traveller-form";
import { Recap } from "./recap";
import LocationForm from "./location-form";
import { PreferencesForm } from "./preferences-form";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { useFormContentContext } from "../contexts/formContentContext";
import { useStepperControls } from "./hooks/useStepperControls";
import { useEffect } from "react";

const steps = ["You", "Your destination", "Your preferences"];
export default function TravelStepper() {
  
  const formValidation = useFormContentContext();
  const stepperControls = useStepperControls()
  
  console.log('AAAAAAAAAAA', formValidation.states.errors.email)
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={stepperControls.activeStep}>
        {steps.map((label) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};

          {
            if (stepperControls.activeStep === 0) {
              <TravellerForm />;
            }
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {stepperControls.activeStep === steps.length ? (
        <React.Fragment>
          <div className="btn-ctn">
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - Accept our terms and conditions to submit
              your information
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", pt: 2 }}>
              <FormGroup>
                <FormControlLabel
                  required
                  control={<Checkbox />}
                  checked={formValidation.states.submitChecked}
                  label="I accept"
                  onChange={formValidation.actions.handleSubmitCheck}
                />
              </FormGroup>

              {formValidation.states.submitChecked === false ? (
                <Button disabled variant="contained">
                  Submit
                </Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={stepperControls.actions.handleReset}
                >
                  Submit
                </Button>
              )}
            </Box>
          </div>
          <Recap />

          <div className="btn-ctn">
            <Button
              onClick={stepperControls.actions.handleReset}
              variant="contained"
            >
              Fill out a new form
            </Button>
            <Button
              color="inherit"
              disabled={stepperControls.activeStep === 0}
              onClick={stepperControls.actions.handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Step {stepperControls.activeStep + 1}/{steps.length}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", pt: 2 }}>
            {stepperControls.activeStep === 0 && <TravellerForm />}
            {stepperControls.activeStep === 1 && <LocationForm />}
            {stepperControls.activeStep === 2 && <PreferencesForm />}
            <Button
              color="inherit"
              disabled={stepperControls.activeStep === 0}
              onClick={stepperControls.actions.handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button
              onClick={() => {
                formValidation.actions.handleSubmit()
                if (formValidation.states.errors.email === '' ) {
                  stepperControls.actions.handleNext();
                }
              console.log(Object.values(formValidation.states.errors))
              console.log(Object.values(formValidation.states.errors).length)
              }}
            >
              {stepperControls.activeStep === steps.length - 1
                ? "Finish"
                : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

// {Object.keys(formValidation.states.errors).length === 0 &&
//   formValidation.states.submitting ? (
//     <span>Successfully submitted ✓</span>
//   ) : null}