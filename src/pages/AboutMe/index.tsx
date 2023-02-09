import React from "react";
import { Container } from "./styles";
import evertonImg from '../../assets/everton.png';
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
                    <p style={{ marginBottom: 15 }}>
                        Atualmente, atuo como desenvolvedor front-end e tenho experiência em tecnologias como ReactJS, React Native, TypeScript e JavaScript.
                    </p>

                    <p style={{ marginBottom: 15 }}>
                        Além disso, tenho conhecimento no desenvolvimento back-end utilizando NodeJS, PostgreSQL e SQLite.
                    </p>

                    <p>
                        Facilitar a vida das pessoas com o meu trabalho é o que me motiva.
                    </p>
                </div>
                <SocialMedia />
            </div>
        </Container>
    )
}

