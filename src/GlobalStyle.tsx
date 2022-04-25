import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root{
    --font-color-black: #000000;
    --bg-color-grey: #f4f4f4;
    --bg-color-dark-grey: #4d5061;
    --bg-color-grey-arrow: #3b3c47;
    --font-color-red:#cc0000;
  }

  body {
    margin:0;
    font-family: 'Noticia Text', serif;
    background: linear-gradient(
    to right,#eaeaea,#dbdbdb,#f2f2f2,
    );
  }



.paginationButtons {
  width: 80%;
  height: 40px;
  list-style: none;
  display: flex;
  justify-content: center;
}

.paginationButtons a {
  padding: 10px;
  margin: 8px;
  border-radius: 5px;
  border: 1px solid var(--bg-color-dark-grey);
  color: black;
  cursor: pointer;
}

.paginationButtons a:hover {
  color: white;
  background-color: var(--bg-color-dark-grey);
}

.paginationActive a {
  color: white;
  background-color: var(--bg-color-dark-grey);
}

.paginationDisabled a {
  display:none;
}
`;

export default GlobalStyle;
