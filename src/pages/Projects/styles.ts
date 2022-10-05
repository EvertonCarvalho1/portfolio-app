import styled from "styled-components";

export const Container = styled.header`
    .component{
        width: 100%;
        background-color: green;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 40px;
        .img1{
            width: 200px;
            height: 200px;
            background-color: red;
            margin-right: 40px;
        }

        .containerFooter{
            display: flex;
            justify-content: space-between;
           .img2{
                width: 100px;
                height: 50px;
                background-color: red;
            } 
           .button{
                width: 100px;
                height: 50px;
                background-color: red;
            } 
        }


    }
`;