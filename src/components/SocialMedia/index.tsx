import React from "react";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import { Container } from "./styles";

export function SocialMedia() {
    return (
        <Container>
            <div className="socialMedia">
                <div>
                    <a href="https://github.com/EvertonCarvalho1" target={"_blank"}><GitHubIcon /></a>
                </div>

                <div>
                    <a href="https://www.linkedin.com/in/everton-carvalho-9395a6137/" target={"_blank"}><LinkedInIcon /></a>
                </div>

                <div>
                    <a href="https://www.instagram.com/http.everton_/" target={"_blank"}><InstagramIcon /></a>
                </div>
            </div>
        </Container>
    )
}