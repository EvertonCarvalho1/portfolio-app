import React from "react";
import Slider from "react-slick";




import { Container } from "./styles";

const MySkills: React.FC = () => {
  
        const settings = {
        
            infinite: true,
            autoplay: true,
            speed: 200,
            autoplaySpeed: 6000,
            cssEase: "linear",
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
        };
       
        return (
            <Container>
            <Slider {...settings}>
                {[1, 2, 3, 4].map((item, index) => {
                    return (
                        <div key={index}>
                            <h1> {item}</h1>
                        </div>
                    )
                })}
            </Slider>
          </Container>
          );
           

}

export default MySkills;


 