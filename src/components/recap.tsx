import { FormGroup, FormControlLabel, Checkbox, Button } from "@mui/material";
import TravellerForm from "./traveller-form";
import { useEffect, useState } from "react";

export function Recap() {

  let [checked, setChecked] = useState(false)

  useEffect(() => {
    console.log('test')
  }, [toggleCheck]);

  const handleCheck = () => {
 
    if(checked === true){
      setChecked(false);
    } else if(checked === false){
      setChecked(true)
    }
  };
  let isChecked = false

  function toggleCheck(){
    if (isChecked === false) {
      isChecked = true
    } else if (isChecked = true){
      isChecked = false
    }
    console.log('CCCCCC', isChecked);
    
  }

  return (
    <>
    <div className="form-container">
      The information you're going to submit: <br />
    
        
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
          onClick={toggleCheck}
          />
        </FormGroup>

        {checked === false ?
        <Button 
        disabled
        variant="contained"
        onClick={()=> console.log('AAAAAA')}
        >Submit
        </Button>

        :
        <Button 
        variant="contained"
        onClick={()=> console.log('AAAAAA', checked)}
        >Submit
        </Button>

        }
    <div>
        
      <small>
        PLEASE NOTE: by submitting your data you confirm that we can steal all of your
        gummy bears
      </small>

    </div>
      </div>
    </>
  );
}
