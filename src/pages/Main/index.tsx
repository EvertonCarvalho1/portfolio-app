import React from "react";
import Header from "../../components/Header";
import AboutMe from "../AboutMe";
import Home from "../Home";
import MySkills from "../MySkills";
import { Container } from "./styles";

const Main: React.FC = () => {
    return (
        <>
            <Container>
                <Header />
                <Home />
                <AboutMe />
                <MySkills />
            </Container>
        </>
    )
}

export default Main;