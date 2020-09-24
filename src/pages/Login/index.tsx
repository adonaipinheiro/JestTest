import React, { FormEvent, useState } from 'react';
import {useHistory} from 'react-router-dom';

import { 
  Container, 
  Content, 
  Form, 
  Title, 
  Loader } 
from './styles';

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const history = useHistory();

  const loginSubmit = (event: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();

    history.push('/dashboard');
  }

  return (
    <Container>
      <Title>Login</Title>
      <Content>
        <Form onSubmit={loginSubmit}>
          <label>E-mail</label>
          <input type="email" placeholder="Digite seu e-mail" />
          <label>Senha</label>
          <input type="password" placeholder="Digite sua senha" />
          <button type="submit" disabled={loading}>
            {!loading ? "Entrar" : <Loader />}
          </button>
        </Form>
      </Content>
    </Container>
  );
}

export default Login;