import styled from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    justify-content: center;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    height: 1192px;
    width: 1597px;
    background: rgba(216, 155, 166, 0.75);
    border-radius: 20px 20px 0px 0px;
`;
export const H2 = styled.h2`
    width: 551px;
    height: 98px;
    font-family: Helvetica Neue;
    font-style: normal;
    font-weight: normal;
    font-size: 60px;
    align-self: center;
`;
export const Name = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 60vw;
`;
export const Email = styled.div`
    display: flex;  
    justify-content: space-evenly;
    width: 60vw;
`;
export const Text = styled.div`
    display: flex;  
    justify-content: space-evenly;
    width: 90vw;
`;
export const Label = styled.label`
    width: 88px;
    height: 60px;
    font-family: Helvetica Neue;
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
`;
export const Input = styled.input`
    width: 573px;
    height: 64px;
    background: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 10px;
`;
export const TextArea = styled.textarea`
    width: 1126px;
    height: 271px;     
    background-color: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 10px;
`;
export const Confirm = styled.div`
    align-self: center;
    display: flex;
    justify-content: space-evenly;
    width: 70vw;
`;
export const Disclaimer = styled.div`
    width: 410px;
    height: 42px;
`;
export const Submit = styled.div``;
export const Button = styled.button`
    width: 307px;
    height: 98px;
    background: rgba(13, 104, 120, 0.75);
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
    border-radius: 20px;

    font-family: Helvetica Neue;
    font-style: normal;
    font-weight: bold;
    font-size: 55px;
    text-align: center;
    color: #FFFFFF;
`;
export const P = styled.p`
    text-align: center;
    font-family: Helvetica Neue;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
`;