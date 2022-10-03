import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
    letter-spacing: 1px;
}

body{
    background: #000000;
    -webkit-font-smoothing: antialiased;
}

body, input, button{
    font: 16px "Montserrat", Sans-serif;;
}
button{
    cursor: pointer;
}

`;