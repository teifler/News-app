import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root{
    --bg-color-grey: #f4f4f4;
  }

  body {
    font-family: 'Noticia Text', serif;
    background: linear-gradient(
    to right,
    #eaeaea,
    #dbdbdb,
    #f2f2f2,
)}

`;

export default GlobalStyle;
