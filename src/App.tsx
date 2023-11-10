import './App.css'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TravelStepper from './components/stepper'
import { FormContentContext } from './contexts/formContentContext';
import { useFormValidation } from './components/hooks/useFormValidation';

function App() {

  const formValidation = useFormValidation()

  return (
    <>
    <FormContentContext.Provider value={formValidation}>  
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <TravelStepper/> 
    </LocalizationProvider> 
    </FormContentContext.Provider>
    </>
  )
}

export default App
