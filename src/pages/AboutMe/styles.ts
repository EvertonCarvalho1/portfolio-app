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
            margin: 0;
            line-height: 2.2rem;
            font-weight: normal;
            font-size: 16px;
            color: #FFF;
        }
    }
      
    }

    @media (max-width: 900px){
        padding: 20px;
        margin: 0 auto;
        background: #0a0a0c;
        border-radius: 8px;
        -webkit-box-shadow: 15px 13px 13px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 15px 13px 13px 0px rgba(0,0,0,0.75);
        box-shadow: 15px 13px 13px 0px rgba(0,0,0,0.75);

        
        .socialMedia{
            width: 100%;
            display: flex;
            flex-direction: row !important;
            align-items: center;
            justify-content: center;
            gap: 20px;
            div{
                margin-bottom: 0;
            }
            a{
                text-decoration: none;
                color: #FFB400;
                width: 50px;
                height: 50px;     
            }

        }  

        .aboutMecontainer{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 10px;
        .imgContainer{
            width: 100%;
            height: 100%;
            max-width: 300px;
            
            -webkit-box-shadow: 15px 13px 13px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 15px 13px 13px 0px rgba(0,0,0,0.75);
            box-shadow: 15px 13px 13px 0px rgba(0,0,0,0.75);
            border-radius: 8px !important;
            img{
                width: 100%;
                height: 100%;
                border-radius: 8px !important;
                z-index: 99999;
            }
        }
    
        .aboutMeDescription{
            width: 100%;
            padding: 10px 0;
            margin: 0;
            h1{
                text-align: center;
                font-size: 30px;
                line-height: 57px;
                font-weight: 700;
                color: #FFB400;
            }

            p{
                margin: 0;
                margin-top: 15px;
                line-height: 2.2rem;
                font-weight: normal;
                font-size: 13px;
                color: #FFF;
                text-align: center;
            }
        }
        
        }
    }
`;