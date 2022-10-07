import React, { useEffect } from "react";
import Aos from 'aos';

import dtmoney from '../../assets/dtmoney.png';
import { ProjectsItem } from "../../components/ProjectsItem";

import { Container } from "./styles";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";

export function Projects() {

    const projectsData = [
        {
            id: 1,
            repoImage: dtmoney,
            repoName: 'Dtmoney',
            repoDescription: 'Projeto de controle financeiro construído nas aulas do Chapter II da trilha de ReactJS do Ignite da Rocketseat.',
            repoLink: 'https://github.com/EvertonCarvalho1/dtmoney'
        },
        {
            id: 2,
            repoImage: dtmoney,
            repoName: 'Letmeask-nlw',
            repoDescription: 'Letmeask é perfeito para criadores de conteúdos poderem criar salas de Q&A com o seu público, de uma forma muito organizada e democrática.',
            repoLink: 'https://github.com/EvertonCarvalho1/letmeask-nlw'
        },
        {
            id: 3,
            repoImage: dtmoney,
            repoName: 'Gameplay-nlw',
            repoDescription: 'Projeto desenvolvido na missão React Native no NLW #06',
            repoLink: 'https://github.com/EvertonCarvalho1/gameplay-nlw'
        },
        {
            id: 4,
            repoImage: dtmoney,
            repoName: 'Gobarber-web',
            repoDescription: 'Plataforma web do gobarber, construído utilizando React.js e Typescript.',
            repoLink: 'https://github.com/EvertonCarvalho1/gobarber-web'
        },
        {
            id: 5,
            repoImage: dtmoney,
            repoName: 'Github-explorer',
            repoDescription: 'Projeto desenvolvido nas aulas do Bootcamp GoStack 11 da Rocketseat.',
            repoLink: 'https://github.com/EvertonCarvalho1/github-explorer'
        },
        {
            id: 6,
            repoImage: dtmoney,
            repoName: 'Devnews-web',
            repoDescription: 'Esta aplicação fornece tudo o que é necessário para cadastrar e gerenciar notícias.',
            repoLink: 'https://github.com/EvertonCarvalho1/devnews-web'
        },
    ]

    useEffect(() => {
        Aos.init({
            duration: 3000,
            mirror: true
        });
    }, []);

    return (
        <Container>
            <ArrowDropDown />
            <h1>Meus Projetos</h1>
            {
                projectsData.map((item) => (

                    <div
                        className="projectsContainer"
                        data-aos='fade-right'
                        data-aos-easing="ease-in-sine"
                        data-aos-offset="200"
                        data-aos-duration="500"
                        key={item.id}
                    >
                        <ProjectsItem
                            repoImage={item.repoImage}
                            repoName={item.repoName}
                            repoDescription={item.repoDescription}
                            repoLink={item.repoLink}
                        />
                    </div>

                ))
            }
        </Container>
    )
}

export default Projects;