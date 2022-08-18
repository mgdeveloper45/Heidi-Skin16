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
  InfoLine,
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
          method="POST">
          <FormInput>
            <Info>
              <InfoLine>
                <Label>Name: </Label>
                <Input type="text" name="name" />
              </InfoLine>
              <InfoLine>
                <Label>Email:</Label>
                <EmailInput type="email" name="email" />
              </InfoLine>
              <InfoLine>
                <Label>Message: </Label>
                <TextArea name="message" />
              </InfoLine>
            </Info>
            <Confirm>
              <Disclaimer>
                <P>* Service By Appointment Only</P>
                <Button type="submit" value="Submit">
                  Submit
                </Button>
              </Disclaimer>
            </Confirm>
          </FormInput>
        </Form>
      </FormContainer>
      <Addresss />
    </>
  );
};

export default Contact;
