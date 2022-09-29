import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-items: center;
    margin: 150px 200px ;
    text-align: center;

    .homeTextContainer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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

            .lineTypeWriter{
                border-right: 2px solid #FFF;
                text-align: center;
                white-space: nowrap;
                overflow: hidden; transform: translateY(-20%);
            }

            .animTypeWriter{
                animation: typewriter 4s steps(40) 1s 1 normal both,
                blinkTextCursor 500ms steps(40) infinite normal;
            
            }

            @keyframes typewriter {
                from{
                    width: 0;
                }
                to{
                    width: 100%;
                }
            }

            @keyframes blinkTextCursor {
                from{
                    border-right-color:  #FFF;
                }
                to{
                    border-right-color:  transparent;
                }
            }

            h3{
                font-size: 20px;
                font-weight: 500;
                line-height: 24px;
                letter-spacing: 0.5px;
                margin-top: 16px;
                text-align: center;
                color: #FFF;
            }
    }

    .buttonContainer{
        width: 100%;
        margin-top: 32px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        .buttonSeeProjects{
            width: 169px;
            height: 48px;
            border-radius:5px;
            border: none;
            background: #FFB400;
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