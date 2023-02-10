import React, { useEffect } from "react";
import Aos from 'aos';

import dtmoney from '../../assets/dtmoney.png';
import letmeask from '../../assets/letmeask.png';
import gameplay from '../../assets/gameplay.png';
import gobarber from '../../assets/gobarber.png';
import githubExplorer from '../../assets/githubExplorer.png';
import devNews from '../../assets/devnews.png';

import { ProjectsItem } from "../../components/ProjectsItem";

import { Container } from "./styles";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";

export function Projects() {

    const projectsData = [
        {
            id: 1,
            repoImage: dtmoney,
            repoName: 'Dtmoney',
            repoDescription: 'Projeto de controle financeiro desenvolvido com o conteúdo estudado nas aulas do Chapter II da trilha de ReactJS do Bootcamp Ignite da Rocketseat.',
            repoLink: 'https://github.com/EvertonCarvalho1/dtmoney'
        },
        {
            id: 2,
            repoImage: gameplay,
            repoName: 'Gameplay-nlw',
            repoDescription: 'Aplicativo desenvolvido com React Native, lhe ajuda a conectar-se e organizar o momento de diversão e jogar com os amigos. Crie grupos para jogar seus games favoritos com seus amigos com esse App que possui autenticação com Discord.',
            repoLink: 'https://github.com/EvertonCarvalho1/gameplay-nlw'
        },
        {
            id: 3,
            repoImage: letmeask,
            repoName: 'Letmeask-nlw',
            repoDescription: 'Projeto desenvolvido com ReactJS é perfeito para criadores de conteúdos poderem criar salas de Q&A com o seu público, de uma forma muito organizada e democrática.',
            repoLink: 'https://github.com/EvertonCarvalho1/letmeask-nlw'
        },
        {
            id: 4,
            repoImage: gobarber,
            repoName: 'Gobarber-web',
            repoDescription: `Projeto desenvolvido durante o bootcamp GoStack 11 da Rocketseat.
            É um sistema Web que foi feito com ReactJS e tem por objetivo criar uma ferramenta de gerenciamento de agenda de barbeiros, facilitando a visualização de horários marcados e livres, filtrando por datas.`,
            repoLink: 'https://github.com/EvertonCarvalho1/gobarber-web'
        },
        {
            id: 5,
            repoImage: githubExplorer,
            repoName: 'Github-explorer',
            repoDescription: 'Github Explorer é uma aplicação em ReactJs onde é possível pesquisar por um usuário do Github e visualizar algumas informações de seu perfil, assim como seus repositórios.',
            repoLink: 'https://github.com/EvertonCarvalho1/github-explorer'
        },
        {
            id: 6,
            repoImage: devNews,
            repoName: 'Devnews-web',
            repoDescription: 'Esta é uma aplicação feita em ReactJs onde ela fornece tudo o que é necessário para cadastrar e gerenciar notícias.',
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
            <ArrowDropDown className="ArrowDropDown" />
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
                            repoId={item.id}
                        />
                    </div>

                ))
            }
        </Container>
    )
}

export default Projects;