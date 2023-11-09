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
            Pick your preferred accommodation*
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue=""
            name="radio-buttons-group"
          >
            <FormControlLabel 
            name="hotel"
            value="hotel" 
            control={<Radio />} 
            label="Hotel" />
            <FormControlLabel
              name="apartment"
              value="apartment"
              control={<Radio />}
              label="Apartment"
            />
            <FormControlLabel
              name="hostel"
              value="hostel"
              control={<Radio />}
              label="Hostel"
            />
          </RadioGroup>
          <FormGroup>
            Pick the meals you want during your stay (you can select multiple options)
            <FormControlLabel
              control={<Checkbox />}
              label="Breakfast (+10 euros)"
              onChange={(check) => console.log(check)
              }
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Lunch (+15 euros)"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Dinner (+15 euros)"
              onChange={(check) => console.log(check)}
            />
          </FormGroup>
          <FormGroup>
            Pick the extra activities you want to take part in (you can select multiple options)
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
