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
    background:#0f0f0f;
    -webkit-font-smoothing: antialiased;

    .MuiDrawer-paper{
        background-color: #000;
        width: 100%;
        border-bottom: 1px solid #FFB400;

        .drawerContent{
            .aNav{
                height: 19px;
                position: relative;
                font-size: 16px;
                color: #FFF;
                text-align: center;

                .MuiListItem-root {
                    justify-content: center;
                }
            }

            
        }


    }
}

body, input, button{
    font: 16px "Montserrat", sans-serif;
}
button{
    cursor: pointer;
}

`;