import React from "react";
import { Container } from "./styles";
import evertonImg from '../../assets/Everton.svg';

const AboutMe: React.FC = () => {
    return (
        <>
            <Container>
                <img src={evertonImg} alt="" />

                <div>
                    <h1>Sobre mim</h1>
                    <p>Sed ut purus dapibus, cursus lectus et, tempor ipsum. Proin eget lorem est. Aenean metus lacus, accumsan a porta vitae, sollicitudin ut arcu. Nulla ullamcorper suscipit justo nec vulputate. Sed placerat ullamcorper ligula cursus congue. Sed non quam id eros hendrerit efficitur vel ac lacus. Donec neque libero, sodales vestibulum lacus sed, ultrices malesuada leo. Fusce lacinia est vel justo congue sollicitudin</p>
                </div>
            </Container>
        </>
    )
}

export default AboutMe;

