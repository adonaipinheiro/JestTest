import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

const Header: React.FC = () => {
  const history = useHistory();

  const logOff = () => {
    history.push("/");
  }

  return (
    <Container>
      Header
      <button type="button" onClick={logOff}>Sair</button>
    </Container>
  );
}

export default Header;
