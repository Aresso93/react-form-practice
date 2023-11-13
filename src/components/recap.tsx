import { useFormContentContext } from "../contexts/formContentContext";
import { useStepperControls } from "./hooks/useStepperControls";

export function Recap() {
  const formValidation = useFormContentContext();
  const stepperControls = useStepperControls();
  function arrayDisplayer(meals:{}){
    meals = formValidation.states.meals
    let mealsArrayOfArrays = Object.entries(meals)
    let tempArray = []
    for (let i = 0; i < mealsArrayOfArrays.length; i++) {
      let mealsArray = mealsArrayOfArrays[i];
      if (mealsArray[1] === true) {
        tempArray.push(mealsArray[0])
      }
    }
    return (tempArray)
    
  }
  function arrayDisplayer2(activities:{}){
    activities = formValidation.states.activities
    let activitiesArrayOfArrays = Object.entries(activities)
    let tempArray = []
    for (let i = 0; i < activitiesArrayOfArrays.length; i++) {
      let activitiesArray = activitiesArrayOfArrays[i];
      if (activitiesArray[1] === true) {
        tempArray.push(activitiesArray[0])
        
      }
    }

    return (tempArray)
    
  }

  return (
    <>
      <div className="form-container">
        <h3>Terms and conditions</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        provident consequatur sint quibusdam, quam distinctio tempore excepturi
        aperiam nam eius culpa mollitia possimus illum aliquid numquam? Omnis
        illum molestiae saepe.
        <small>
          PLEASE NOTE: by submitting your data you confirm that we can steal all
          of your gummy bears
        </small>
      </div>
      The information you're going to submit: <br />
      <div className="recap-container">
        <div className="recap">
        Full name: {formValidation.states.inputFields.fullName} <br></br>
        Date of birth: {formValidation.states.dates.value.toString()}  <br></br>
        Gender: {formValidation.states.inputFields.gender} <br></br>
        Email address: {formValidation.states.inputFields.email} <br></br>
        <button onClick={stepperControls.actions.handleStep1}>
          Back to this section
        </button>
        </div>
        <div className="recap">
        Destination: {formValidation.states.location} <br></br>
        Date of departure: {formValidation.states.dates.departureValue.toString()}<br></br>
        Date of return: {formValidation.states.dates.returnValue.toString()}<br></br>
        <button>Back to this section</button>
        </div>
        <div className="recap">
        Method of accommodation:{" "}
        {formValidation.states.inputFields.accommodation} <br></br>
        You have selected the following meals:
        <div>
        {arrayDisplayer(formValidation.states.meals).map((meal)=> (
          <div>{meal} </div>
        ))}
        </div> 
      
        You have selected the following extra activities: 
        <div>
        {arrayDisplayer2(formValidation.states.activities).map((activities)=> (
          <div>{activities} </div>
        ))}
        </div>
        <button>Back to this section</button>
        {/* questo bottone porterà la sezione attiva su quella corrispondente permettendo di modificare le info lì presenti */}
        </div>
      </div>
    </>
  );
}
