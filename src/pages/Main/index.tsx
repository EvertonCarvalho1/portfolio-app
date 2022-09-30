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
                <div
                    data-aos='fade-right'
                    data-aos-offset="500"
                    data-aos-easing="ease-in-sine"
                    className="home0"
                    data-aos-anchor=".home0"
                    data-aos-duration="1000"
                >
                    <Home />
                </div>

                <div className="aboutMe0">

                    <div
                        className="aboutMe"
                        data-aos='fade-right'
                        data-aos-anchor=".aboutMe"
                        data-aos-offset="200"
                        data-aos-duration="500"
                    >
                        <AboutMe />
                    </div>
                </div>

                <div
                    className="mySkills0"
                    data-aos='fade-right'
                    data-aos-anchor=".mySkills0"
                    data-aos-offset="150"
                    data-aos-duration="500"
                >
                    <MySkills />
                </div>
            </Container>
        </>
    )
}

export default Main;

