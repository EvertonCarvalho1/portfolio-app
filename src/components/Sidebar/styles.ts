import styled from "styled-components";

export const ContainerSidebar = styled.div`

width: 305px;
height: 1315px;
background: #242526;
margin-right: 30px;
;
`;

export const SidebarContent = styled.div`
padding-top: 52px;
padding: 52px 81px 0 74px;
width: 100%;

h1{
    text-align: center;
    color: #FFF;
    font-size: 18px;
    margin-bottom: 15px;
}

p{
    color: #767676;
    font-size: 15px;
    text-align: center;
}
    .imagem{
        width: 150px;
        height: 150px;
        background: yellow;
        border-radius: 50%;
        margin-bottom:29px ;
    }

    .icons{
        display: flex;
        width: 100%;
    }
    .iconColor{
        width: 100%;
        max-width: 25px;
        height: 23px;
        background: yellow;
        margin-top: 24px;
        margin-right: 3px;
        border-radius: 50%;
    }
`;