import styled from "styled-components";

export const Container = styled.div`
    .mobileHeader{
        height: 131px;
        
    }

.header{

    }
        @media (max-width: 900px){
        padding-left: 0;
    }


    .logo{
        img{
            width: 65px;
            height: 65px;
        }
        cursor: pointer;
    }

    .aNav{
            height: 19px;
            position: relative;
            font-size: 16px;
            color: #FFF;
           
            cursor: pointer;
            & + .aNav{
                margin-left: 23px;
            }
        }

        .aNav::after{
            content: '';
            position: absolute;
            width: 100%;
            height: 0.1rem;
            left: 0;
            bottom: 0;
            background:  #FFB400;

            transform: scale(0, 1);
            transform-origin: 0% 100%;
            transition: transform 0.3s ease;
            margin-bottom: -3px;
        }

        .aNav:hover::after{
            transform: scale(1, 1);
        }

    .logo {
        font-family: 'Work Sans', sans-serif;
        font-weight: 600;
        color: #FFFEFE;
        text-align: left;
    }

    .menuButton{
        font-family: 'Open Sans', sans-serif;
        font-weight: 700;
        font-size: 18px;
        margin-left: 38px;
    }

    .toolbar{
        background: #000000 !important;
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 1156px;
        margin: 0 auto;
        height: 131px;
        border: transparent;
        user-select: none;
    }
    .appBarContent{
        border: 1px solid #171718;
        background-color: #000;
        -webkit-box-shadow: -1px 14px 11px 1px rgba(0,0,0,0.7);
        -moz-box-shadow: -1px 14px 11px 1px rgba(0,0,0,0.7);
        box-shadow: -1px 14px 11px 1px rgba(0,0,0,0.7);
    }

    .drawerContainer{
        padding: 20px 30px,
    }

`;