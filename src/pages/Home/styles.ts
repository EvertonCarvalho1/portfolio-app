import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 128px 200px 306px;
    text-align: center;
    h1{
        font-size: 60px;
        line-height: 71px;
        font-weight: 700;
        text-align: center;
        letter-spacing: -0.5px;
        color: #FFF;
        margin: 16px 0;
        span{
            color: #FFB400;
        }
    }
    h3{
        font-size: 20px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0.5px;
        margin-top: 32px;
        text-align: center;
        color: #FFF;
    }

    .buttonContainer{
        width: 100%;
        margin-top: 32px;
        display: flex;
        justify-content: center;
        align-items: center;

        .buttonSeeProjects{
            width: 169px;
            height: 48px;
            border-radius:5px;
            border: none;
            background: #FFB400;
            margin-right:24px;
            font-weight: 500;
            color: #171718;
            //transition: background 0.3s;
            transition:  0.3s;
            &:hover{
                background: #ba8400;
                color: #FFF;
                
            }
        }

        .buttonDownload{
            width: 169px;
            height: 48px;
            border: 1px solid #FFF;
            color: #FFF;
            border-radius: 5px;
            background: transparent;
            display: flex;
            justify-content: center;
            align-items: center;   
            svg{
                margin-right: 6px;
                width: 20px;
            }
            transition:  0.3s;
            &:hover{
                border: 1px solid #FFB400;
                color: #FFB400;

            }
            
        }

    }

`;