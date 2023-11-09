import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

export default function LocationForm() {
  const [location, setLocation] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value as string);
  };
  console.log('AAAAAAA');
  return (
    <>
    <div className='form-container'>
   
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Pick your destination</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={location}
          label="Available locations"
          onChange={handleChange}
          >
          <MenuItem value={'Genoa'}>Genoa</MenuItem>
          <MenuItem value={'Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch'}>Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch</MenuItem>
          <MenuItem value={'Mars'}>Mars</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <DatePicker 
    label="Day of departure" 
    defaultValue={dayjs('2023-01-01')} 
    />
    <DatePicker label="Day of return" defaultValue={dayjs('2023-01-01')} />
    </div>
      </>
  );
}