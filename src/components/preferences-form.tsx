import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  FormGroup,
} from "@mui/material";
import { useFormContentContext } from "../contexts/formContentContext";

export function PreferencesForm() {
  const formValidation = useFormContentContext();

  return (
    <>
      <div className="form-container">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            Pick your preferred accommodation*
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue=" "
            name="accommodation"
            onChange={formValidation.actions.handleChange}
          >
            <FormControlLabel
              value="hotel"
              control={<Radio />}
              label="Hotel"
            />
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
            Pick the meals you want during your stay (you can select multiple
            options)
            <FormControlLabel
              control={<Checkbox />}
              label="Breakfast (+10 euros)"
              onChange={formValidation.actions.handleCheck}
              checked={formValidation.states.checked}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Lunch (+15 euros)"
              onChange={formValidation.actions.handleCheck}
              checked={formValidation.states.checked}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Dinner (+15 euros)"
              checked={formValidation.states.checked}
              onChange={formValidation.actions.handleCheck}
            />
          </FormGroup>
          <FormGroup>
            Pick the extra activities you want to take part in (you can select
            multiple options)
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
