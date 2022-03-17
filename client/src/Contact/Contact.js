import React from 'react';
import Addresss from '../Landing/Addresss';
import { 
    Button, Confirm, Disclaimer, Email, Form, 
    FormContainer, H2, Input, Label, 
    Name, P, Text, TextArea 
} from './ContactStyles';

const Contact = () => {
    return (
        <>
        <FormContainer>
            <Form>
                <H2>Get in Touch!</H2> 
                <Name> 
                    <Label>Name: </Label>
                    <Input/>
                </Name>
                <Email>
                    <Label>Email:</Label>
                    <Input/>
                </Email> 
                <Text>
                    <Label>Message: </Label>
                    <TextArea/>   
                </Text>
                <Confirm>
                    <Disclaimer>
                        <P>*Service By Appointment Only</P>
                    </Disclaimer>
                    <Button>
                        Submit
                    </Button>
                </Confirm>
            </Form>
        </FormContainer>
        <Addresss />
        </>
    )
}

export default Contact
