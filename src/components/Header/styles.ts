import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #36393f;
  width: 100%;
  height: 40px;
  position: sticky;
  top: 0;
  padding: 0 10px;

  button {
    background: transparent;
    border: 0;
    text-decoration: underline;
  }
`;
