import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ReactNode, useState } from 'react';
import TravellerForm from './traveller-form';
import { Recap } from './recap';
import LocationForm from './location-form';
import { PreferencesForm } from './preferences-form';
import { useStepperControls } from './hooks/useStepperControls';

const steps = ['You', 'Your destination', 'Your preferences'];

export default function TravelStepper() {
  const [skipped, setSkipped] = useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 500;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const stepperControls = useStepperControls()

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={stepperControls.state.activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          {if (stepperControls.state.activeStep === 0){
    
              <TravellerForm/> 
          }}
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
               
      </Stepper>
      {stepperControls.state.activeStep === steps.length ? (
          <React.Fragment>
          {/* <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - Enjoy your travel!
        </Typography> */}
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            {/* RECAP */}
          <Recap></Recap>
          {/* RECAP */}
          </Box>
            <Button 
            onClick={stepperControls.actions.handleReset}
            variant='contained'
            >
            Refill the form from the start
            </Button>
        </React.Fragment>
      ) : (
          <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {stepperControls.state.activeStep + 1}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={stepperControls.state.activeStep === 0}
              onClick={stepperControls.actions.handleBack}
              sx={{ mr: 1 }}
              >
              Back
            </Button>
            {stepperControls.state.activeStep === 0 &&
            <TravellerForm/>
            }
            {stepperControls.state.activeStep === 1 &&
            <LocationForm/>
            }
            {stepperControls.state.activeStep === 2 &&
            <PreferencesForm/>
            }
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={stepperControls.actions.handleNext}>
              { stepperControls.state.activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}