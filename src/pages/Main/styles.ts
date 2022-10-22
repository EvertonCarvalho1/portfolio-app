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
        padding: 100px 20px ;
        background-color: #0f0f0f;
    }

    .contact{
        width: 100%;
        background-color: #161617;
        position: relative;
        padding: 100px;
 
        > svg{
            position: absolute; 
            font-size: 200px;
            color: #0f0f0f;
            bottom: 664px;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .whatsapp_float {
          position: fixed;
          width: 60px;
          height: 60px;
          bottom: 40px;
          right: 40px;
          background-color: #25d36694;  
          color: #FFF;
          border-radius: 50px;
          text-align: center;
          font-size: 30px;
          //box-shadow: 2px 2px 3px #999;
          z-index: 100;

          -webkit-box-shadow: -2px 2px 25px 10px rgba(0,0,0,0.75);
            -moz-box-shadow: -2px 2px 25px 10px rgba(0,0,0,0.75);
            box-shadow: -2px 2px 25px 10px rgba(0,0,0,0.75);
          &:hover{
            background-color: #25d3664d;
            transition: 0.3s ease ;
            transform: scale(1.1);
            -webkit-transform: scale(1.1);
            -ms-transform: scale(1.1);
        }
      }

      .whatsapp-icon {
          margin-top: 16px;
      }

      /* for mobile */
      @media screen and (max-width: 767px) {
          .whatsapp-icon {
              margin-top: 10px;
          }

          .whatsapp_float {
              width: 40px;
              height: 40px;
              bottom: 20px;
              right: 10px;
              font-size: 22px;
          }
      }

    @media (max-width: 900px){
        .aboutMe0{
        width: 100% ;
        padding: 100px 0;
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
        padding: 100px 20px ;
        background-color: #0f0f0f;
    }

    .contact{
        width: 100%;
        background-color: #161617;
        position: relative;
        padding: 100px;
 
        > svg{
            position: absolute; 
            font-size: 200px;
            color: #0f0f0f;
            bottom: 664px;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .ArrowDropDown{
        display: none;
    }

    }


`;