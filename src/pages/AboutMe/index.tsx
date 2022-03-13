import React from "react";
import { Container } from "./styles";
import evertonImg from '../../assets/Everton.svg';
import GitHubIcon  from '@mui/icons-material/GitHub';
import LinkedInIcon  from '@mui/icons-material/LinkedIn';
import InstagramIcon  from '@mui/icons-material/Instagram';

const AboutMe: React.FC = () => {
    return (
        <>
            <Container>
                

                <div className="aboutMecontainer">

                    <img src={evertonImg} alt="Everton Dev" /> 

                    <div className="aboutMeDescription">
                        <h1>Sobre mim</h1>
                        <p>
                            Atualmente trabalho como desenvolvedor Front-end na Conecto e também sou estudante de Análise e Desenvolvimento de Sistemas.
                        </p>

                        <p>
                            Adoro aprender coisas novas, trabalhar em equipe e resolver problemas. Facilitar a vida das pessoas com o meu trabalho é o que me motiva.
                        </p>
                        <div className="socialMedia">
                            <a href=""><GitHubIcon /></a>
                            <a href=""><LinkedInIcon /></a>
                            <a href=""><InstagramIcon /></a>
                            <span>Me siga!</span>
                        </div>
                    
                    </div> 
                </div>
            </Container>
        </>
    )
}

export default AboutMe;

