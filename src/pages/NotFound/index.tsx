import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const NotFound = () => {
  return (
    <Container>
      <span>#404</span>
      <Link to="/">Voltar para o início</Link>
    </Container>
  );
}

export default NotFound;