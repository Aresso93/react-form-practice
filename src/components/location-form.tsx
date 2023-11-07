import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function LocationForm() {
  const [location, setLocation] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Location</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={location}
          label="Available locations"
          onChange={handleChange}
        >
          <MenuItem value={10}>Genoa</MenuItem>
          <MenuItem value={20}>Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch</MenuItem>
          <MenuItem value={30}>Mars</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}