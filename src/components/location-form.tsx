import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { useEffect } from 'react';

export default function LocationForm() {
  const [location, setLocation] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value as string);
    console.log(location);
  };
  useEffect(() => {
    
  }, [location]);
  return (
    <>
    <div className='form-container'>
   
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Pick your destination</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue=''
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
    name= "date of departure"
    label="date of departure"
    onChange={(date) => console.log(date)}
    />
    <DatePicker 
    name= "date of return"
    label="date of return"
    onChange={(date) => console.log(date)}
    />
    </div>
      </>
  );
}