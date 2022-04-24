import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {   background: linear-gradient(
    to right,
    #eaeaea,
    #dbdbdb,
    #f2f2f2,
)}

`;

export default GlobalStyle;
