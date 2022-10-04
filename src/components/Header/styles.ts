import styled from "styled-components";

export const ContainerHeader = styled.header`
     border-bottom:1px solid #171718;
     width: 100%;
     height: 131px;
     position: fixed;
     background: #000000;
     z-index: 999;
     user-select: none;

    .container{
        width: 100%;
        max-width: 1156px;
        height: 130px;
        padding:18px;
        margin: 0 auto;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    a{
        cursor: pointer;
        text-decoration: none;
        img{
            width: 65px;
            height: 65px;
        }
    }

    nav{
        .aNav{
            height: 19px;
            position: relative;
            font-size: 16px;
            color: #FFF;
           
            cursor: pointer;
            & + .aNav{
                margin-left: 23px;
            }
        }

        .aNav::after{
            content: '';
            position: absolute;
            width: 100%;
            height: 0.1rem;
            left: 0;
            bottom: 0;
            background:  #FFB400;

            transform: scale(0, 1);
            transform-origin: 0% 100%;
            transition: transform 0.3s ease;
            margin-bottom: -3px;
        }

        .aNav:hover::after{
            transform: scale(1, 1);
        }
    }

`;