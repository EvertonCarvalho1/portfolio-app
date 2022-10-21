import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    padding: 0 70px 0 20px;


    .containerHome{
        display: flex;
      
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

        padding: 0 20px 0 20px;

        .buttonSeeProjects{
            font-size: 13px !important;
        }

        .containerHome{
            display: flex;
            justify-content: center !important; 

            .socialMedia{
                display: none;
            }
        
            .containerText{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            align-items: center;
            margin: 200px auto 70px auto;
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




