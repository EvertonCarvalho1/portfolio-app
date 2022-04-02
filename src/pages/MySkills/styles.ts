import styled from "styled-components";

export const Container = styled.section`
    .slick-track{
        display: flex;
        
    }

    .slick-slider{
        display: flex;
        flex-direction: column;
        position: relative;
        .slick-prev{
            position: absolute;
            left: 0;
            top: 50%;
            z-index: 9999;
        }
        .slick-next{
            position: absolute;
            right: 0;
            top: 50%;
        }

    }



    div{
       
        h1{
            font-size: 100px;
            color: red;
            text-align: center;
        }
    }

`;