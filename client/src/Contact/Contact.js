import React from "react";
import Addresss from "../Landing/Addresss";
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

//email js import keep please
import emailjs from "@emailjs/browser";

const Contact = () => {
  //this is for emailjs do not delete --akiko

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "", //enter the service ID
        "", //enter template ID after you have made a template
        form.current,
        "" //here enter your public key you can find on your user profile (click your name at right hand upper corner)
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
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
            <Input type="text" name="" placeholder="full name" />
            <EmailInput type="email" name="" placeholder="Email" />
            <TextArea
              name="message"
              placeholder="Please add message here... :)"
            />
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
  );
};

export default Contact;
