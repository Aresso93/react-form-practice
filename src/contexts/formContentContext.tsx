import { PropsWithChildren, createContext, useContext } from "react";
import { useFormValidation } from "../components/hooks/useFormValidation";

export const FormContentContext = createContext({
    actions:{
        handleChange: () => {},
        handleSubmit: () => {},
        handleDate: () => {},
        handleCheck: () => {}
    },
    states:{
        checked: false,
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
            accommodation: ''
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