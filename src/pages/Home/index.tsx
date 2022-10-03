import React from "react";
import { Container } from "./styles";
import downloadImg from '../../assets/download.svg';
import DownloadIcon from '@mui/icons-material/Download';

const Home: React.FC = () => {
    return (
        <Container>
            <div className="homeTextContainer">
                <h1>Olá, Me chamo <span>Everton!</span></h1>
                <div className="homeDescription">
                    <h1 >Um desenvolvedor curioso, que está sempre <br /> procurando aprender mais.</h1>


                </div >
            </div>

            <div className="welcomeText">
                <h1>Bem vindo ao meu portfolio!</h1>
            </div>

            <div className="container">
                <div className="animated-border"></div>
                <div className="corner">

                    <button className="buttonSeeProjects">Ver Projetos</button>

                </div>
            </div>
        </Container>
    )
};

export default Home;