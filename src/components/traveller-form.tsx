import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers";
import { useEffect } from "react";
import { useFormContentContext } from "../contexts/formContentContext";

export default function TravellerForm() {
  const formValidation = useFormContentContext();

  useEffect(() => {}, [formValidation.states.errors]);

  return (
    <div className="form-container">
      <TextField
        type="fullName"
        name="fullName"
        value={formValidation.states.inputFields.fullName}
        id="full-name"
        style={{
          border: formValidation.states.errors.fullName
            ? "1px solid red"
            : null,
        }}
        label="enter your full name"
        variant="outlined"
        onChange={formValidation.actions.handleChange}
      />
      {formValidation.states.errors.fullName ? (
        <p className="error">Name should include first AND last name</p>
      ) : null}

      <DatePicker
        label="travel date picker"
        value={formValidation.states.value}
        onChange={formValidation.actions.handleDate}
      />

    {formValidation.states.errors.date ? (
            <p className="error">Please select a valid date</p>
          ) : null} 

      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          Pick your gender*
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue=""
          style={{
            border: formValidation.states.errors.gender ? "1px solid red" : null,
          }}
          name="gender"
          onChange={formValidation.actions.handleChange}
        >
          <FormControlLabel value="female" control={<Radio />} label="female" />
          <FormControlLabel value="male" control={<Radio />} label="male" />
          <FormControlLabel value="other" control={<Radio />} label="other" />
          {formValidation.states.errors.fullName ? (
            <p className="error">Please select a gender option</p>
          ) : null}
        </RadioGroup>
      </FormControl>
      <TextField
        type="email"
        name="email"
        value={formValidation.states.inputFields.email}
        id="email"
        style={{
          border: formValidation.states.errors.email ? "1px solid red" : null,
        }}
        label="enter your email address"
        variant="outlined"
        onChange={formValidation.actions.handleChange}
      />
      {formValidation.states.errors.email ? (
        <p className="error">Please insert a valid email</p>
      ) : null}

      {Object.keys(formValidation.states.errors).length === 0 &&
      formValidation.states.submitting ? (
        <span>Successfully submitted ✓</span>
      ) : null}
    </div>
  );
}
