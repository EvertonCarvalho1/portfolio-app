import styled from "styled-components";

export const Container = styled.div`
    position: relative;

    .buttonSeeProjects{
            margin-top: 10px;
            width: 169px;
            height: 48px;
            border-radius:5px;
            border: none;
            background: #FFB400;
            color: #000000;
            letter-spacing: 0;
            transition:  0.3s;
            font-weight: 500;
            font-size: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            &:hover{
                background: #ba8400;
                color: #FFF; 
            }
        }

    > svg{
        position: absolute; 
        font-size: 200px;
        color: black;
        bottom: -215px;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    video {
        width: 110%;
        height: 1000px;
        object-fit: cover;
    } 

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 99.6%;
        background-color: rgba(0,0,0,.7);

    }

    .containerHome{
        margin-top: 80px;
        padding: 0 70px 0 20px;
        display: flex;
        position: absolute;
        width: 100%;
        top: 0;

        .containerText{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            align-items: center;
            margin: 225px auto ;
            text-align: center;
            width: 100%;
            max-width: 1156px;
            height: 425px;

        .homeTextContainer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #FFF;
            h1{
                font-size: 60px;
                font-weight: 400;
                text-align: center;
                span{
                    color: #FFB400;
                }
            }
            .homeDescription{
                margin: 16px 16px 0px;
                h1{
                    line-height: 2.2rem;
                    font-size: 17px;
                    font-weight: normal;
                }
            }

            h3{
                line-height: 24px;
                margin-top: 16px;
                text-align: center;
                color: #FFF;
            }
    }

    .welcomeText{
            h1{
                line-height: 2.2rem;
                font-size: 17px;
                color: #FFB400;
                font-weight: normal;
                margin: 16px 0px 0px 0px;
                } 
            }
        }
    }


    @media (max-width: 900px){

        video {
            width: 110%;
            height: 850px;
            object-fit: cover;
        } 

        .buttonSeeProjects{
            font-size: 13px !important;
        }

        .containerHome{
            display: flex;
            justify-content: center !important; 
            padding: 0;
            
            .socialMedia{
                display: none;
            }
        
            .containerText{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            align-items: center;
            margin: 200px auto 100px auto;
            text-align: center;
            width: 100%;
            max-width: 1156px;
            height: 425px;


            .homeTextContainer{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #FFF;
                h1{
                    font-size: 35px;
                    font-weight: 400;
                    text-align: center;
                    span{
                        color: #FFB400;
                    }
                }
                .homeDescription{
                    margin: 16px 16px 0px;
                    h1{
                        line-height: 2.2rem;
                        font-size: 13px;
                        font-weight: normal;
                        br{
                            display: none;
                        }
                    }
                }

                h3{
                    line-height: 24px;
                    margin-top: 16px;
                    text-align: center;
                    color: #FFF;
                }
    }

    .welcomeText{
            h1{
                line-height: 2.2rem;
                font-size: 13px;
                color: #FFB400;
                font-weight: normal;
                margin: 16px 0px 0px 0px;
                } 
            }
        }
    }

       
    }
`;




