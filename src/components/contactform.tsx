import React from 'react';
import FormInput from "./forminput";
import {EmailRegex} from "../constants/regex";
import { confirm } from './confirm';
import "../styles/textbox.css";

interface ContactFormState 
{
    name: string;
    email: string;
    message: string;
}

export default class ContactForm extends React.Component<{}, ContactFormState>
{  
    state: ContactFormState = {
        name: "", 
        email: "", 
        message: ""
    };

    render()
    {
        return (
        <form id={"contactForm"} name={"contact"} onSubmit={this.formSubmit}>
            <table id={"contactTable"}>                
            <tbody>
                <tr>
                    <td>
                        <FormInput type="text" id="contactName" name="name" placeholder="Name" className="form-control" minLength={2} maxLength={100} required={true} hidden={false}/>
                    </td>                                       
                </tr>
                <tr>
                    <td>
                        <FormInput type="email" id="contactEmail" name="email" placeholder="Email" className="form-control" minLength={2} maxLength={50} required={true} hidden={false}/>
                    </td> 
                </tr>
                <tr id={"trPhone"}>
                    <td>
                        <input type="tel" id="contactPhone" name="phone" placeholder="Phone" className="form-control"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <FormInput type="textarea" id="contactMessage" name="message" placeholder="Message" className="form-control" rows={5} cols={50} minLength={2} maxLength={1000} required={true} hidden={false}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button id="contactFormSubmitBtn" type="submit" className="btn btn-outline-secondary">Send</button>
                    </td>
                </tr>
            </tbody>                             
            </table>       
            <input type="hidden" name="form-name" value="contact"/>
        </form>);
    }

    componentDidMount()
    {
        /* const contactEmail = document.getElementById("contactEmail") as HTMLInputElement;
         contactEmail.addEventListener("input", () => {
            let span = document.getElementById("spanInvalidEmail") as HTMLSpanElement;
            span.hidden = this.isValidEmail(contactEmail.value);
        }); */
        /* contactEmail.addEventListener("focusout", () => {
            let span = document.getElementById("spanInvalidEmail") as HTMLSpanElement;
            span.hidden = this.isValidEmail(contactEmail.value);
        }); */
        
        document.getElementById("trPhone")!.hidden = true;
    }

    formSubmit = async (e: React.FormEvent) => 
    {
        e.preventDefault();
        let contactFormSubmitBtn = document.getElementById("contactFormSubmitBtn") as HTMLButtonElement;
        contactFormSubmitBtn.disabled = true;
        let nameElement = document.getElementById("contactName") as HTMLInputElement;
        let emailElement = document.getElementById("contactEmail") as HTMLInputElement;
        let messageElement = document.getElementById("contactMessage") as HTMLInputElement;

        //this.setState({nameInput: name, emailInput: email, messageInput: message});
        //await this.setStateAndSubmitForm(name, email, message);

        //use callback in setState() to wait for state to update before proceeding
        this.setState({name: nameElement.value, email: emailElement.value, message: messageElement.value}, async () => {
            await this.sendForm(nameElement, emailElement, messageElement);
        });     
    }

    sendForm = async (nameElement: HTMLInputElement, emailElement: HTMLInputElement, messageElement: HTMLInputElement) => {
        
        /* console.log("State name: " + this.state.name);
        console.log("State email: " + this.state.email);
        console.log("State message: " + this.state.message); */

        let contactPhone = document.getElementById("contactPhone") as HTMLInputElement;
        if(contactPhone.value.length === 0)
        {
            let contactFormSubmitBtn = document.getElementById("contactFormSubmitBtn") as HTMLButtonElement;
            if(this.isValid(this.state.name, 100) && this.isValidEmail(this.state.email) && this.isValid(this.state.message, 1000))
            {
                let form = document.getElementById("contactForm") as HTMLFormElement;
                let formData = new FormData(form);

                /* for (const value of formData.values()) 
                {
                    console.log(value);
                } */
                    
                let response = await fetch("/", {
                    method: "POST",
                    body: formData
                });

                let confirmMessage: string = "";
                if(response.ok) 
                {
                    nameElement.value = "";
                    emailElement.value = "";
                    messageElement.value = "";

                    confirmMessage = "Message sent!";
                }
                else confirmMessage = "Message could not be sent.";
                
                if(await confirm({confirmationMessage: confirmMessage})) 
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
        /* console.log("State name: " + this.state.name);
        console.log("State email: " + this.state.email);
        console.log("State message: " + this.state.message); */
    }

    isValid = (elem: string, maxLength: number) : boolean =>
    {
        let validName = false;

        if(elem.length > 2 || elem.length < maxLength) validName = true;        

        return validName;
    }

    isValidEmail = (email: string): boolean =>
    {            
        let validEmail = false;
        
        if(email.length > 0)
        {
            validEmail = EmailRegex.test(email);
            //console.log("Valid email: " + validEmail);
        }

        let span = document.getElementById("spanInvalidEmail") as HTMLSpanElement;      
        span.hidden = validEmail;

        return validEmail;
    }
}