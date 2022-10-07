import styled from "styled-components";

export const Container = styled.div`
    .containerButton {
        margin-top: 5px;
        .buttonSeeProjects{
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

`;




