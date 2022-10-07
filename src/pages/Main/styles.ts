import styled from "styled-components";

export const Container = styled.div`
    overflow: hidden;

    .aboutMe0{
        width: 100% ;
        padding: 180px 0;
        background-color: #0f0f0f;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .aboutMe{
        width: 100%;
        margin: 0 auto;
        max-width: 1156px;
        padding: 0 20px;

        > svg{
            position: absolute; 
            font-size: 200px;
            color: #0f0f0f;
            z-index: 9999;
            bottom: -395px;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .mySkills0{
        width: 100% ;
        padding: 100px 0px;
        margin: 0 auto;
        background-color: #161617;
        display: flex;
        justify-content: center;
        align-items: center;

        > svg{
            position: absolute; 
            font-size: 200px;
            color: #161617;
            z-index: 9999;
            bottom: -1820px;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
    .mySkills{
        width: 100%;
        margin: 0 auto;
        max-width: 1156px;

        
 
    }

    .projects{
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 100px 20px;
        background-color: #0f0f0f;
    }
`;