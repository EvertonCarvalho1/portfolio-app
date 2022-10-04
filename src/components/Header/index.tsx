import React from "react";
import { ContainerHeader } from "./styles";

import logoImg from '../../assets/logo.png';

const Header: React.FC = () => {
    return (
        <ContainerHeader>
            <div className="container">
                <a href="#">
                    <img src={logoImg} alt="logo" />
                </a>
                <nav>
                    <a className="aNav" href="#">Sobre mim</a>
                    <a className="aNav" href="#">Minhas Skills</a>
                    <a className="aNav" href="#">Projetos</a>
                    <a className="aNav" href="#">Contato</a>
                </nav>
            </div>
        </ContainerHeader>
    )
}

export default Header;