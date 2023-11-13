import './App.css'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TravelStepper from './components/stepper'
import { FormProvider } from './contexts/formContentContext';

function App() {

  return (
    <div className='outer-container'>
    <FormProvider>  
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <TravelStepper/> 
    </LocalizationProvider> 
    </FormProvider>
    </div>
  )
}

export default App
