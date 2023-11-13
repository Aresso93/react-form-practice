import { SelectChangeEvent } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { SetStateAction, useState } from "react";

export function useFormValidation(){
  const handleChange = (e: { target }) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };
  const handleSubmitCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubmitChecked(event.target.checked);
  };
  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const handleSubmit = () => {
    setErrors(validateValues(inputFields));
    setSubmitting(true);
    console.log('Submitted');
  };
  const handleDate = (newValue: SetStateAction<dayjs.Dayjs | null>) =>{
    setValue(newValue)
  }
  const handleLocationChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value as string);
  };
  
  const handleMealChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMeals({ ...meals, [event.target.name]: event.target.checked });
    let mealsArrayOfArrays = Object.entries(meals)
    
  };

  const handleActivityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActivities({ ...activities, [event.target.name]: event.target.checked });
    
  };

  const validateValues = (inputValues: { email: string; fullName: string; gender: string; date: string; accommodation: string; }) => {
    let errors = {email: '', fullName: '', gender: '', accommodation: '', date: ''};
    if (!inputValues.email.includes('.') && inputValues.email.length <= 10) {
      errors.email = "Email must include a @";
    }
    if (inputValues.fullName.trim().length < 10) {
      errors.fullName = "Name is too short and should include first name AND last name";
    }
    if (!inputValues.gender){
      errors.gender = "Select a gender"
    }
    if(!inputValues.accommodation){
      errors.accommodation = "Select a method of accommodation"
    }
    if (!inputValues.date){
      errors.date = "Select a date"
    }
    return errors;
  };
  
  
  const [errors, setErrors] = useState({});
  const [meals, setMeals] = useState({
    breakfast: false,
    lunch: false,
    dinner: false
  }
  );
  const [activities, setActivities] = useState({
    trekking: false,
    culturalTour: false,
    sports: false
  }
  );
  
  console.log(meals)
  console.log(activities);
  

  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState<Dayjs | null>(dayjs('2022-04-17'));
  const [location, setLocation] = useState('');
  const [checked, setChecked] = useState(true);
  const [submitChecked, setSubmitChecked] = useState(false)
  const [inputFields, setInputFields] = useState({
    email: "",
    fullName: "",
    gender: "",
    date: "",
    accommodation: "",
  });
  
  const {breakfast, lunch, dinner} = meals;
  const {trekking, culturalTour, sports} = activities;
  
  return {
        actions:{
            handleChange,
            handleLocationChange,
            handleMealChange,
            handleActivityChange,
            handleSubmit,
            validateValues,
            handleDate,
            handleSubmitCheck,
            handleCheck
        },
        states:{
            meals:{
              breakfast,
              lunch,
              dinner
            },
            activities:{
              trekking,
              culturalTour,
              sports,
            },
            inputFields,
            errors,
            submitting,
            value,
            location,
            checked,
            submitChecked
        }
    }
}