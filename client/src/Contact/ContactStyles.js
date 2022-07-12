import styled from "styled-components";

export const FormContainer = styled.div`
  width: min(100% - 2rem, 960px);
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Form = styled.form`
  display: flex;
  flex-flow: column;
`;
export const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  background-color: var(--pink);
  border-radius: 20px 20px 0px 0px;
  padding-top: 50px;
`;
export const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const InfoLine = styled.div`
  width: 85%;
  display: flex;
  margin: 25px 0;
`;
export const H2 = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  align-self: center;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Label = styled.label`
  width: 88px;
  height: 64px;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
`;
export const Input = styled.input`
  width: 30%;
  height: 64px;
  margin-left: 50px;
  background-color: var(--white);
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 35px;
`;
export const EmailInput = styled.input`
  width: 60%;
  height: 64px;
  margin-left: 50px;
  background-color: var(--white);
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 35px;
`;
export const TextArea = styled.textarea`
  width: 85%;
  height: 271px;
  margin-left: 50px;
  background-color: var(--white);
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 35px;
`;
export const Confirm = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 50px 0px;
`;
export const Disclaimer = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
`;
export const Button = styled.button`
  padding: 15px;
  background-color: var(--green);
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  text-align: center;
  color: var(--white);
`;
export const P = styled.p`
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
`;
