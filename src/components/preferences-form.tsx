import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  FormGroup,
} from "@mui/material";

export function PreferencesForm() {
  return (
    <>
      <div className="form-container">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            Pick your preferred accommodation
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue=""
            name="radio-buttons-group"
          >
            <FormControlLabel value="hotel" control={<Radio />} label="Hotel" />
            <FormControlLabel
              value="apartment"
              control={<Radio />}
              label="Apartment"
            />
            <FormControlLabel
              value="hostel"
              control={<Radio />}
              label="Hostel"
            />
          </RadioGroup>
          <FormGroup>
            Pick the meals you want during your stay
            <FormControlLabel
              control={<Checkbox />}
              label="Breakfast (+10 euros)"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Lunch (+15 euros)"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Dinner (+15 euros)"
            />
          </FormGroup>
          <FormGroup>
            Pick the extra activities you want to take part in
            <FormControlLabel
              control={<Checkbox />}
              label="Trekking (+30 euros)"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Cultural tour (+40 euros)"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Sports (+50 euros)"
            />
          </FormGroup>
        </FormControl>
      </div>
    </>
  );
}
