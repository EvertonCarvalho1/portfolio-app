import styled from "styled-components";

export const ContainerHeader = styled.header`

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:18px;
    border-bottom:1px solid #26292D;

    a{
   
        text-decoration: none;
        h1{
            letter-spacing: -0.5px;
            font-size: 24px;
            color: #FFB400;
            font-weight:700;
          
        }
    }

    nav{
        .aNav{
            height: 19px;
            position: relative;
            font-size: 16px;
            color: #FFF;
            font-weight: 500;
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
        }

        .aNav:hover::after{
            transform: scale(1, 1);
        }
    }

`;