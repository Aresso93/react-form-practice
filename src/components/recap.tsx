import { Button } from "@mui/material";
import { useFormContentContext } from "../contexts/formContentContext";

export function Recap() {
  const formValidation = useFormContentContext();
  let meals = formValidation.states.meals;
  let activities = formValidation.states.activities;

  function arrayDisplayer(obj: {}) {
    let objArray = Object.entries(obj);
    let tempArray = [];
    for (let i = 0; i < objArray.length; i++) {
      let innerObjArray = objArray[i];
      if (innerObjArray[1] === true) {
        tempArray.push(innerObjArray[0]);
      }
    }
    return tempArray;
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
          Date of birth: {formValidation.states.dates.value.toString()}{" "}
          <br></br>
          Gender: {formValidation.states.inputFields.gender} <br></br>
          Email address: {formValidation.states.inputFields.email} <br></br>
          <Button
            // onClick={formValidation.actions.handleReset}
            variant="outlined"
          >
            Edit this section
          </Button>
        </div>
        <div className="recap">
          Destination: {formValidation.states.location} <br></br>
          Date of departure: {formValidation.states.dates.departureValue.toString()}
          <br></br>
          Date of return: {formValidation.states.dates.returnValue.toString()}
          <br></br>
          <Button
            variant="outlined"
            // onClick={formValidation.actions.handleStep1}
          >
            Edit this section
          </Button>
        </div>
        <div className="recap">
          Method of accommodation:{" "}
          {formValidation.states.inputFields.accommodation} <br></br>
          You have selected the following meals:
          <div>
            {arrayDisplayer(meals).map((meal) => (
              <div>{meal}</div>
            ))}
          </div>
          You have selected the following extra activities:
          <div>
            {arrayDisplayer(activities).map(
              (activities) => (
                <div>{activities}</div>
              )
            )}
          </div>
          <Button
            variant="outlined"
            // onClick={formValidation.actions.handleStep2}
          >
            Edit this section
          </Button>
        </div>
      </div>
    </>
  );
}
