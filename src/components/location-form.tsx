import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DatePicker } from '@mui/x-date-pickers';
import { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

export default function LocationForm() {
  const [location, setLocation] = useState('');
  const [value, setValue] = useState<Dayjs | null>(dayjs('2022-04-17'));
  const handleLocationChange = (event: SelectChangeEvent) => {
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
        <InputLabel id="demo-simple-select-label">Pick your destination*</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={location}
          label="Available locations"
          onChange={handleLocationChange}
          >
          <MenuItem value={'Genoa'}>Genoa</MenuItem>
          <MenuItem value={'Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch'}>Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch</MenuItem>
          <MenuItem value={'Mars'}>Mars</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <DatePicker 
    label="date of departure*"
    value={value}
    onChange={(newValue) => {
      setValue(newValue)
      console.log(newValue.$d)
    }}
    />
    <DatePicker 
    label="date of return*"
    value={value}
    onChange={(newValue) => {
      setValue(newValue)
      console.log(newValue.$d)
    }}
    />
    </div>
      </>
  );
}