import React from "react";
import { Link } from 'react-scroll'

import { Container } from "./styles";
import dtmoney from '../../assets/dtmoney.png';
import { ButtonCustom } from "../../components/ButtonCustom";

export function Projects() {
    return (
        <Container>

            <h1>Meus Projetos</h1>

            <div className='component'>
                <div className="img1">
                    <img src={dtmoney} alt='dtmoney' />
                </div>
                <div>
                    <h1>Dtmoney</h1>
                    <div className="article">
                        <p>Projeto de controle financeiro construído nas aulas do Chapter II da trilha de ReactJS do Ignite da Rocketseat</p>
                    </div>
                    <div className="containerFooter">
                        <ButtonCustom
                            text="Ver repositório"
                            href="https://github.com/EvertonCarvalho1/dtmoney"
                            backgroundColor='#0a0a0c'
                        />
                    </div>
                </div>

            </div>
        </Container>
    )
}

export default Projects;