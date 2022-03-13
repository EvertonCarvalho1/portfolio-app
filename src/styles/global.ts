import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';


export default createGlobalStyle`

*{
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
}

body{
    background: #171718;
    -webkit-font-smoothing: antialiased;
}

body, input, button{
    font: 16px 'Roboto', sans-serif;
}
button{
    cursor: pointer;
}

`;