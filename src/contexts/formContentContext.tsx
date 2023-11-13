import { PropsWithChildren, createContext, useContext } from "react";
import { useFormValidation } from "../components/hooks/useFormValidation";

export const FormContentContext = createContext({
    actions:{
        handleChange: () => {},
        handleSubmit: () => {},
        handleDate: () => {},
        handleCheck: () => {},
        handleLocationChange: () => {},
        handleMealChange: () => {},
    },
    states:{
        checked: false,
        location: '',
        meals:{
            breakfast: false,
            lunch: false,
            dinner: false,
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
            meals: []
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