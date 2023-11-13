import { useFormContentContext } from "../contexts/formContentContext";
import { useStepperControls } from "./hooks/useStepperControls";

export function Recap() {
  const formValidation = useFormContentContext()
  const stepperControls = useStepperControls()

  return (
    <>
    <div className="form-container">
      
        <h3>Terms and conditions</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Ducimus provident consequatur sint quibusdam, quam distinctio
        tempore excepturi aperiam nam eius culpa mollitia possimus illum aliquid
        numquam? Omnis illum molestiae saepe.
       
 <small>
 PLEASE NOTE: by submitting your data you confirm that we can steal all of your
 gummy bears
</small>
      </div>
    The information you're going to submit: <br />
    <div className="btn-ctn">
    Full name: {formValidation.states.inputFields.fullName} <br></br>
    Date of birth: {formValidation.states.inputFields.date} <br></br>
    Gender: {formValidation.states.inputFields.gender} <br></br> 
    Email address: {formValidation.states.inputFields.email} <br></br>
    <button
    onClick={stepperControls.actions.handleStep1}
    >
      Edit this section
      </button>
    </div>
    <div className="btn-ctn">
    Destination: {formValidation.states.location} <br></br>
    Date of departure: 50/01/2300 <br></br>
    Date of return: 52/01/2300 <br></br>
    <button>Edit this section</button> 
    </div>

    <div className="btn-ctn">
    Method of accommodation: {formValidation.states.inputFields.accommodation} <br></br>
    Meals you are going to have on your holiday: {formValidation.states.inputFields.meals.length}  <br></br>
    Extra activities: D, E and F <br></br>
    <button>Edit this section</button>
    {/* questo bottone porterà la sezione attiva su quella corrispondente permettendo di modificare le info lì presenti */}
    </div>

    </>
  );
}
