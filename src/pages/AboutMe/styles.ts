import styled from 'styled-components';

export const Container = styled.div`
    //margin: 0px 94.5px 200px;
    background: #0a0a0c;
    border-radius: 8px;
    margin: 0 auto;
    -webkit-box-shadow: 15px 13px 13px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 15px 13px 13px 0px rgba(0,0,0,0.75);
    box-shadow: 15px 13px 13px 0px rgba(0,0,0,0.75);
    //width: 300px;
    .aboutMecontainer{
        display: flex;
        padding: 24px;
        height: 453px;
        position: relative;
       

        .imgContainer{
            margin-right: 30px;
            img{
                border-radius: 8px;
            }

        }
   

    .aboutMeDescription{
        padding: 0px 200px 0px 0px;
        margin-left: 30px;
        h1{
            font-size: 48px;
            line-height: 57px;
            font-weight: 600;
            color: #FFF;
            letter-spacing: 2px;
        }

        p{
            margin: 40px 0 15px;
            font-size: 17px;
            color: #FFF;
            line-height: 2.2rem;
            font-family: "Roboto", serif;
            font-weight: normal;
            & + p{
                margin: 0 0 32px;
            }
        }
    }

    .socialMedia{
            display: flex;
            align-items: center;
            transform: rotate(-90deg);
            position: absolute;
            top: 230px;
            left: 950px;
            a{
                margin-bottom: -50px;
                transform: rotate(-270deg);
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

        }  
        
        
    }

`;