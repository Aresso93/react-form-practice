import { useState } from "react";

export function useFormValidation(){
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [inputFields, setInputFields] = useState({
        email: "",
        fullName: "",
        gender: "",
        date: ""
      });

      const handleChange = (e: { target }) => {
        setInputFields({ ...inputFields, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = () => {
        setErrors(validateValues(inputFields));
        setSubmitting(true);
      };
    
      const finishSubmit = () => {
        console.log('AAAAAAA', inputFields);
      };

      const validateValues = (inputValues) => {
        let errors = {};
        if (!inputValues.email.includes('.') && inputValues.email.length <= 10) {
          errors.email = "Email must include a @";
        }
        if (inputValues.fullName.trim().length < 10) {
          errors.fullName = "Name is too short and should include first name AND last name";
        }
        if (!inputValues.gender){
          errors.gender = "Select a gender"
        }
        if (!inputValues.date){
          errors.date = "Select a date"
        }
        return errors;
      };

    return {
        actions:{
            handleChange,
            handleSubmit,
            finishSubmit,
        },
        states:{
            inputFields,
            errors,
            submitting
        }
    }

}