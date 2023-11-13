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
              control={
              <Checkbox
              checked= {formValidation.states.meals.breakfast}
              onChange={formValidation.actions.handleMealChange}
              name="breakfast"
              />
            }
              label="Breakfast"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Lunch"
              checked= {formValidation.states.meals.lunch}
              onChange={formValidation.actions.handleMealChange}
              name="lunch"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Dinner"
              checked= {formValidation.states.meals.dinner}
              onChange={formValidation.actions.handleMealChange}
              name="dinner"
            />
          </FormGroup>
          <FormGroup>
            Pick the extra activities you want to take part in (you can select
            multiple options)
            <FormControlLabel
              control={<Checkbox />}
              label="Trekking"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Cultural tour"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Sports"
            />
          </FormGroup>
        </FormControl>
      </div>
    </>
  );
}
