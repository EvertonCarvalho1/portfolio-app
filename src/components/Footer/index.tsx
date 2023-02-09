import React from "react";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import { Container } from "./styles";

export function Footer() {

    const date = new Date().getFullYear();

    return (
        <Container>
            <div className="socialMedia">

                <div>
                    <a rel="noreferrer" href="https://github.com/EvertonCarvalho1" target={"_blank"}><GitHubIcon /></a>
                </div>

                <div>
                    <a rel="noreferrer" href="https://www.linkedin.com/in/everton-carvalho-9395a6137/" target={"_blank"}><LinkedInIcon /></a>
                </div>

                <div>
                    <a rel="noreferrer" href="https://www.instagram.com/http.everton_/" target={"_blank"}><InstagramIcon /></a>
                </div>

            </div>

            <h1>
                {`© Copyright ${date} - Everton Carvalho.`} <br />
                Todos os direitos reservados.
            </h1>
        </Container>
    )
}
