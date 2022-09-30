import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

import Header from "../../components/Header";
import AboutMe from "../AboutMe";
import Home from "../Home";
import MySkills from "../MySkills";

import { Container } from "./styles";

const Main: React.FC = () => {
    useEffect(() => {
        Aos.init({
            duration: 3000,
            mirror: true
        });
    }, []);


    return (
        <>
            <Header />
            <Container>

                <div data-aos='fade-right'>
                    <Home />
                </div>

                <div data-aos='fade-right'>
                    <AboutMe />
                </div>

                <div data-aos='fade-right'>
                    <MySkills />
                </div>
            </Container>
        </>
    )
}

export default Main;

