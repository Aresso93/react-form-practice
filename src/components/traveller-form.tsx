import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { useState } from 'react';

export default function TravellerForm() {
  
  return (
    <>
    <div className='form-container'>
    <TextField id="full-name" label="enter your full name" variant="outlined"/>
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Pick your gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
    <TextField id="full-name" label="enter your email address" variant="outlined"/>
    <DatePicker label="Pick your date of birth" defaultValue={dayjs('2023-01-01')} />
    
    </div>
  </>
  );
}