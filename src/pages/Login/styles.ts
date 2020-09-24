import styled from 'styled-components';
import ReactLoader from 'react-loader-spinner';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: #FFF;
`;

export const Content = styled.div`
  background: #FFF;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
  width: 250px;

  @media screen and (max-width: 360px) {
    width: 90%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    color: #1a1a1a;
    margin-bottom: 2.5px;
  }

  input {
    padding: 5px;
    border: 0.5px solid #bfbfbf;
    margin-bottom: 10px;
    font-size: 14px;
    transition: border 0.2s;

    &:focus {
      border: 2.5px solid #0099cc;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0099cc;
    border: 0;
    color: #FFF;
    font-weight: 400;
    transition: background 0.2s;

    &:hover {
      background: #0086b3;
    }

    &:disabled {
      opacity: 0.65;
    }
  }

  input, button {
    border-radius: 4px;
    height: 30px;
  }
`;

export const Loader = styled(ReactLoader).attrs({
  type: "Circles",
  color: "#FFF",
  height: 20,
  width: 20,
  timeout: 60000,
})`
  margin-top: 4px;
`;