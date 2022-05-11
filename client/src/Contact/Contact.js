import React, { useRef }  from 'react';
import emailjs from '@emailjs/browser';
import Addresss from '../Landing/Address/Addresss';
import { 
    Button, Confirm, Disclaimer, EmailInput, 
    Form, FormContainer, FormInput, H2, Info, 
    Input, Label, P, TextArea 
} 
from './ContactStyles';

const Contact = () => {
    // const service_id = process.env.SERVICE_ID
    // const template_id = process.env.TEMPLATE_ID
    // const public_key = process.env.PUBLIC_KEY
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_grefs4n", "template_bejxi1n", e.target, "Ufc9dff3XBSBnpYcl")
        // emailjs.sendForm("service_id", "template_id", e.target, "public_key")
        .then((result) => {
            console.log(result);
        }, (error) => {
            console.log(error);
        });
        e.target.reset();
    }
    return (
        <>
        <FormContainer>
            <H2>Get in Touch!</H2>
            <Form ref={form} onSubmit={sendEmail}>
                <Info> 
                    <Label>Name: </Label>
                    <Label>Email:</Label>
                    <Label>Message: </Label>
                </Info>
                <FormInput>
                    <Input type="text" name="user_name"/>
                    <EmailInput type="email" name="user_email"/>
                    <TextArea name="message"/>
                    <Confirm>
                        <Disclaimer>
                            <P>* Service By Appointment Only</P>
                        </Disclaimer>
                        <Button type="submit" value="Send">
                            Submit
                        </Button>
                    </Confirm>
                </FormInput>
            </Form>
        </FormContainer>
        <Addresss />
        </>
    )
}

export default Contact
