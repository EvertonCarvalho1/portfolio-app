import React from "react";
import { Container } from "./styles";

const MySkills: React.FC = () => {


    return (
        <Container>
            <div className="title">
                <h1>Minhas Skills</h1>
            </div>

            <div className="containerSkills">

                <div className="cardSkills">
                    <div className="icon">
                    </div>

                    <h1>Front-End</h1>

                    <ul>
                        <li>ReactJS</li>
                        <li>React Native</li>
                        <li>Typescript</li>
                        <li>Javascript</li>
                    </ul>
                </div>

                <div className="cardSkills">
                    <div className="icon">
                    </div>

                    <h1>Ferramentas</h1>

                    <ul>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>Visual Studio Code</li>
                        <li>Insomnia</li>
                    </ul>
                </div>

                <div className="cardSkills">
                    <div className="icon">
                    </div>

                    <h1>Outros</h1>

                    <ul>
                        <li>Jira</li>
                        <li>Trello</li>
                        <li>Swegger</li>
                    </ul>
                </div>

            </div>
        </Container>
    );
}

export default MySkills;


