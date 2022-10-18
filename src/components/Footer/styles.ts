import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    padding: 25px;
    background-color: #000000;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        line-height: 2.2rem;
        font-weight: normal;
        font-size: 16px;
        color: #FFF;
        margin-top: 10px;
        text-align:center ;
    }
    
    .socialMedia{
            display: flex;
    
            align-items: center;
            justify-content: center;

            gap: 20px;

            a{
                text-decoration: none;
                color: #FFB400;
                width: 50px;
                height: 50px;
               
                svg{
                    transition: 0.3s ease;
                    width: 50px;
                    height: 50px;

                    &:hover{
                        color: #FFF;
                        transform: scale(1.1);
                        -webkit-transform: scale(1.1);
                        -ms-transform: scale(1.1);
                    }
                }
            }

        }  

`;