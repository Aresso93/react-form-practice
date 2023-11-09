import { FormGroup, FormControlLabel, Checkbox, Button } from "@mui/material";
import TravellerForm from "./traveller-form";
import { useEffect, useState } from "react";
import LocationForm from "./location-form";

export function Recap() {

  let [checked, setChecked] = useState(false)
  const handleCheck = () => {
    if(checked){
      setChecked(false);
    } else if(!checked){
      setChecked(true)
    }
  };

  useEffect(() => {
    console.log('test')
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
          //onClick={toggleCheck}
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
 <small>
 PLEASE NOTE: by submitting your data you confirm that we can steal all of your
 gummy bears
</small>
    <div>
    The information you're going to submit: <br />

<TravellerForm/>
<LocationForm/>

    </div>
      </div>
    </>
  );
}
