import styled from "styled-components";

export const Container = styled.div`
.header{
   
    
}
        @media (max-width: 900px){
            padding-left: 0;
        }
        img{
            width: 50px;
            height: 50px;
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
        max-width: 1000px;
        margin: 0 auto;
  
        height: 131px;
   
   
        z-index: 9999;
        user-select: none;
        -webkit-box-shadow: -1px 14px 11px 1px rgba(0,0,0,0.7);
        -moz-box-shadow: -1px 14px 11px 1px rgba(0,0,0,0.7);
        box-shadow: -1px 14px 11px 1px rgba(0,0,0,0.7);

    }

    .drawerContainer{
        padding: 20px 30px,
    }

`;