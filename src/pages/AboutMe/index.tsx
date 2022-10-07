import React from "react";
import { Container } from "./styles";
import evertonImg from '../../assets/Everton.svg';
import { SocialMedia } from "../../components/SocialMedia";

export function AboutMe() {
    return (
        <Container>
            <div className="aboutMecontainer">
                <div className="imgContainer">
                    <img src={evertonImg} alt="Everton Dev" />
                </div>

                <div className="aboutMeDescription">
                    <h1>Sobre mim</h1>
                    <p>
                        Atualmente trabalho como desenvolvedor Front-end na Conecto e também sou estudante de Análise e Desenvolvimento de Sistemas.
                    </p>

                    <p>
                        Adoro aprender coisas novas, trabalhar em equipe e resolver problemas. Facilitar a vida das pessoas com o meu trabalho é o que me motiva.
                    </p>
                </div>
                <SocialMedia />
            </div>
        </Container>
    )
}