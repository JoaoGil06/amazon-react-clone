import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: rgb(234, 237, 237);
    overflow-x: hidden;
  }

  button {
    cursor: pointer;
  }
`;
