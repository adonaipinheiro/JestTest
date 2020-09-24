import { createGlobalStyle } from 'styled-components';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #4f545c;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
  button {
    cursor: pointer;
  }
  #root {
    margin: 0 auto;
  }
`;
