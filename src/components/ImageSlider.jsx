// components/ImageSlider.js
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true, // ✅ auto height per image
  };

  const images = [
    "/Preloader.png",
    "/blackbelts/a.png.jpg",
  ];

  return (
    <div style={{ width: "100vw", overflow: "hidden" }}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div
            key={index}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "black", // filler if aspect ratio doesn’t match width
            }}
          >
            <img
              src={img}
              alt={`slide-${index}`}
              style={{
                width: "100%",   // ✅ full screen width
                height: "auto",  // ✅ keep full image visible
                objectFit: "hidden",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
