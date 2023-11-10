import './App.css'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TravelStepper from './components/stepper'
import { FormContentContext, FormProvider } from './contexts/formContentContext';

function App() {

  return (
    <>
    <FormProvider>  
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <TravelStepper/> 
    </LocalizationProvider> 
    </FormProvider>
    </>
  )
}

export default App
