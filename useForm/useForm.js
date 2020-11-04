import { useState } from "react"

export const useForm = (initialState = {}, mandatory = []) => {
    
    const [formValues, setFormValues] = useState(initialState);

    const reset = () => {
        setFormValues(initialState);
    };

    const handleInputChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let submit = true;
        
        //mandatory only valid for string <inputs />
        mandatory.forEach(input => {
            if (formValues[input] !==undefined && formValues[input].length === 0 ) {
                submit = false;
            }
        });
        submit ? console.log(formValues) : console.log("Following fields are mandatory: " + mandatory);
    };

    return [formValues, handleInputChange, handleSubmit, reset];
}
