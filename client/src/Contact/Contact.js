// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser'
import Addresss from '../Landing/Addresss';
import { 
    Button, Confirm, Disclaimer, EmailInput, 
    Form, FormContainer, FormInput, H2, Info, 
    Input, Label, P, TextArea 
} from './ContactStyles';

const Contact = () => {
    // const form = useRef();
    // const sendEmail = (e) => {
    //     e.preventDefault();

        
    // }
    return (
        <>
        <FormContainer>
            <H2>Get in Touch!</H2>
            <Form>
                <Info> 
                    <Label>Name: </Label>
                    <Label>Email:</Label>
                    <Label>Message: </Label>
                </Info>
                <FormInput>
                    <Input/>
                    <EmailInput/>
                    <TextArea/>
                    <Confirm>
                        <Disclaimer>
                            <P>* Service By Appointment Only</P>
                        </Disclaimer>
                        <Button>
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
