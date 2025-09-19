// components/ImageSlider.js
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    "/Preloader.png",
    "/blackbelts/a.png.jpg",
    "/images/slide3.jpg",
  ];

  return (
    <Slider {...settings}>
      {images.map((img, index) => (
        <div key={index}>
          <img
            src={img}
            alt={`slide-${index}`}
            style={{ width: "100%", height: "500px", objectFit: "cover" }}
          />
        </div>
      ))}
    </Slider>
  );
}

export default ImageSlider;
