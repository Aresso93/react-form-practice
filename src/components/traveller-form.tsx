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
    gender: ""
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
    if (!inputValues.gender){
      errors.gender = "Select a gender"
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
    console.log('AAAAAAA', inputFields);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
    }
  }, [errors]);

  console.log('sul cambio', inputFields)

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
      <FormLabel id="demo-radio-buttons-group-label">Pick your gender*</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue=" "
        name="gender"
        onChange={handleChange}
        >
        <FormControlLabel value="female" control={<Radio />} label="female" />
        <FormControlLabel value="male" control={<Radio />} label="male" />
        <FormControlLabel value="other" control={<Radio />} label="other" />
          {errors.fullName ? (
            <p className="error">Please select a gender option</p>
          ) : null}
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
    {errors.email ? (
            <p className="error">Please insert a valid email</p>
          ) : null}
    <DatePicker label="Pick your date of birth" defaultValue={dayjs('2005-01-01')} />
    {/* <button type="submit">Submit Information</button> */}
    {Object.keys(errors).length === 0 && submitting ? (
        <span className="success">Successfully submitted ✓</span>
      ) : null}
      <button 
      type="submit"
      onClick={stepperControls.actions.handleNext}
      >Submit Information
      </button>
    </form>
  </>
  );
}