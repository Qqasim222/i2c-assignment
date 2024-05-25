import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./customArrows";
import TrustedByImage from "../../../assets/trustedByImg.svg";

const SimpleSlider: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Slider {...settings}>
        <div>
          <img src={TrustedByImage} style={{ margin: 'auto' }} />
        </div>
        <div>
          <img src={TrustedByImage} style={{ margin: 'auto' }} />
        </div>
        <div>
          <img src={TrustedByImage} style={{ margin: 'auto' }} />
        </div>
      </Slider>
      <style>{`
        .slick-prev:before, .slick-next:before {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default SimpleSlider;
