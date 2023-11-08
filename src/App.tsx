import './App.css'

import { Recap } from './components/recap'
import { PreferencesForm } from './components/preferences-form'
import TravellerForm from './components/traveller-form'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import LocationForm from './components/location-form'
import TravelStepper from './components/stepper'

function App() {

  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TravelStepper>
        
      </TravelStepper>
   <TravellerForm/> 
   {/* <LocationForm/> 
    <PreferencesForm/>
    <Recap/> */}
    </LocalizationProvider> 
    </>
  )
}

export default App
