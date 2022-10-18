import React, { useEffect } from "react";
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { Header } from "../../components/Header";
import { AboutMe } from "../AboutMe";
import { Home } from "../Home";
import { MySkills } from "../MySkills";
import { Projects } from "../Projects";

import { Container } from "./styles";
import Contact from "../Contact";
import { Toaster } from "react-hot-toast";
import { Footer } from "../../components/Footer";

export function Main() {
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
                <div><Toaster /></div>
                <div
                    id="home"
                    data-aos='fade-right'
                    data-aos-offset="500"
                    data-aos-easing="ease-in-sine"
                    className="home0"
                    data-aos-anchor=".home0"
                    data-aos-duration="500"
                >
                    <Home />
                </div>

                <div
                    className="aboutMe0"
                >
                    <div
                        id="aboutMe"
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
                        id="mySkills"
                        className="mySkills"
                    >
                        <MySkills />
                    </div>
                </div>

                <div
                    className='projects'
                    id="projects"
                >
                    <Projects />
                </div>

                <div
                    className='contact'
                    id="contact"
                >
                    <ArrowDropDown />
                    <Contact />
                </div>

            </Container>
            <Footer />
        </>
    )
}