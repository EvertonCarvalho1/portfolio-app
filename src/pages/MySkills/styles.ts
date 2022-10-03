import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title{
        h1{
            font-size: 35px;
            line-height: 57px;
            font-weight: 700;
            color: #FFB400;
        }
    }

    .containerSkills{
        width: 100%;
        max-width: 1156px;
        padding: 100px 0px;
        display: flex;
        justify-content: space-between;
    }

    .icon{
        width: 50px;
        height: 50px;
        background-color: red;
    }

    .cardSkills{
        width: 100%;
        max-width: 300px;
        height: 390px;
        padding: 50px 20px 10px;
        margin: 0px 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;  align-items: center;
        background-color: #0a0a0c;
        border-radius: 8px;
        -webkit-box-shadow: 15px 13px 13px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 15px 13px 13px 0px rgba(0,0,0,0.75);
        box-shadow: 15px 13px 13px 0px rgba(0,0,0,0.75);
    }
`;

//#0f0f0f