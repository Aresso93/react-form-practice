import './App.css'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TravelStepper from './components/stepper'

function App() {

  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <TravelStepper/> 
    </LocalizationProvider> 
    </>
  )
}

export default App
