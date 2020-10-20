import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  margin-top: 20px;
  margin-bottom: 20px;
  object-fit: contain;
  width: 100px;
  margin-right: auto;
  margin-left: auto;
`;

export const FormContainer = styled.div`
  width: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 20px;

  > h1 {
    font-weight: 500;
    margin-bottom: 20px;
  }
`;

export const Form = styled.form`
  > h5 {
    margin-bottom: 5px;
  }
`;

export const Input = styled.input`
  height: 30px;
  margin-bottom: 10px;
  background: #fff;
  width: 98%;
  padding: 5px;
`;

export const LoginButton = styled.button`
  width: 100%;
  background: #f0c14b;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
  padding: 5px;
`;

export const RegisterButton = styled.button`
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid darkgray;
  margin-top: 10px;
`;
