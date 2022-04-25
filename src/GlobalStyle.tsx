import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root{
    --font-color-black: #000000;
    --bg-color-grey: #f4f4f4;
    --bg-color-grey-dropdown: #4d5061;
    --bg-color-grey-arrow: #3b3c47;
    --font-color-red:#cc0000;
  }

  body {
    font-family: 'Noticia Text', serif;
    background: linear-gradient(
    to right,#eaeaea,#dbdbdb,#f2f2f2,
    );
  }

`;

export default GlobalStyle;
