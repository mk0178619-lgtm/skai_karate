import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "../styles/Instructor.css";

function InstructorCarousel() {
  const instructors = [
    { id: 1, name: "Sempei Dr. C. Sandhiya", rank: "1st Dan Black Belt", des: "Assistant Instructor - SKAI Karate", img: "/instructor/SANDHIYA.JPG" },
    { id: 2, name: "Sempei C. Arunkumar, MCA", rank: "2nd Dan Black Belt", des: "Assistant Instructor - SKAI Karate, Accredited Coach - KIO", img: "/instructor/ARUNKUMAR.JPG" },
    { id: 3, name: "Sempei B. Saravanakumar, M.Com", rank: "2nd Dan Black Belt", des: "Assistant Instructor - SKAI Karate, Certified Coach - KIO", img: "/instructor/SARAVANAKUMAR.JPG"},
    { id: 4, name: "Sempei R. VijayKrishna, MBA", rank: "1st Dan Black Belt", des: "Assistant Instructor - SKAI Karate", img: "/instructor/VIJAYKRISHNA.JPG" },
    { id: 5, name: "Sempei B. Surya, BCA", rank: "1st Dan Black Belt", des:"Assistant Instructor - SKAI Karate", img: "/instructor/SURYA.JPG" },
    { id: 6, name: "Sempei V. Karthikeyan, B.Com", rank: "1st Dan Black Belt", des:"Assistant Instructor - SKAI Karate", img: "/instructor/KARTHIKEYAN.JPG" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

  function getItemsPerPage() {
    if (window.innerWidth <= 768) return 1;   
    if (window.innerWidth <= 1024) return 2;  
    return 3;                                 
  }

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
      setCurrentIndex(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(instructors.length / itemsPerPage);

  const nextSlide = () => {
    if (currentIndex < totalSlides - 1) setCurrentIndex(currentIndex + 1);
  };

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className="carousel-container">
      {/* Heading */}
      <h2 className="carousel-title">
        If you want to be the best <br /> You learn from the best
      </h2>

      {/*Featured Card below heading */}
      <div className="featured-card">
        <img src="/instructor/MANIKANDAN.JPG" alt="Featured Sensei" />
        <div className="featured-info">
          <h3>Sensei K. Manikandan</h3>
          <p>4th Dan Black Belt<br />Asst. Chief Instructor- SKAI Karate, National Judge - KIO, Joint Secretary - TDSKA</p>
        </div>
      </div>

      {/* Carousel */}
      <div className="carousel-wrapper" {...handlers}>
        <div className="carousel-content">
          {instructors
            .slice(currentIndex * itemsPerPage, currentIndex * itemsPerPage + itemsPerPage)
            .map((inst) => (
              <div key={inst.id} className="card">
                <img src={inst.img} alt={inst.name} />
                <h3>{inst.name}</h3>
                <p>{inst.rank}<br />{inst.des}</p>
              </div>
            ))}
        </div>
      </div>

      {/* Dots */}
      <div className="carousel-dots">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default InstructorCarousel;
