import React from "react";
import { Container } from "./styles";
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import SocialMedia from "../../components/SocialMedia";

const Home: React.FC = () => {
    return (
        <Container>
            <div className="containerHome">
                <SocialMedia />
                <div className='containerText'>
                    <div className="homeTextContainer">
                        <h1>Olá, Me chamo <span>Everton!</span></h1>
                        <div className="homeDescription">
                            <h1 >Um desenvolvedor curioso, que está sempre <br /> procurando aprender mais.</h1>
                        </div >
                    </div>

                    <div className="welcomeText">
                        <h1>Bem vindo ao meu portfolio!</h1>
                    </div>

                    <div className="containerButton">
                        <div className="animated-border"></div>
                        <div className="corner">
                            <button className="buttonSeeProjects">Ver Projetos</button>
                        </div>
                    </div>
                </div>
            </div>
            <ArrowDropDown />
        </Container>
    )
};

export default Home;