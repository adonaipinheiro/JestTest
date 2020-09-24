import React from 'react';

import { Container, Loader } from './styles';

const LoaderPage = () => {
  return (
    <Container>
      <Loader />
      <span>Carregando...</span>
    </Container>
  );
}

export default LoaderPage;