import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 400px;
    max-width: 960px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1{
            font-size: 48px;
            line-height: 57px;
            font-weight: 600;
            color: #FFF;
            text-align: center;
            margin-bottom: 60px;
    }

    //.slick-next:before, .slick-prev:before

    .slick-next:before{
        color: #FFF;
        font-size: 40px;
        margin-left: 20px;
    }

    .slick-prev:before{
        color: #FFF;
        font-size: 40px;
        margin-right: 20px;
    }


    .slick-track{
        display: flex;
    }

    .slick-slider{
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        .slick-prev{
            position: absolute;
            left: 0;
            top: 50%;
            z-index: 9999;
        }
        .slick-next{
            position: absolute;
            right: 0;
            top: 50%;
        }

    }

    .imgContainer{
        width: 200px;
        height: 200px;
        display: flex !important;
        align-items: center;
        justify-content: center;
        a{
            background-color: transparent;
            border: none;
            cursor: pointer;
                img{
                    width: 170px;
                    height: 170px;
                    border-radius: 50%;
                    margin-left: 40px;
                }
        }
    }
`;