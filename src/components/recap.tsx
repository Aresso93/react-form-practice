import { FormGroup, FormControlLabel, Checkbox, Button } from "@mui/material";

export function Recap() {
  return (
    <>
      <div className="form-container">
        Terms and conditions Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Ducimus provident consequatur sint quibusdam, quam distinctio
        tempore excepturi aperiam nam eius culpa mollitia possimus illum aliquid
        numquam? Omnis illum molestiae saepe.
        <FormGroup>
          <FormControlLabel required control={<Checkbox />} label="I accept and relinquish my soul" />
        </FormGroup>
        <Button variant="contained">Submit*</Button>
      </div>

      <small>
        * by submitting your data you confirm that we can steal all of your
        gummy bears
      </small>
    </>
  );
}
