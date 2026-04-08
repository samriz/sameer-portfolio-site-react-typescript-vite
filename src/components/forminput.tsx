import { type ComponentPropsWithoutRef } from 'react';
import FormGroupItem from "./formgroupitem";

/* type FormInputProps =
{
    type: string;
    id: string;
    name: string;
    required: boolean;
    hidden: boolean;
} & React.InputHTMLAttributes<HTMLInputElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement>; */
type FormInputProps = {
    type: string;
    id: string;
    name: string;
    required: boolean;
    hidden: boolean;
} & ComponentPropsWithoutRef<"input"> & ComponentPropsWithoutRef<"textarea">;

export default function FormInput({type, id, name, required, hidden, ...props}: FormInputProps)
{
    const inputTypes = ['button', 'checkbox', 'color', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'textarea', 'time', 'url', 'week'];

    if(inputTypes.includes(type.toLowerCase()))
    {
        if(type.toLowerCase() === "email")
        {
            return (
                <FormGroupItem
                    element={
                        <>
                            <input type={type} id={id} name={name} required={required} hidden={hidden} {...props}/>
                            <div className="underline"/>
                            
                            <span id="spanInvalidEmail" style={{color: "red"}} hidden={true}><br></br><small>&nbsp;<i>Invalid Email</i></small></span>
                        </>
                    }
                />        
            );
        }
        else if(type.toLowerCase() === "textarea")
        {
            return (
                <FormGroupItem
                    element={
                        <>
                            <textarea id={id} name={name} required={required} hidden={hidden} {...props}/>
                            <div className="underline"/>
                        </>
                    }
                />
            );
        }
        else
        {
            return (
                <FormGroupItem
                    element={
                        <>
                            <input type={type} id={id} name={name} required={required} hidden={hidden} {...props}/>
                            <div className="underline"/>
                        </>
                    }
                />        
            );
        }
    }
    else
    {
        return (
            <FormGroupItem
                element={
                    <>
                        <input type={type} id={id} name={name} required={required} hidden={hidden} {...props}/>
                        <div className="underline"/>
                    </>
                }
            />        
        );
    }
}