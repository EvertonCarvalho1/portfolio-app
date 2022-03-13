import React from "react";
import { Container } from "./styles";
import downloadImg from '../../assets/download.svg';
import DownloadIcon  from '@mui/icons-material/Download';

const Home: React.FC = () => {
    return (
        <Container>
            <div>
                <h1>Olá, sou <span>Everton Carvalho.</span></h1>
                <h1>Desenvolvedor Front-end</h1>
                <h3>Este é meu portfolio!</h3>
            </div>
            <div className="buttonContainer">
                <button className="buttonSeeProjects">Ver Projetos</button>
                <button 
                className="buttonDownload"
                >
                    <DownloadIcon/>
                    Baixar Currículo
                </button>
            </div>
        </Container>
    )
};

export default Home;