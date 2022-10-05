import React from "react";
import { Link } from 'react-scroll'

import { ContainerHeader } from "./styles";
import logoImg from '../../assets/logo.png';

const Header: React.FC = () => {
    return (
        <ContainerHeader>
            <div className="container">
                <Link to="home" spy={true} smooth={true}
                    offset={-325} duration={1000}><img src={logoImg} alt="logo" /></Link>
                <nav>
                    <Link className="aNav" to="aboutMe" spy={true} smooth={true}
                        offset={-325} duration={1000}>Sobre mim</Link>
                    <Link className="aNav" to="mySkills" spy={true} smooth={true}
                        offset={-275} duration={1000}>Minhas Skills</Link>
                    <Link className="aNav" to="" spy={true} smooth={true}
                        offset={-325} duration={1000}>Projetos</Link>
                    <Link className="aNav" to="" spy={true} smooth={true}
                        offset={-325} duration={1000}>Contato</Link>
                </nav>
            </div>
        </ContainerHeader>
    )
}

export default Header;