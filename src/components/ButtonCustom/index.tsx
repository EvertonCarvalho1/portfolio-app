import React, { HTMLAttributeAnchorTarget } from "react";
import { Link } from 'react-scroll'

import { Container } from "./styles";

type Props = {
    text: string;
    href: string
    backgroundColor: string;
}

export function ButtonCustom({ text, href, backgroundColor }: Props) {
    return (
        <Container backgroundColor={backgroundColor}>
            <div className="containerButton">
                <div className="animated-border"></div>
                <div className="corner">
                    <a href={href} target={"_blank"} className="buttonSeeProjects">{text}</a>
                </div>
            </div>
        </Container>
    )
}
