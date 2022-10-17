import styled, { keyframes } from "styled-components";

import { shade } from 'polished';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .title{
        h1{
            font-size: 35px;
            line-height: 57px;
            font-weight: 700;
            color: #FFB400;
        }
        margin-bottom: 50px;
    }

    .content{
        width: 100%;
        max-width: 447px;
        margin: 0 auto;
        display: flex;
        background-color: #0a0a0c;
        border-radius: 8px;
        padding: 24px;
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        label{
            margin-bottom: 8px;
            color: #FFB400;
        }
        input[type=text], 
        input[type=email]{
            height: 70px;
            border: 0;
            border-radius: 5px;
            color: #3a3a3a;
            margin-bottom: 24px;
            background-color: #161617;
            padding-left: 20px;
            color: #fff;
        }

        textarea{
            width: 100%;
            height: 150px;
            padding: 12px 20px;
            box-sizing: border-box;
            border: 0;
            border-radius: 4px;
            background-color: #f8f8f8;
            font-size: 16px;
            resize: none;
            background-color: #161617;
            margin-bottom: 24px;
            color: #fff;
            font: 16px "Montserrat", sans-serif;
        }
    }
    }
 
`;

export const ContainerButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: 80px;
    .containerButton {
        input{
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
            cursor: pointer;
            &:hover{
                background: #ba8400;
                color: #FFF; 
            }
        }
          width: 185px;
          height: 65px;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          border-radius: 5px;
        }
        .animated-border {
          width: 200px;
          height: 50px;
          background:  #FFB400;
          position: absolute;
          animation: rotate 3s infinite ease-in-out;
          border-radius: 5px;
        }
        .corner {
          width: 183px;
          height: 63px;
          background: #0a0a0c;
          border-radius: 5px;
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
