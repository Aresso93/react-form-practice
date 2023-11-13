import { useState } from "react"

export function useStepperControls(){
    const [activeStep, setActiveStep] = useState(0);
 
      const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
      const handleStep1 = () => {
        setActiveStep(1)
        console.log('PPPPPP')
      }

      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };
    
      const handleReset = () => {
        setActiveStep(0);
      };
    
    return {
        actions:{
            handleBack,
            handleNext,
            handleReset,
            handleStep1
        },
        state:{activeStep}
    }
}