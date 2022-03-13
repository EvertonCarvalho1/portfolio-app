import React from "react";
import Header from "../../components/Header";
import AboutMe from "../AboutMe";
import Home from "../Home";
import { Container } from "./styles";

const Main: React.FC = () => {
    return (
        <>
            <Container>
                <Header />
                <Home />
                <AboutMe />
            </Container>
        </>
    )
}

export default Main;