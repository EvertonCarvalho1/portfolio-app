import React from "react";
import { Link } from 'react-scroll'

import { Container } from "./styles";
import { ButtonCustom } from "../ButtonCustom";

type Props = {
    repoImage: string;
    repoName: string;
    repoDescription: string;
    repoLink: string;
    repoId: number;
}

export function ProjectsItem({ repoDescription, repoImage, repoLink, repoName, repoId }: Props) {
    return (
        <Container repoId={repoId}>

            <div className="img1">
                <img src={repoImage} alt={repoName} />
            </div>

            <div className="projectDescription">

                <h1>{repoName}</h1>

                <div className="article">
                    <p>{repoDescription}</p>
                </div>
                <div className="containerFooter">
                    <ButtonCustom
                        text="Ver repositório"
                        href={repoLink}
                        backgroundColor='#0a0a0c'
                    />
                </div>
            </div>

        </Container>
    )
}
