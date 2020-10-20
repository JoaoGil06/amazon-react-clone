import React, { useState } from "react";

import {
  Container,
  Logo,
  FormContainer,
  Form,
  Input,
  LoginButton,
  RegisterButton,
} from "./styles";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
  };

  const register = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Link to="/">
        <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
      </Link>
      <FormContainer>
        <h1>Sign In</h1>

        <Form>
          <h5>E-mail</h5>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <LoginButton type="submit" onClick={signIn}>
            Sign In
          </LoginButton>
        </Form>

        <RegisterButton onClick={register}>
          Create your Amazon Account
        </RegisterButton>
      </FormContainer>
    </Container>
  );
};

export default Login;
