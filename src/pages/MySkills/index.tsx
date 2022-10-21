import React, { useEffect } from "react";
import Aos from "aos";
import WebIcon from '@mui/icons-material/Web';
import ConstructionIcon from '@mui/icons-material/Construction';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

import { Container } from "./styles";

export function MySkills() {

    useEffect(() => {
        Aos.init({
            duration: 3000,
            mirror: true
        });
    }, []);

    return (
        <Container>
            <div className="title">
                <h1>Habilidades</h1>
            </div>

            <div className="containerSkills">
                <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    className="cardSkills"
                    data-aos-offset="300"
                    data-aos-duration="1000"
                >
                    <div className="icon">
                        <WebIcon />
                    </div>

                    <h1>Front-End</h1>

                    <ul>
                        <li>ReactJS</li>
                        <li>React Native</li>
                        <li>Typescript</li>
                        <li>Javascript</li>
                    </ul>
                </div>

                <div
                    data-aos="fade-down"
                    data-aos-anchor-placement="top-bottom"
                    className="cardSkills"
                    data-aos-offset="300"
                    data-aos-duration="1000"
                >
                    <div className="icon">
                        <ConstructionIcon />
                    </div>

                    <h1>Ferramentas</h1>

                    <ul>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>Visual Studio Code</li>
                        <li>Insomnia</li>
                    </ul>
                </div>

                <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    className="cardSkills"
                    data-aos-offset="300"
                    data-aos-duration="1000"
                >
                    <div className="icon">
                        <LibraryAddIcon />
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
