import { SelectChangeEvent } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { SetStateAction, useState } from "react";

export function useFormValidation() {
  const handleChange = (e: { target }) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleStep1 = () => {
    setActiveStep(1)
  }

  const handleStep2 = () => {
    setActiveStep(2)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const handleSubmitCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubmitChecked(event.target.checked);
  };
  const handleSubmit = () => {
    setErrors(validateValues(inputFields));
    setSubmitting(true);
    console.log("Submitted");
  };
  const handleDate = (newValue: SetStateAction<dayjs.Dayjs | null>) => {
    setValue(newValue);
  };
  const handleLocationChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value as string);
  };
  const handleDeparture = (newValue: SetStateAction<dayjs.Dayjs | null>) => {
    setDepartureValue(newValue);
  };
  const handleReturn = (newValue: SetStateAction<dayjs.Dayjs | null>) => {
    setReturnValue(newValue);
  };
  const handleMealChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMeals({ ...meals, [event.target.name]: event.target.checked });
  };

  const handleActivityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActivities({ ...activities, [event.target.name]: event.target.checked });
  };

  const validateValues = (inputValues: {
    email: string;
    fullName: string;
    gender: string;
    accommodation: string;
  }) => {
    let errors = {
      email: "",
      fullName: "",
      gender: "",
      accommodation: "",
    };
    if (!inputValues.email.includes(".") && inputValues.email.length <= 10) {
      errors.email = "Email must include a @";
    }
    if (inputValues.fullName.trim().length < 10) {
      errors.fullName =
        "Name is too short and should include first name AND last name";
    }
    if (!inputValues.gender) {
      errors.gender = "Select a gender";
    }
    if (!inputValues.accommodation) {
      errors.accommodation = "Select a method of accommodation";
    }
    
    return errors;
  };

  const [errors, setErrors] = useState({});
  const [meals, setMeals] = useState({
    breakfast: false,
    lunch: false,
    dinner: false,
  });
  const [activities, setActivities] = useState({
    trekking: false,
    culturalTour: false,
    sports: false,
  });
  const [activeStep, setActiveStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState<Dayjs | null>(dayjs("2023-01-15"));
  const [departureValue, setDepartureValue] = useState<Dayjs | null>(dayjs('2022-04-17'));
  const [returnValue, setReturnValue] = useState<Dayjs | null>(dayjs('2022-04-17'));
  const [location, setLocation] = useState("");
  const [submitChecked, setSubmitChecked] = useState(false);
  const [inputFields, setInputFields] = useState({
    email: "",
    fullName: "",
    gender: "",
    accommodation: "",
  });

  const { breakfast, lunch, dinner } = meals;
  const { trekking, culturalTour, sports } = activities;

  return {
    actions: {
      handleChange,
      handleLocationChange,
      handleMealChange,
      handleActivityChange,
      handleSubmit,
      validateValues,
      handleDate,
      handleDeparture,
      handleReturn,
      handleSubmitCheck,
      handleBack,
      handleNext,
      handleReset,
      handleStep1,
      handleStep2
    },
    states: {
      activeStep,
      meals: {
        breakfast,
        lunch,
        dinner,
      },
      activities: {
        trekking,
        culturalTour,
        sports,
      },
      inputFields,
      errors,
      submitting,
      location,
      submitChecked,
      dates:{
        value,
        departureValue,
        returnValue,
      }
    },
  };
}
