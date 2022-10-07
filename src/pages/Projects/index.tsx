import React from "react";
import { Link } from 'react-scroll'

import { Container } from "./styles";
import dtmoney from '../../assets/dtmoney.png';

export function Projects() {
    return (
        <Container>

            <h1>Meus Projetos</h1>

            <div className='component'>

                <div className="img1">
                    <img src={dtmoney} alt='dtmoney' />
                </div>


                <div>
                    <div className="title">
                        <h1>Dtmoney</h1>
                    </div>

                    <div className="article">
                        <p>Projeto de controle financeiro construído nas aulas do Chapter II da trilha de ReactJS do Ignite da Rocketseat</p>
                    </div>

                    <div className="containerFooter">
                        <div className="button">

                        </div>
                    </div>
                </div>

            </div>
        </Container>
    )
}

export default Projects;