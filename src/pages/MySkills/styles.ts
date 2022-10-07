import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
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
    }

    .containerSkills{
        width: 100%;
        max-width: 1156px;
        padding: 100px 0px;
        display: flex;
        justify-content: space-between;
        h1{
            font-size: 20px;
            font-weight: 700;
            color: #FFB400;
            margin-bottom: 15px;
        } 
        
        ul{
            list-style: none;
            color: #FFF;
            li{
                margin-bottom: 10px;
                font-size: 16px;
                text-align: center;
            }
        }
    }

    .icon{
        text-decoration: none;
        color: #FFB400;
        width: 100px;
        height: 100px;  
        margin-bottom: 20px;
            svg{
                transition: 0.3s ease;
                width: 100px;
                height: 100px;

                &:hover{
                    color: #FFF;
                    transform: scale(1.1);
                    -webkit-transform: scale(1.1);
                    -ms-transform: scale(1.1);
                }
            }
        }      

    .cardSkills{
        width: 100%;
        max-width: 300px;
        height: 390px;
        padding: 20px;
        margin: 0px 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;  
        align-items: center;
        background-color: #0a0a0c;
        border-radius: 8px;
        -webkit-box-shadow: 15px 13px 13px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 15px 13px 13px 0px rgba(0,0,0,0.75);
        box-shadow: 15px 13px 13px 0px rgba(0,0,0,0.75);
    }
`;
