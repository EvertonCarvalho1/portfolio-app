import React from "react";
import { Link } from 'react-scroll'

import { Container } from "./styles";
import logoImg from '../../assets/logo.png';

const Projects: React.FC = () => {


    return (


        <Container>

            <h1>Meus Projetos</h1>

            <div className='component'>
                <div>
                    <div className="img1">

                    </div>
                </div>

                <div>
                    <div className="title">
                        <h1>Dtmoney</h1>
                    </div>

                    <div className="article">
                        <p>Projeto de controle financeiro construído nas aulas do Chapter II da trilha de ReactJS do Ignite da Rocketseat</p>
                    </div>

                    <div className="containerFooter">
                        <div className="img2">

                        </div>
                        <div className="button">

                        </div>
                    </div>
                </div>

            </div>
        </Container>
    )
}

export default Projects;