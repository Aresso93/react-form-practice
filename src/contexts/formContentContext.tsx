import { PropsWithChildren, createContext, useContext } from "react";
import { useFormValidation } from "../components/hooks/useFormValidation";

export const FormContentContext = createContext({
    actions:{
        handleChange: () => {},
        handleSubmit: () => {},
        handleDate: () => {},
        handleLocationChange: () => {},
        handleMealChange: () => {},
        handleActivityChange: () => {},
        handleDeparture: () => {},
        handleReturn: () => {},
        handleReset: () => {},
        handleStep1: () => {},
        handleStep2: () => {},
        handleNext: () => {},
        handleBack: () => {},
        handleSubmitCheck: () => {},
    },
    states:{
        submitting: false,
        activeStep: 0,
        checked: false,
        submitChecked: false,
        location: '',
        dates:{
        value: '',
        departureValue: '',
        returnValue: '',
        },
        meals:{
            breakfast: false,
            lunch: false,
            dinner: false,
        },
        activities:{
            trekking: false,
            culturalTour: false,
            sports: false,
        },
        errors: {
            fullName: '',
            email: '',
            gender: '',
            date: '',
            accommodation: ''
        },
        inputFields:{
            fullName: '',
            email: '',
            gender: '',
            date: '',
            accommodation: '',
        }
    }
})

export const FormProvider = ({children}: PropsWithChildren) => {
const formValidation = useFormValidation()
    return (
        <FormContentContext.Provider value={formValidation}>
            {children}
        </FormContentContext.Provider>
    )
}

export const useFormContentContext = () => useContext(FormContentContext)