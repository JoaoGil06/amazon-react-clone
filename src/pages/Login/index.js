import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { auth } from "../../firebase/";

import {
  Container,
  Logo,
  FormContainer,
  Form,
  Input,
  LoginButton,
  RegisterButton,
} from "./styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
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
