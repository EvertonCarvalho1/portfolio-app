import React from "react";
import { Link } from 'react-scroll'

import { Container } from "./styles";

export function ButtonCustom() {
    return (
        <Container>
            <div className="containerButton">
                <div className="animated-border"></div>
                <div className="corner">
                    <a href="https://github.com/EvertonCarvalho1" target={"_blank"} className="buttonSeeProjects">Ver Projetos</a>
                </div>
            </div>
        </Container>
    )
}
