import styled from 'styled-components';

export const Container = styled.div`
    margin: 0px 94.5px 200px;
    background: #1C1E22;
    
    border: 1.5px solid #26292D;
    border-radius: 8px;

    .aboutMecontainer{
        display: flex;
        padding: 24px;
        height: 453px;
            img{
                margin-right: 30px;
                border-radius: 8px;
            }
    }

    .aboutMeDescription{
        h1{
            font-size: 48px;
            line-height: 57px;
            font-weight: 500;
            color: #FFF;
        }

        p{
            margin: 32px 0 15px;
            font-size: 16px;
            line-height: 28px;
            color: #FFF;
            & + p{
                margin: 0 0 32px;
            }
        }

        .socialMedia{
            display: flex;
            align-items: center;
            a{
                text-decoration: none;
                color: #FFB400;     
                & + a{
                    margin-left: 25px;
                }
                svg{
                    font-size: 50px;
                    transition: 0.3s ease;

                    &:hover{
                        color: #FFF;
                        transform: scale(1.3);
                        -webkit-transform: scale(1.3);
                        -ms-transform: scale(1.3);
                    }
                }
            }

            span{
                position: relative;
                top: -5px;
                font-size: 35px;
                color: #FFF;
                margin-left: 24px;
                padding-bottom: 0px;
                font-weight: 500;
                border-bottom: 5px solid #FFB400;
            }
        }    
    }

`;