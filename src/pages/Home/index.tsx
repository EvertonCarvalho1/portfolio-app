import React from "react";
import { Container } from "./styles";
import { SocialMedia } from "../../components/SocialMedia";
import linesBg from '../../assets/lines.mp4'
import { Link } from 'react-scroll'

export function Home() {
    return (
        <Container>
            <div className='main'>

                <video src={linesBg} autoPlay loop muted />
                <div className="overlay"></div>

                <div className="containerHome">
                    <SocialMedia />
                    <div className='containerText'>
                        <div className="homeTextContainer">
                            <h1>Olá, me chamo <span>Everton!</span></h1>
                            <div className="homeDescription">
                                <h1 >Um desenvolvedor curioso, que está sempre <br /> procurando aprender mais.</h1>
                            </div >
                        </div>

                        <div className="welcomeText">
                            <h1>Bem vindo ao meu portfolio!</h1>
                        </div>

                        <Link style={{ cursor: 'pointer' }} className="buttonSeeProjects" to={'projects'} spy={true} smooth={true}
                            offset={-200} duration={1000}>Ver Projetos</Link>

                    </div>
                </div>
            </div>

        </Container>
    )
};