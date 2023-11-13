import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DatePicker } from '@mui/x-date-pickers';
import { useFormContentContext } from '../contexts/formContentContext';

export default function LocationForm() {
  
  const formValidation = useFormContentContext()
  return (
    <>
    <div className='form-container'>
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Pick your destination*</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue='Genoa'
          value={formValidation.states.location}
          label="Available locations"
          onChange={formValidation.actions.handleLocationChange}
          >
          <MenuItem value={'Genoa'}>Genoa</MenuItem>
          <MenuItem value={'Las Vegas'}>Las Vegas</MenuItem>
          <MenuItem value={'Mars'}>Mars</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <DatePicker 
    label="date of departure*"
    value={formValidation.states.dates.departureValue}
    onChange={formValidation.actions.handleDeparture}
    />
    <DatePicker 
    label="date of return*"
    value={formValidation.states.dates.returnValue}
    onChange={formValidation.actions.handleReturn}
    />
    </div>
      </>
  );
}