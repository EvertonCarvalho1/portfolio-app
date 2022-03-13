import React from "react";
import { ContainerHeader } from "./styles";

const Header: React.FC = () => {
    return (
        <ContainerHeader>
            <a href="#">
                <h1>{`<E.Dev/>`}</h1>
            </a>
            <nav>
                <a className="aNav" href="">Sobre mim</a>
                <a className="aNav" href="">Minhas Skills</a>
                <a className="aNav" href="">Projetos</a>
                <a className="aNav" href="">Contato</a>
            </nav>
           
        </ContainerHeader>
     
    )
}

export default Header;