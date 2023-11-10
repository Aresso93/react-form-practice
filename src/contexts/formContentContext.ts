import { createContext, useContext } from "react";
import { useFormValidation } from "../components/hooks/useFormValidation";

const formValidationState = {
    actions:{
        handleChange: () => {},
        handleSubmit: () => {},
        validateValues: () => {},
    },
    states:{
        inputFields: '',
        errors: '',
        submitting: ''
    }
}

export const FormContentContext = createContext(formValidationState)

export const useFormContentContext = () => useContext(FormContentContext)