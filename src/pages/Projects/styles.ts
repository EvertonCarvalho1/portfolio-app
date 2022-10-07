import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    max-width: 1156px;
    background-color: #0f0f0f;
    position: relative;
    > svg{
            position: absolute; 
            font-size: 200px;
            color: #161617;
            top: -85px;
            left: 50%;
            transform: translate(-50%, -50%);
        }

    >h1{
        font-size: 35px;
        color: #FFB400;
        text-align: center;
        font-weight: 700;
        margin-bottom: 100px;
    }

    .projectsContainer{
        margin-bottom: 100px;
    }
`;