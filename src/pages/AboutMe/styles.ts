import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px;
    margin: 0 auto;
    background: #0a0a0c;
    border-radius: 8px;
    -webkit-box-shadow: 15px 13px 13px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 15px 13px 13px 0px rgba(0,0,0,0.75);
    box-shadow: 15px 13px 13px 0px rgba(0,0,0,0.75);

    .aboutMecontainer{
        display: flex;
        padding: 24px;
        .imgContainer{
            width: 326px;
            height: 405px;
            -webkit-box-shadow: 15px 13px 13px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 15px 13px 13px 0px rgba(0,0,0,0.75);
            box-shadow: 15px 13px 13px 0px rgba(0,0,0,0.75);
            border-radius: 8px !important;
            img{
                width: 326px;
                border-radius: 8px !important;
                z-index: 99999;
            }
        }
   
    .aboutMeDescription{
        margin-left: 30px;
        padding: 0 30px 0 0;
        h1{
            font-size: 35px;
            line-height: 57px;
            font-weight: 700;
            color: #FFB400;
        }

        p{
            margin: 40px 0 15px;
            line-height: 2.2rem;
            font-family: "Montserrat", Sans-serif;;
            font-weight: normal;
            font-size: 16px;
            color: #FFF;
            & + p{
                margin: 0 0 32px;
            }
        }
    }
      
    }
`;