import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "../styles/Instructor.css";

function InstructorCarousel() {
  const instructors = [
    { id: 1, name: "Sensei R. Takeshi Fukuchi", rank: "8th Dan", img: "/blackbelts/a.png.jpg" },
    { id: 2, name: "Sensei Carlos Marcos Gigena", rank: "6th Dan", img: "/blackbelts/a.png.jpg" },
    { id: 3, name: "Sensei Dodi Rochadi", rank: "6th Dan", img: "/blackbelts/a.png.jpg"},
    { id: 4, name: "Sensei Júlio Almeida", rank: "5th Dan", img: "/blackbelts/a.png.jpg" },
    { id: 5, name: "Sensei Instructor 5", rank: "4th Dan", img: "/blackbelts/a.png.jpg" },
    { id: 6, name: "Sensei Instructor 6", rank: "3rd Dan", img: "/blackbelts/a.png.jpg" },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

  // ✅ Helper to decide items per page based on screen width
  function getItemsPerPage() {
    if (window.innerWidth <= 768) return 1;   // mobile
    if (window.innerWidth <= 1024) return 2;  // tablet
    return 3;                                 // desktop
  }

  // ✅ Update items per page on resize
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
      <h2 className="carousel-title">
        If you want to be the best <br /> You learn from the best
      </h2>

      <div className="carousel-wrapper" {...handlers}>
        <div className="carousel-content">
          {instructors
            .slice(currentIndex * itemsPerPage, currentIndex * itemsPerPage + itemsPerPage)
            .map((inst) => (
              <div key={inst.id} className="card">
                <img src={inst.img} alt={inst.name} />
                <h3>{inst.name}</h3>
                <p>{inst.rank}</p>
              </div>
            ))}
        </div>
      </div>

      {/* ✅ Pagination dots */}
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
