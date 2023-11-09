import { FormGroup, FormControlLabel, Checkbox, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useStepperControls } from "./hooks/useStepperControls";

export function Recap() {
  const stepperControls = useStepperControls()
  let [checked, setChecked] = useState(false)
  const handleCheck = () => {
    if(checked){
      setChecked(false);
    } else if(!checked){
      setChecked(true)
    }
  };

  useEffect(() => {
  }, [handleCheck]);

  return (
    <>
    <div className="form-container">
      
        <h3>Terms and conditions</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Ducimus provident consequatur sint quibusdam, quam distinctio
        tempore excepturi aperiam nam eius culpa mollitia possimus illum aliquid
        numquam? Omnis illum molestiae saepe.
        <FormGroup>
          <FormControlLabel 
          required control={<Checkbox />} 
          label="I accept and relinquish my soul"
          onChange={handleCheck}
          />
        </FormGroup>

        {checked === false ?
        <Button 
        disabled
        variant="contained"
        >Submit
        </Button>
        :
        <Button 
        variant="contained"
        onClick={stepperControls.actions.handleReset}
        >Submit
        </Button>
        }
 <small>
 PLEASE NOTE: by submitting your data you confirm that we can steal all of your
 gummy bears
</small>
      </div>
    The information you're going to submit: <br />
    <div className="user-details">
    Full name: John Johnson 
    Date of birth: 25/05/1993
    Gender: other
    Email address: bla.bla@fakemail.com
    <button>Edit this section</button>
    </div>
    <div className="destination-details">
    Destination: Spain
    Date of departure: 50/01/2300
    Date of return: 52/01/2300   
    <button>Edit this section</button> 
    </div>

    <div className="preferences-details">
    Method of accommodation: City 
    Meals you are going to have on your holiday: A, B, C 
    Extra activities: D, E and F
    <button>Edit this section</button>
    {/* questo bottone porterà la sezione attiva su quella corrispondente permettendo di modificare le info lì presenti */}
    </div>

    </>
  );
}
