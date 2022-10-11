import styled, { css } from "styled-components";

type Props = {
    repoId: number;
}

export const Container = styled.div<Props>`



        width: 100%;
        background: #0a0a0c;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: stretch;
        padding: 40px;
        border-radius: 8px;
        -webkit-box-shadow: 15px 13px 13px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 15px 13px 13px 0px rgba(0,0,0,0.75);
        box-shadow: 15px 13px 13px 0px rgba(0,0,0,0.75);
        h1{
            font-size: 20px;
            line-height: 57px;
            font-weight: 700;
            color: #FFB400; 
        }

        .projectDescription{
            width: 100%;
        }

        .article{
            width: 100%;
            p{
                width: 100%;
                line-height: 2.2rem;
                font-weight: normal;
                font-size: 16px;
                color: #FFF;
            }
        }
        .img1{
            margin-right: 40px;

            ${props => props.repoId === 2
        ?
        css`
                width: 390px;
                height: 224px;
                display: flex;
                justify-content: center;
                img{
                    width: 110px;
                    height: 100%;
                }
            `
        :
        css`
            img{
                width: 280px;
                height: 100%;
            }
        `
    }
           
        }

        .containerFooter{
            display: flex;
            justify-content: flex-end;
            margin-top: 30px;
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
`;