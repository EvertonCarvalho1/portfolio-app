import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

import Header from "../../components/Header";
import AboutMe from "../AboutMe";
import Home from "../Home";
import MySkills from "../MySkills";
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';

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
                    data-aos-duration="500"
                >
                    <Home />
                </div>

                <div className="aboutMe0">
                    <div
                        className="aboutMe"
                        data-aos='fade-right'
                        data-aos-anchor=".aboutMe0"
                        data-aos-easing="ease-in-sine"
                        data-aos-offset="500"
                        data-aos-duration="500"
                    >
                        <AboutMe />
                        <ArrowDropDown />
                    </div>
                </div>

                <div
                    className="mySkills0"
                >
                    <div
                        className="mySkills"
                        data-aos='fade-right'
                        data-aos-anchor=".mySkills"
                        data-aos-easing="ease-in-sine"
                        data-aos-offset="500"
                        data-aos-duration="500"
                    >
                        <MySkills />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Main;

