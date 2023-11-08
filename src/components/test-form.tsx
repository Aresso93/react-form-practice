import { FormLabel } from "@mui/material";
import TextField from "@mui/material/TextField/TextField";
import { useEffect, useState } from "react";

export function TestForm(){

    const [inputFields, setInputFields] = useState({
        email: '',
        name: '',
        age: null
    })

    const [errors, setErrors] = useState({

    })

    const [submitting, setSubmitting] = useState(false)

    const validateValues = (inputValues) => {
        let errors = {};
        if(inputValues.email.length < 15 && !inputValues.email.includes('@')){
            errors.email = 'email is too short and should contain @'
        }
        if(inputValues.name.length < 10 && !inputValues.name.includes(' ')){
            errors.name = 'name is too short and should include first and last name'
        }
        if(inputValues.age === null && inputValues.age < 18){
            errors.age = 'minimum age is 18'
        }
    }

    const handleChange = (e) => {
        setInputFields({...inputFields, [e.target.name]: e.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefailt();
        setErrors(validateValues(inputFields))
        setSubmitting(true)
    }

    const finishSubmit = () => {
        console.log(inputFields);
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitting) {
            finishSubmit();
        }
    }, [errors])

    return (<>
    <FormLabel id="demo-radio-buttons-group-label">Insert your data 
    <form action="">
    <TextField 
    id="outlined-basic" 
    label="Outlined" 
    variant="outlined" 
    />
    <TextField 
    id="outlined-basic" 
    label="Outlined" 
    variant="outlined" 
    />
    <TextField 
    id="outlined-basic" 
    label="Outlined" 
    variant="outlined" 
    />
    </form>
    </FormLabel> 
    </>)
}
