import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/ImageSlider.css";

function ImageSlider() {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const images = [
    "/home/1.JPG",
    "/home/2.JPG",
    "/home/3.JPG",
    "/home/4.JPG",
    "/home/5.JPG",
    "/home/6.JPG",
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div className="slide" key={index}>
            <img src={img} alt={`slide-${index}`} className="slide-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
