import React from "react";
import Addresss from "../Landing/Address/Addresss";
import {
  Button,
  Confirm,
  Disclaimer,
  EmailInput,
  Form,
  FormContainer,
  FormInput,
  H2,
  Info,
  Input,
  Label,
  P,
  TextArea,
} from "./ContactStyles";

const Contact = () => {
  return (
    <>
      <FormContainer>
        <H2>Get in Touch!</H2>
        <Form
          action="https://formsubmit.co/heidiskin16@gmail.com"
          target="_blank"
          method="POST"
        >
          <Info>
            <Label>Name: </Label>
            <Label>Email:</Label>
            <Label>Message: </Label>
          </Info>
          <FormInput>
            <Input type="text" name="name" />
            <EmailInput type="email" name="email" />
            <TextArea name="message" />
            <Confirm>
              <Disclaimer>
                <P>* Service By Appointment Only</P>
              </Disclaimer>
              <Button type="submit" value="Submit">
                Submit
              </Button>
            </Confirm>
          </FormInput>
        </Form>
      </FormContainer>
      <Addresss />
    </>
  );
};

export default Contact;
