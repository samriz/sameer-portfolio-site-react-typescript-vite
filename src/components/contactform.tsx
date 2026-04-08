import { useEffect, useRef } from "react";
import FormInput from "./forminput";
import { EmailRegex } from "../constants/regex";
import { confirm } from './confirm';
import "../styles/textbox.css";

export default function ContactForm() 
{
    const nameRef = useRef("");
    const emailRef = useRef("");
    const messageRef = useRef("");
    
    useEffect(() => {
        console.log("contact form use effect");
        document.getElementById("trPhone")!.hidden = true;
    }, []); //The empty array means that this effect will only run once when the component is mounted(added to DOM). Equivalent to componentDidMount() in class components.

    const formSubmit = async (e: React.FormEvent) => {
        
        e.preventDefault();
        let contactFormSubmitBtn = document.getElementById("contactFormSubmitBtn") as HTMLButtonElement;
        contactFormSubmitBtn.disabled = true;
        let nameElement = document.getElementById("contactName") as HTMLInputElement;
        let emailElement = document.getElementById("contactEmail") as HTMLInputElement;
        let messageElement = document.getElementById("contactMessage") as HTMLInputElement;

        nameRef.current = nameElement.value;
        emailRef.current = emailElement.value;
        messageRef.current = messageElement.value;

        await sendForm(nameElement, emailElement, messageElement);
    }

    const sendForm = async (nameElement: HTMLInputElement, emailElement: HTMLInputElement, messageElement: HTMLInputElement) => {

        let contactPhone = document.getElementById("contactPhone") as HTMLInputElement;
        if (contactPhone.value.length === 0) 
        {
            let contactFormSubmitBtn = document.getElementById("contactFormSubmitBtn") as HTMLButtonElement;
            
            if (isValid(nameRef.current, 100) && isValidEmail(emailRef.current) && isValid(messageRef.current, 1000)) 
            {
                let form = document.getElementById("contactForm") as HTMLFormElement;
                let formData = new FormData(form);

                let response = await fetch("/", {
                    method: "POST",
                    body: formData
                });

                let confirmMessage: string = "";
                if (response.ok) 
                {
                    nameElement.value = "";
                    emailElement.value = "";
                    messageElement.value = "";

                    confirmMessage = "Message sent!";
                }
                else confirmMessage = "Message could not be sent.";

                if (await confirm({ confirmationMessage: confirmMessage })) 
                {
                    contactFormSubmitBtn.disabled = false;
                }
            }
            else 
            {
                //if validation fails, reenable submit button so that user can correct inputs
                contactFormSubmitBtn.disabled = false;
            }
        }
    }
        
    return (
        <form id={"contactForm"} name={"contact"} onSubmit={formSubmit}>
            <table id={"contactTable"}>
                <tbody>
                    <tr>
                        <td>
                            <FormInput type="text" id="contactName" name="name" placeholder="Name" className="form-control" minLength={2} maxLength={100} required={true} hidden={false} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <FormInput type="email" id="contactEmail" name="email" placeholder="Email" className="form-control" minLength={2} maxLength={50} required={true} hidden={false} />
                        </td>
                    </tr>
                    <tr id={"trPhone"}>
                        <td>
                            <input type="tel" id="contactPhone" name="phone" placeholder="Phone" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <FormInput type="textarea" id="contactMessage" name="message" placeholder="Message" className="form-control" rows={5} cols={50} minLength={2} maxLength={1000} required={true} hidden={false} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button id="contactFormSubmitBtn" type="submit" className="btn btn-outline-secondary">Send</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <input type="hidden" name="form-name" value="contact" />
        </form>
    );
}

const isValid = (elem: string, maxLength: number): boolean => {
    
    let validName = false;

    if (elem.length > 2 || elem.length < maxLength) validName = true;

    return validName;
}

const isValidEmail = (email: string): boolean => {
    
    let validEmail = false;

    if (email.length > 0) 
    {
        validEmail = EmailRegex.test(email);
        //console.log("Valid email: " + validEmail);
    }

    let span = document.getElementById("spanInvalidEmail") as HTMLSpanElement;
    span.hidden = validEmail;

    return validEmail;
}