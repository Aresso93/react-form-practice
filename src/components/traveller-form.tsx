import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useStepperControls } from './hooks/useStepperControls';

export default function TravellerForm() {
  
  const stepperControls = useStepperControls()

  const [inputFields, setInputFields] = useState({
    email: "",
    fullName: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validateValues = (inputValues) => {
    let errors = {};
    if (!inputValues.email.includes('.') && inputValues.email.length <= 10) {
      errors.email = "Email must include a @";
    }
    if (inputValues.fullName.trim().length < 10) {
      errors.fullName = "Name is too short and should include first name AND last name";
    }
    return errors;
  };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setErrors(validateValues(inputFields));
    setSubmitting(true);
  };

  const finishSubmit = () => {
    console.log(inputFields);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
    }
  }, [errors]);

  console.log(inputFields)

  return (
    <>
     
    <form className='form-container' onSubmit={handleSubmit}>
    <TextField 
    type='fullName'
    name='fullName'
    value={inputFields.fullName}
    id="full-name" 
    style={{ border: errors.fullName ? "1px solid red" : null }}
    label="enter your full name" 
    variant='outlined'
    onChange={handleChange}
    />
    {errors.fullName ? (
            <p className="error">Name should include first AND last name</p>
          ) : null}
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Pick your gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        >
        <FormControlLabel value="female" control={<Radio />} label="female" />
        <FormControlLabel value="male" control={<Radio />} label="male" />
        <FormControlLabel value="other" control={<Radio />} label="other" />
      </RadioGroup>
    </FormControl>
    <TextField 
    type='email'
    name='email'
    value={inputFields.email}
    id="email" 
    style={{ border: errors.email ? "1px solid red" : null }}
    label="enter your email address" 
    variant="outlined"
    onChange={handleChange}
    />
    <DatePicker label="Pick your date of birth" defaultValue={dayjs('2023-01-01')} />
    {/* <button type="submit">Submit Information</button> */}
    {Object.keys(errors).length === 0 && submitting ? (
        <span className="success">Successfully submitted ✓</span>
      ) : null}
      <button 
      type="submit"
      onClick={stepperControls.actions.handleNext}
      >Submit Information</button>
    </form>
  </>
  );
}