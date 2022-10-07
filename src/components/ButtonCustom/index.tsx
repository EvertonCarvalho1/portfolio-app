import React, { HTMLAttributeAnchorTarget } from "react";
import { Link } from 'react-scroll'

import { Container } from "./styles";

type Props = {
    text: string;
    href: string
    backgroundColor: string;
    to?: string;
}

export function ButtonCustom({ text, href, backgroundColor, to }: Props) {
    return (
        <Container backgroundColor={backgroundColor}>
            <div className="containerButton">
                <div className="animated-border"></div>
                <div className="corner">
                    {
                        to === undefined
                            ?
                            <a href={href} target={"_blank"} className="buttonSeeProjects">{text}</a>
                            :
                            <Link style={{ cursor: 'pointer' }} className="buttonSeeProjects" to={to === undefined ? '' : to} spy={true} smooth={true}
                                offset={-200} duration={1000}>{text}</Link>
                    }
                </div>
            </div>
        </Container>
    )
}
