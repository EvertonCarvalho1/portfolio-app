import React from "react";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import { Container } from "./styles";

const SocialMedia: React.FC = () => {
    return (
        <Container>
            <div className="socialMedia">
                <div>
                    <a href=""><GitHubIcon /></a>
                </div>

                <div>
                    <a href=""><LinkedInIcon /></a>
                </div>

                <div>
                    <a href=""><InstagramIcon /></a>
                </div>
            </div>
        </Container>
    )
}

export default SocialMedia;





