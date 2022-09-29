import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    max-width: 960px;
    margin: 50px auto;

    h1{
            font-size: 48px;
            line-height: 57px;
            font-weight: 500;
            color: #FFF;
            text-align: center;
            margin-bottom: 20px;
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
                }
        }
    }
`;