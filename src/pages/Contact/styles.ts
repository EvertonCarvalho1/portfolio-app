import styled, { keyframes } from "styled-components";

import { shade } from 'polished';

export const Container = styled.div`
    width: 100%;
    max-width: 447px;
    margin: 0 auto;
    display: flex;
    background-color: #0a0a0c;
    border-radius: 8px;
    padding: 24px;
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        label{
            margin-bottom: 8px;
            color: #FFB400;
        }
        input[type=text], 
        input[type=email]{
            height: 70px;
            border: 0;
            border-radius: 5px;
            color: #3a3a3a;
            margin-bottom: 24px;
            background-color: #161617;
        }
    }
`;
