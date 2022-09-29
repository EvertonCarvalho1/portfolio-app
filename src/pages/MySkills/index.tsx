import React from "react";
import Slider from "react-slick";
import { Container } from "./styles";

import ReactImg from '../../assets/react.png';
import TypescriptImg from '../../assets/typescript.png';
import JavascriptImg from '../../assets/javascript.png';
import SassImg from '../../assets/sass.png';
import HtmlImg from '../../assets/html.png';
import css from '../../assets/css.png';
import git from '../../assets/git.png';
import github from '../../assets/github.png';

const MySkills: React.FC = () => {

    const settings = {
        infinite: true,
        autoplay: true,
        speed: 200,
        autoplaySpeed: 3000,
        cssEase: "linear",
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        pauseOnHover: false,
    };

    const logos = [
        {
            id: 1,
            src: ReactImg
        },
        {
            id: 2,
            src: TypescriptImg
        },
        {
            id: 3,
            src: JavascriptImg
        },
        {
            id: 4,
            src: SassImg
        },
        {
            id: 5,
            src: HtmlImg
        },
        {
            id: 6,
            src: css
        },
        {
            id: 7,
            src: git
        },
        {
            id: 8,
            src: github
        },
    ]

    return (
        <Container>
            <Slider {...settings}>
                {logos.map((item, index) => {
                    return (
                        <div
                            className="imgContainer"
                            key={item.id}
                        >
                            <a>
                                <img src={item.src} />

                            </a>
                        </div>
                    )
                })}
            </Slider>
        </Container>
    );
}

export default MySkills;


