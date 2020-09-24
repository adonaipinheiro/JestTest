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

  span {
    font-size: 16px;
    font-weight: 400;
    color: #FFF;
  }
`;

export const Loader = styled(ReactLoader).attrs({
  type: "Circles",
  color: "#0099cc",
  height: 40,
  width: 40,
  timeout: 60000,
})`
  margin-bottom: 5px;
`;