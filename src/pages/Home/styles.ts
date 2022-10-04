import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    padding: 0 70px 0 20px;

    > svg{
        position: absolute; 
        font-size: 200px;
        color: #000000;
        z-index: 9999;
        bottom: -216px;
        left: 50%;
        transform: translate(-50%, -50%);
    }
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
                    font-family: "Roboto", serif;
                    font-size: 20px;
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
            font-family: "Roboto", serif;
            font-size: 20px;
            color: #FFB400;
            font-weight: normal;
            margin: 16px 0px 0px 0px;
            } 
        }

    .containerButton {
        margin-top: 5px;
        .buttonSeeProjects{
            width: 169px;
            height: 48px;
            border-radius:5px;
            border: none;
            background: #FFB400;
            color: #000000;
            transition:  0.3s;
            font-weight: 500;
            font-size: 16px;
            &:hover{
                background: #ba8400;
                color: #FFF; 
            }
        }
          width: 182px;
          height: 62px;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        .animated-border {
          width: 200px;
          height: 50px;
          background:  #FFB400;
          position: absolute;
          animation: rotate 3s infinite ease-in-out;
        }
        .corner {
          width: 180px;
          height: 60px;
          background: #000;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @keyframes rotate {
          100% {
            transform: rotate(360deg);
          }
        }
    
    }
    }
   

 
`;




